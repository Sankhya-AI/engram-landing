import React from 'react';
import { BackgroundMeteors } from './scrollx/BackgroundMeteors';
import { AnimatedButton } from './scrollx/AnimatedButton';

const heroStats = [
  { label: 'Tokens per turn', value: '~300', note: 'vs 5,700 raw CLAUDE.md' },
  { label: 'LongMemEval R@5', value: '99.4%', note: '#1 on full 500 questions' },
  { label: 'Session cost', value: '~$0.004', note: '>100× ROI on a 20-turn Opus' },
];

export const Hero: React.FC = () => {
  return (
    <section id="platform" className="relative">
      <BackgroundMeteors className="min-h-[82vh] flex items-center justify-center px-6 md:px-12 pt-24 pb-24 text-center">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-white/92 mb-8 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
            <img src="/sensai-logo.png" alt="Sensai logo" className="w-8 h-8 object-contain" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-gray-500">
              #1 on LongMemEval recall — R@1 94.8% / R@5 99.4%
            </span>
          </div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 mb-6 text-center">
            Self-evolving memory & context router for AI agents
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-gray-900 mb-6 text-center max-w-5xl">
            Fat skills.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Thin tokens.
            </span>
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-5 text-center">
            Dhee is an open-source memory and context-router layer that sits between your agent and the LLM. Your
            500-line <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">CLAUDE.md</code>,{' '}
            <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">AGENTS.md</code>, and
            skills library become vector-indexed, decay-aware memory. A 10&nbsp;MB{' '}
            <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">git log</code> becomes a
            40-token digest. The agent sees only what it needs, when it needs it.
          </p>

          <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8 text-center">
            Works with Claude Code, Cursor, Codex, Gemini CLI, Aider, Cline, Goose — any MCP client.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
              <a href="#get-started">
                Install Dhee
              </a>
            </AnimatedButton>
            <a
              href="https://github.com/Sankhya-AI/Dhee"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-sm text-sm font-semibold border border-black/15 text-gray-600 hover:text-gray-900 hover:border-black/40 transition-all"
            >
              View on GitHub
            </a>
            <a
              href="#benchmarks"
              className="px-6 py-3 rounded-sm text-sm font-semibold text-gray-500 hover:text-gray-900 transition-all"
            >
              See the benchmark →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-14">
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
      </BackgroundMeteors>
    </section>
  );
};
