import React, { useEffect, useMemo, useState } from 'react';
import { BackgroundMeteors } from './scrollx/BackgroundMeteors';
import { AnimatedButton } from './scrollx/AnimatedButton';

const heroStats = [
  { label: 'Open-source core', value: 'Free', note: 'local developer memory and context routing' },
  { label: 'Team plan', value: '$5', note: 'per seat for shared repo context' },
  { label: 'LongMemEval R@5', value: '99.4%', note: 'benchmark proof for durable recall' },
];

const terminalScreens = [
  {
    label: 'onboard',
    title: 'Developer Brain',
    lines: [
      '$ curl -fsSL github.com/Sankhya-AI/Dhee/install.sh | sh',
      'ok hooks installed for Claude Code + Codex',
      'ok MCP router registered for Cursor and desktop clients',
      'ok repo docs ingested: AGENTS.md, CLAUDE.md, README.md',
      'next: dhee link /repo to create shared context',
    ],
  },
  {
    label: 'route',
    title: 'Context Router',
    lines: [
      '$ dhee context compile --agent codex --task "pricing page"',
      'read repo state: 18 entries, 247 local memories',
      'match Product/Pricing/Team docs at confidence 0.91',
      'inject 312 tokens, suppress 5,388 irrelevant tokens',
      'result: agent starts warm with the right product brain',
    ],
  },
  {
    label: 'share',
    title: 'Team Memory',
    lines: [
      '$ dhee handoff --repo . --share',
      'capture decisions, commands, build output, open risks',
      'broadcast to active agents: UI, backend, docs',
      'promote reviewed memories into .dhee/context/entries.jsonl',
      'result: fresh clones are no longer cold starts',
    ],
  },
  {
    label: 'team',
    title: 'Dhee Team',
    lines: [
      '$ dhee team onboard --seats 24',
      'plan: $5 / seat / month',
      'enable shared repo context and reviewed handoffs',
      'connect GitHub org, docs, agent routing surfaces',
      'ready: every coding agent starts with team context',
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
              Dhee product brain
            </span>
          </div>

          <p className="w-full max-w-full text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.35em] leading-relaxed text-gray-400 mb-6">
            Product brain for AI-native engineering teams
          </p>

          <h1 className="w-full max-w-4xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-gray-900 mb-6">
            One shared brain
            <br />
            <span
              className="block max-w-full"
              style={{
                background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              for every coding
              <br className="sm:hidden" /> agent.
            </span>
          </h1>

          <p className="w-full max-w-3xl text-sm md:text-lg text-gray-600 leading-relaxed mb-5">
            Dhee captures what Codex, Claude Code, Cursor, repos, tools, and teammates learn, then routes the right
            context into the next agent before anyone starts cold. Start with the open-source developer brain; upgrade
            to the Team plan when repo context becomes shared infrastructure.
          </p>

          <p className="w-full max-w-2xl text-xs md:text-sm text-gray-500 leading-relaxed mb-8">
            Developer memory, shared repo context, secure routing, docs, GitHub, and $5 per seat
            team pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
              <a href="#get-started">
                Start free
              </a>
            </AnimatedButton>
            <a
              href="/pricing/"
              className="px-6 py-3 rounded-sm text-sm font-semibold border border-black/15 text-gray-600 hover:text-gray-900 hover:border-black/40 transition-all"
            >
              See pricing
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
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[#e8722a] font-mono mb-1">
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
                          index === screenIndex ? 'w-8 bg-[#e8722a]' : 'w-3 bg-white/18 hover:bg-white/30'
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
                  <div className="text-white font-semibold">$5</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-gray-500">seat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundMeteors>
    </section>
  );
};
