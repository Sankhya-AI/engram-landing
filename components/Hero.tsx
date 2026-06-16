import React, { useEffect, useMemo, useState } from 'react';
import { BackgroundMeteors } from './scrollx/BackgroundMeteors';
import { AnimatedButton } from './scrollx/AnimatedButton';

const heroStats = [
  { label: 'Agent runtime', value: '3', note: 'before, tool, checkpoint loop' },
  { label: 'Native providers', value: '3', note: 'ElevenLabs, Gemini, and OpenAI' },
  { label: 'LongMemEval R@5', value: '99.4%', note: 'benchmark proof for durable recall' },
];

const terminalScreens = [
  {
    label: 'onboard',
    title: 'World Memory',
    lines: [
      '$ curl -fsSL github.com/Sankhya-AI/Dhee/install.sh | sh',
      'ok memory runtime installed',
      'ok MCP, Python SDK, HTTP sidecar available',
      'ok SceneCards and MemoryItems ready',
      'next: attach Dhee to the agent you already have',
    ],
  },
  {
    label: 'route',
    title: 'Context Router',
    lines: [
      '$ dhee context compile --task "voice support call"',
      'read durable user, project, repo, and scene memory',
      'admit preferences, corrections, open tasks',
      'suppress transcript noise and stale assumptions',
      'result: agent starts with the bigger story',
    ],
  },
  {
    label: 'share',
    title: 'Provider Memory',
    lines: [
      '$ python -c "from dhee import ElevenLabsAgent"',
      'before call: inject {{dhee_context}}',
      'during call: expose dhee_memory',
      'after call: checkpoint useful outcomes',
      'result: the next call is not a cold start',
    ],
  },
  {
    label: 'sidecar',
    title: 'HTTP Sidecar',
    lines: [
      '$ dhee serve --host 0.0.0.0 --port 8765',
      'POST /v1/runs/start returns compact context',
      'POST /v1/tools/dhee_memory recalls or saves memory',
      'POST /v1/runs/{run_id}/finish checkpoints',
      'ready: any stack can use Dhee over HTTP',
    ],
  },
];

export const Hero: React.FC = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const activeScreen = terminalScreens[screenIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setScreenIndex((current) => (current + 1) % terminalScreens.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const terminalText = useMemo(() => activeScreen.lines.join('\n'), [activeScreen.lines]);

  return (
    <section id="product" className="relative">
      <BackgroundMeteors className="min-h-[82vh] flex items-center px-6 md:px-12 pt-24 pb-20">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[0.92fr_0.78fr] gap-12 lg:gap-16 items-center">
          <div className="hero-copy flex w-full max-w-full flex-col items-start text-left min-w-0">
          <div className="inline-flex max-w-full min-w-0 flex-wrap sm:flex-nowrap items-center gap-3 px-4 py-2 rounded-2xl sm:rounded-full border border-black/10 bg-white/92 mb-8 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
            <img src="/sensai-logo.png" alt="Dhee logo" className="w-8 h-8 object-contain" />
            <span className="min-w-0 break-words text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.24em] leading-relaxed text-gray-500">
              Dhee world memory
            </span>
          </div>

          <p className="w-full max-w-full text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.35em] leading-relaxed text-gray-400 mb-6">
            World memory for AI agents
          </p>

          <h1 className="w-full max-w-4xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-gray-900 mb-6">
            Give any agent
            <br />
            <span
              className="block max-w-full"
              style={{
                background: 'linear-gradient(135deg, #14100c 0%, #4f4a43 30%, #6b665f 60%, #9a958d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              the bigger story.
            </span>
          </h1>

          <p className="w-full max-w-3xl text-sm md:text-lg text-gray-600 leading-relaxed mb-5">
            Dhee stores the useful arc of a user, project, repo, and session, then routes the right context
            into ElevenLabs, Gemini, OpenAI, Codex, and MCP-native agents before the next action.
          </p>

          <p className="w-full max-w-2xl text-xs md:text-sm text-gray-500 leading-relaxed mb-8">
            SceneCards, MemoryItems, privacy gates, contradiction handling, proof gates, and checkpoints.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
              <a href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
                Install Dhee
              </a>
            </AnimatedButton>
            <a
              href="#integrations"
              className="px-6 py-3 rounded-sm text-sm font-semibold border border-black/15 text-gray-600 hover:text-gray-900 hover:border-black/40 transition-all"
            >
              See integrations
            </a>
            <a
              href="/docs/"
              className="px-6 py-3 rounded-sm text-sm font-semibold text-gray-500 hover:text-gray-900 transition-all"
            >
              Read docs →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-12">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/5 bg-white/92 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-2">{stat.label}</div>
                <div className="text-[11px] text-gray-400 leading-relaxed">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>

          <div className="w-full">
            <div className="rounded-2xl border border-black/10 bg-[#0d0d0d] shadow-[0_26px_80px_rgba(0,0,0,0.22)] overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
                  {activeScreen.label}
                </div>
              </div>

              <div className="px-5 py-5">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[#6b665f] font-mono mb-1">
                      live terminal
                    </div>
                    <h2 className="text-white text-xl font-semibold tracking-tight">{activeScreen.title}</h2>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5">
                    {terminalScreens.map((screen, index) => (
                      <button
                        key={screen.label}
                        type="button"
                        aria-label={`Show ${screen.title}`}
                        onClick={() => setScreenIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === screenIndex ? 'w-8 bg-[#6b665f]' : 'w-3 bg-white/18 hover:bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <pre className="min-h-[220px] whitespace-pre-wrap break-words font-mono text-[12px] md:text-[13px] leading-7 text-gray-200">
                  {terminalText}
                </pre>
              </div>

              <div className="grid grid-cols-3 border-t border-white/10 bg-white/[0.03] text-center">
                <div className="px-3 py-4">
                  <div className="text-white font-semibold">312</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-gray-500">tokens</div>
                </div>
                <div className="border-x border-white/10 px-3 py-4">
                  <div className="text-white font-semibold">4</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-gray-500">agents</div>
                </div>
                <div className="px-3 py-4">
                  <div className="text-white font-semibold">HTTP</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-gray-500">sidecar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundMeteors>
    </section>
  );
};
