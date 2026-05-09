import { useEffect, useRef, useState } from 'react';
import { PixelDither } from './PixelDither';

type Point = {
  x: number;
  y: number;
};

type Dot = Point & {
  ox: number;
  oy: number;
  delay: number;
  accent: boolean;
  group: 0 | 1;
  sx: number;
  sy: number;
  size: number;
};

const layers = [
  {
    num: '01',
    name: 'observe',
    title: 'capture',
    body: 'Reads, edits, commands, tests, and agent handoffs are captured as local evidence.',
  },
  {
    num: '02',
    name: 'compile',
    title: 'state',
    body: 'Noisy work becomes a compact state card with decisions, receipts, and open risks.',
  },
  {
    num: '03',
    name: 'admit',
    title: 'route',
    body: 'The next model call receives only the context it needs; the rest stays behind pointers.',
  },
  {
    num: '04',
    name: 'govern',
    title: 'remember',
    body: 'Useful context is promoted, stale context is suppressed, and every claim stays auditable.',
  },
];

const terminalSteps = [
  {
    title: '~/dhee - onboarding',
    label: '01 / initialize',
    command: 'dhee init --repo .',
    lines: [
      ['ok', 'workspace detected: coding repo'],
      ['ok', 'local evidence store created'],
      ['ok', 'AGENTS.md and repo rules indexed'],
      ['next', 'compile context before the next agent turn'],
    ],
  },
  {
    title: '~/dhee - capture',
    label: '02 / capture work',
    command: 'dhee capture --agent codex',
    lines: [
      ['read', 'files, shell output, tests, edits, and handoff notes'],
      ['digest', 'large tool results stored behind pointers'],
      ['receipt', 'evidence linked to the state card'],
      ['privacy', 'raw activity stays local until promoted'],
    ],
  },
  {
    title: '~/dhee - compile',
    label: '03 / compile state',
    command: 'dhee context compile --task "ship fix"',
    lines: [
      ['goal', 'current task and constraints refreshed'],
      ['plan', 'active todos and blockers rendered compactly'],
      ['evidence', 'recent files and tests linked by receipt'],
      ['result', 'agent starts from state, not transcript fog'],
    ],
  },
  {
    title: '~/dhee - route',
    label: '04 / route context',
    command: 'dhee inject --agent claude-code',
    lines: [
      ['admit', 'project rules, current files, and live state card'],
      ['suppress', 'old transcript, duplicate tool output, stale plans'],
      ['expand', 'raw evidence only if the model asks for a pointer'],
      ['ready', 'Claude Code sees the useful part of the work'],
    ],
  },
  {
    title: '~/dhee - govern',
    label: '05 / remember or forget',
    command: 'dhee ledger inspect',
    lines: [
      ['assert', 'facts linked back to admitted evidence'],
      ['warn', 'stale assumptions flagged before reuse'],
      ['promote', 'stable decisions become repo memory'],
      ['forget', 'irrelevant context stays out of the prompt'],
    ],
  },
];

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;
const smooth = (value: number) => value * value * (3 - 2 * value);

function ramp(progress: number, start: number, end: number) {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return smooth((progress - start) / (end - start));
}

function rampDown(progress: number, start: number, end: number) {
  return 1 - ramp(progress, start, end);
}

function bell(progress: number, start: number, peak: number, end: number) {
  if (progress <= start || progress >= end) return 0;
  if (progress < peak) return smooth((progress - start) / (peak - start));
  return smooth(1 - (progress - peak) / (end - peak));
}

function makeChaosTargets(count: number, width: number, height: number): Point[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
  }));
}

function makeChannelTargets(count: number, width: number, height: number): Point[] {
  const center = width * 0.62;
  const columnWidth = Math.min(88, width * 0.11);

  return Array.from({ length: count }, (_, index) => {
    const progress = index / count;
    return {
      x: center + (Math.random() - 0.5) * columnWidth,
      y: 42 + progress * (height - 84) + (Math.random() - 0.5) * 8,
    };
  });
}

function makeBandTargets(count: number, width: number, height: number): Point[] {
  const bands = 15;
  const margin = Math.max(58, height * 0.12);
  const usableHeight = Math.max(1, height - margin * 2);
  const spacing = usableHeight / bands;
  const bandHeight = spacing * 0.42;

  return Array.from({ length: count }, () => {
    const band = Math.floor(Math.random() * bands);
    const centerY = margin + band * spacing + spacing / 2;
    return {
      x: Math.random() * width,
      y: centerY + (Math.random() - 0.5) * bandHeight,
    };
  });
}

function makeLayerTargets(count: number, width: number, height: number) {
  const layerCount = 4;
  const top = height * 0.24;
  const bottom = height * 0.79;
  const layerSpacing = (bottom - top) / (layerCount - 1);
  const promoted: Point[] = [];
  const raw: Point[] = [];

  for (let index = 0; index < count; index += 1) {
    const layer = index % layerCount;
    const centerY = top + layer * layerSpacing;

    promoted.push({
      x: Math.random() * width * 0.9 + width * 0.05,
      y: centerY + (Math.random() - 0.5) * 28,
    });

    raw.push({
      x: Math.random() * width,
      y: Math.random() * height,
    });
  }

  return { promoted, raw };
}

function bitmapTargets(
  draw: (context: CanvasRenderingContext2D, width: number, height: number) => void,
  count: number,
  width: number,
  height: number,
): Point[] {
  if (width < 2 || height < 2) {
    return Array.from({ length: count }, () => ({ x: width / 2, y: height / 2 }));
  }

  const offscreen = document.createElement('canvas');
  offscreen.width = width;
  offscreen.height = height;

  const context = offscreen.getContext('2d');
  if (!context) {
    return makeChaosTargets(count, width, height);
  }

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.fillStyle = '#000000';
  context.imageSmoothingEnabled = false;
  draw(context, width, height);

  const data = context.getImageData(0, 0, width, height).data;
  const points: Point[] = [];
  const stride = 2;

  for (let y = 0; y < height; y += stride) {
    for (let x = 0; x < width; x += stride) {
      const index = (y * width + x) * 4;
      if (data[index] < 130) {
        points.push({ x, y });
      }
    }
  }

  if (points.length === 0) {
    return Array.from({ length: count }, () => ({ x: width / 2, y: height / 2 }));
  }

  return Array.from({ length: count }, (_, index) => {
    const pointIndex = Math.floor((index * 2654435761) % points.length);
    return points[pointIndex];
  });
}

function drawHeroPhrase(context: CanvasRenderingContext2D, width: number, height: number) {
  const phrase = 'context, governed.';
  const maxTextWidth = Math.min(width * 0.72, 1320);
  let fontSize = Math.max(32, Math.min(width * 0.075, height * 0.17, 124));

  context.font = `400 ${fontSize}px "DotGothic16", "DotGothic16 Fallback", monospace`;
  while (context.measureText(phrase).width > maxTextWidth && fontSize > 24) {
    fontSize -= 2;
    context.font = `400 ${fontSize}px "DotGothic16", "DotGothic16 Fallback", monospace`;
  }

  context.fillStyle = '#000000';
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.fillText(phrase, width / 2, height / 2);
}

export function ContextBrainSection() {
  const [terminalStepIndex, setTerminalStepIndex] = useState(0);
  const stageRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const idleRef = useRef<HTMLDivElement | null>(null);
  const sceneOneRef = useRef<HTMLDivElement | null>(null);
  const sceneTwoRef = useRef<HTMLDivElement | null>(null);
  const sceneThreeRef = useRef<HTMLDivElement | null>(null);
  const legendRef = useRef<HTMLDivElement | null>(null);
  const layerListRef = useRef<HTMLOListElement | null>(null);
  const terminalStep = terminalSteps[terminalStepIndex];

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;

    if (!canvas || !stage) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let progress = 0;
    let animationFrame = 0;
    let resizeTimer = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = reducedMotion
      ? 700
      : Math.min(2400, Math.max(1500, Math.floor((window.innerWidth * window.innerHeight) / 390)));
    const dots: Dot[] = [];

    let scatterTargets: Point[] = [];
    let glyphTargets: Point[] = [];
    let channelTargets: Point[] = [];
    let bandTargets: Point[] = [];
    let chaosTargets: Point[] = [];
    let layerTargets: Point[] = [];
    let layerTargetsForRaw: Point[] = [];

    const computeTargets = () => {
      if (dots.length === 0) {
        return;
      }

      dots.forEach((dot) => {
        dot.ox = Math.random() * width;
        dot.oy = Math.random() * height;
      });

      scatterTargets = dots.map((dot) => ({ x: dot.ox, y: dot.oy }));
      glyphTargets = bitmapTargets(drawHeroPhrase, count, width, height);
      channelTargets = makeChannelTargets(count, width, height);
      bandTargets = makeBandTargets(count, width, height);
      chaosTargets = makeChaosTargets(count, width, height);

      const layered = makeLayerTargets(count, width, height);
      layerTargets = layered.promoted;
      layerTargetsForRaw = layered.raw;
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      computeTargets();
    };

    const initDots = () => {
      dots.length = 0;

      for (let index = 0; index < count; index += 1) {
        const x = Math.random() * (width || window.innerWidth);
        const y = Math.random() * (height || window.innerHeight);

        dots.push({
          x,
          y,
          ox: x,
          oy: y,
          delay: Math.pow(Math.random(), 1.4) * 0.6,
          accent: Math.random() < 0.02,
          group: Math.random() < 0.15 ? 0 : 1,
          sx: Math.random() * 1000,
          sy: Math.random() * 1000,
          size: Math.random() < 0.72 ? 1.45 : 1.95,
        });
      }
    };

    const updateProgress = () => {
      const total = Math.max(1, stage.offsetHeight - window.innerHeight);
      progress = clamp01(-stage.getBoundingClientRect().top / total);
    };

    const updateHud = () => {
      const p = progress;

      if (idleRef.current) {
        idleRef.current.style.opacity = `${clamp01(1 - p / 0.032)}`;
      }

      if (sceneOneRef.current) {
        sceneOneRef.current.style.opacity = `${clamp01((p - 0.255) / 0.035) * clamp01(1 - (p - 0.47) / 0.03)}`;
      }

      if (sceneTwoRef.current) {
        sceneTwoRef.current.style.opacity = `${clamp01((p - 0.5) / 0.03) * clamp01(1 - (p - 0.73) / 0.03)}`;
      }

      if (sceneThreeRef.current) {
        sceneThreeRef.current.style.opacity = `${clamp01((p - 0.78) / 0.035)}`;
      }

      if (legendRef.current) {
        legendRef.current.style.opacity = `${clamp01((p - 0.32) / 0.04) * clamp01(1 - (p - 0.47) / 0.03)}`;
      }

      if (layerListRef.current) {
        layerListRef.current.style.opacity = `${clamp01((p - 0.86) / 0.04)}`;
      }
    };

    const brownian = (dot: Dot, time: number): Point => {
      const scale = reducedMotion ? 4 : 14;
      const nx = Math.sin(time * 0.35 + dot.sx) * 0.6 + Math.cos(time * 0.71 + dot.sx * 0.3) * 0.4;
      const ny = Math.cos(time * 0.42 + dot.sy) * 0.6 + Math.sin(time * 0.53 + dot.sy * 0.7) * 0.4;
      return { x: dot.ox + nx * scale, y: dot.oy + ny * scale };
    };

    const frame = (timestamp: number) => {
      const time = timestamp * 0.001;
      const p = progress;

      context.clearRect(0, 0, width, height);

      const wScatter = rampDown(p, 0.025, 0.045);
      const wGlyph = ramp(p, 0.035, 0.055) * rampDown(p, 0.19, 0.225);
      const wChannel = bell(p, 0.215, 0.245, 0.285);
      const wDiagram = 0;
      const wChaos = bell(p, 0.47, 0.5, 0.53);
      const wBands = ramp(p, 0.51, 0.57) * rampDown(p, 0.7, 0.73);
      const wReChaos = bell(p, 0.73, 0.76, 0.79);
      const wLayers = ramp(p, 0.77, 0.89);
      const sceneThree = clamp01((p - 0.72) / 0.08);

      for (let index = 0; index < dots.length; index += 1) {
        const dot = dots[index];
        const ambient = brownian(dot, time);
        const scatter = scatterTargets[index] || ambient;
        const glyph = glyphTargets[index] || ambient;
        const channel = channelTargets[index] || ambient;
        const diagram = ambient;
        const chaos = chaosTargets[index] || ambient;
        const band = bandTargets[index] || ambient;
        const layer = (dot.group === 0 ? layerTargets[index] : layerTargetsForRaw[index]) || ambient;

        const delayedScatter = wScatter;
        const delayedGlyph = Math.max(0, wGlyph - dot.delay * 0.4);
        const delayedChannel = Math.max(0, wChannel - dot.delay * 0.5);
        const delayedDiagram = Math.max(0, wDiagram - dot.delay * 0.12);
        const delayedChaos = Math.max(0, wChaos - dot.delay * 0.3);
        const delayedBands = Math.max(0, wBands - dot.delay * 0.5);
        const delayedReChaos = Math.max(0, wReChaos - dot.delay * 0.3);
        const delayedLayers = Math.max(0, wLayers - dot.delay * 0.4);

        const scatterX = wScatter > 0.5 ? ambient.x : scatter.x;
        const scatterY = wScatter > 0.5 ? ambient.y : scatter.y;
        const weightSum =
          delayedScatter +
          delayedGlyph +
          delayedChannel +
          delayedDiagram +
          delayedChaos +
          delayedBands +
          delayedReChaos +
          delayedLayers;

        const targetX = weightSum > 0.001
          ? (scatterX * delayedScatter +
              glyph.x * delayedGlyph +
              channel.x * delayedChannel +
              diagram.x * delayedDiagram +
              chaos.x * delayedChaos +
              band.x * delayedBands +
              chaos.x * delayedReChaos +
              layer.x * delayedLayers) /
            weightSum
          : ambient.x;

        const targetY = weightSum > 0.001
          ? (scatterY * delayedScatter +
              glyph.y * delayedGlyph +
              channel.y * delayedChannel +
              diagram.y * delayedDiagram +
              chaos.y * delayedChaos +
              band.y * delayedBands +
              chaos.y * delayedReChaos +
              layer.y * delayedLayers) /
            weightSum
          : ambient.y;

        const move = reducedMotion ? 0.12 : 0.075 + 0.03 * (1 - Math.abs(0.5 - p) * 2);
        dot.x += (targetX - dot.x) * move;
        dot.y += (targetY - dot.y) * move;

        let color = dot.accent ? '#cf5a32' : '#241c15';
        if (sceneThree > 0 && dot.group === 0 && sceneThree > 0.5) {
          color = '#cf5a32';
        }

        const idleFade = clamp01(1 - p / 0.05);
        const structuredFocus = clamp01(Math.max(wGlyph * 1.3, wChannel * 0.38, wBands * 0.55));
        const baseAlpha = color === '#cf5a32'
          ? lerp(0.74, 0.9, structuredFocus)
          : lerp(0.46, 0.72, structuredFocus);
        context.globalAlpha = baseAlpha * lerp(0.28, 1, 1 - idleFade);
        context.fillStyle = color;

        const size = dot.size * lerp(1, 1.22, structuredFocus) * (color === '#cf5a32' ? 1.18 : 1);
        context.fillRect(dot.x - size / 2, dot.y - size / 2, size, size);
      }

      context.globalAlpha = 1;
      updateHud();
      animationFrame = window.requestAnimationFrame(frame);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        updateProgress();
      }, 120);
    };

    resize();
    initDots();
    computeTargets();
    updateProgress();
    animationFrame = window.requestAnimationFrame(frame);

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', handleResize);
    document.fonts?.ready.then(computeTargets).catch(() => undefined);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTerminalStepIndex((index) => (index + 1) % terminalSteps.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <section ref={stageRef} className="dhee-stage" aria-label="Dhee context manager narrative">
        <div className="dhee-pin">
          <canvas ref={canvasRef} className="dhee-particle-canvas" aria-hidden="true" />

          <div ref={idleRef} className="dhee-hud dhee-hud-idle">
            <div className="dhee-hero-body">
              <div className="dhee-hero-copy">
                <div className="dhee-tag">
                  <span />
                  Dhee context manager
                </div>
                <h1 className="dhee-display">
                  your agent sees
                  <br />
                  <em>what matters.</em>
                </h1>
                <p className="dhee-lede">
                  Dhee decides what your coding agent should see, remember, and forget each turn,
                  so Codex, Claude Code, and MCP-native agents stay cheap, reliable, and auditable.
                </p>
                <div className="dhee-proofline">
                  <span />
                  state card / receipts / pointer memory
                </div>
                <div className="dhee-actions">
                  <a className="dhee-btn dhee-btn-primary" href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
                    Start free -&gt;
                  </a>
                  <a className="dhee-btn" href="/pricing/">
                    Pricing
                  </a>
                </div>
              </div>

              <div className="dhee-terminal" aria-label="Dhee terminal preview">
                <div className="dhee-terminal-title">
                  <span className="dhee-window-dots">
                    <span />
                    <span />
                    <span />
                  </span>
                  {terminalStep.title}
                </div>
                <div key={terminalStep.label} className="dhee-terminal-body">
                  <p className="dhee-terminal-step">{terminalStep.label}</p>
                  <p><span>$</span> <strong>{terminalStep.command}</strong></p>
                  {terminalStep.lines.map(([status, body]) => (
                    <p key={`${status}-${body}`}>
                      <em>{status}</em> {body}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div ref={sceneOneRef} className="dhee-hud dhee-scene dhee-scene-channel">
            <div className="dhee-scene-meta">/ chapter i - channel</div>
            <p className="dhee-tagline">
              work happens.
              <br />
              dhee turns it into
              <br />
              <em>usable context.</em>
            </p>
            <div ref={legendRef} className="dhee-channel-card" aria-label="Dhee context route">
              <div className="dhee-channel-card-head">
                <span>context route</span>
                <strong>before the next agent call</strong>
              </div>
              <div className="dhee-route-stack">
                <article className="dhee-route-node">
                  <span>01</span>
                  <div>
                    <strong>capture the work</strong>
                    <p>Reads, edits, shell output, tests.</p>
                  </div>
                  <em>local</em>
                </article>
                <article className="dhee-route-node">
                  <span>02</span>
                  <div>
                    <strong>compile the state</strong>
                    <p>Goal, plan, decisions, evidence receipts.</p>
                  </div>
                  <em>dhee</em>
                </article>
                <article className="dhee-route-node dhee-route-node-active">
                  <span>03</span>
                  <div>
                    <strong>admit only what helps</strong>
                    <p>The model sees the brief, not the pile.</p>
                  </div>
                  <em>prompt</em>
                </article>
              </div>
              <div className="dhee-channel-foot">
                <span>raw output behind pointers</span>
                <span>claims linked to evidence</span>
              </div>
            </div>
          </div>

          <div ref={sceneTwoRef} className="dhee-hud dhee-scene dhee-scene-accumulate">
            <div className="dhee-scene-meta">/ chapter ii - accumulation</div>
            <h2 className="dhee-chapter">
              the transcript stops
              <br />
              <em>being</em> the source.
            </h2>
            <p>
              Dhee recompiles the current task, decisions, constraints, files, and receipts into
              a small state card before the next agent call.
            </p>
          </div>

          <div ref={sceneThreeRef} className="dhee-hud dhee-scene dhee-scene-govern">
            <div>
              <div className="dhee-scene-meta">/ chapter iii - governance</div>
              <h2 className="dhee-chapter">
                <span>raw signal becomes</span>
                <br />
                <em>governed context.</em>
              </h2>
            </div>
            <div className="dhee-govern-panel">
              <div className="dhee-pills">
                <span><i /> raw activity - stays behind pointers</span>
                <span><i /> admitted context - enters the model</span>
              </div>
              <ol ref={layerListRef} className="dhee-layer-list">
                {layers.map((layer) => (
                  <li key={layer.num}>
                    <span>{layer.num} {layer.name}</span>
                    <strong>{layer.title}</strong>
                    <p>{layer.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </section>

      <section aria-hidden="true" className="dhee-dither-bridge">
        <PixelDither
          fillColor="var(--dhee-ink)"
          pattern="noise"
          seed={11}
          direction="bottom-up"
          startWeight={0.05}
          erosionWeight={0.62}
          pixelSize={18}
        />
      </section>

      <section className="dhee-below" id="how" data-dhee-navbar-inverse="true">
        <div className="dhee-clarity">
          <div className="dhee-clarity-copy">
            <div className="dhee-section-meta">/ what the agent sees</div>
            <h2>A clear brief before every call.</h2>
            <p>
              Dhee turns the messy working session into one small, auditable state card. The model gets the point, not the pile.
            </p>
            <div className="dhee-compact-actions">
              <a className="dhee-btn dhee-btn-primary" href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
                start free -&gt;
              </a>
              <a className="dhee-btn" href="/docs/">
                docs
              </a>
            </div>
          </div>

          <div className="dhee-clarity-flow" aria-label="Dhee compiled context flow">
            <article className="dhee-flow-card dhee-flow-muted">
              <span>raw work</span>
              <strong>transcript, shell, tests, files</strong>
              <p>Stored locally behind pointers.</p>
            </article>

            <article className="dhee-flow-card dhee-flow-compiler">
              <span>dhee</span>
              <strong>compile + admit</strong>
              <p>Keep the useful state. Suppress the noise.</p>
            </article>

            <article className="dhee-model-card">
              <div className="dhee-model-card-top">
                <span>agent sees</span>
                <strong>state card</strong>
              </div>
              <ul>
                <li>goal</li>
                <li>active plan</li>
                <li>decisions</li>
                <li>evidence receipts</li>
                <li>open risks</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
