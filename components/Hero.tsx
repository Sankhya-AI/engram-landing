import React from 'react';
import { BackgroundMeteors } from './scrollx/BackgroundMeteors';
import { AnimatedButton } from './scrollx/AnimatedButton';

const heroStats = [
  { label: 'Core tools', value: '4' },
  { label: 'Hot path LLM calls', value: '0' },
  { label: 'Typical session cost', value: '~$0.004' },
];

export const Hero: React.FC = () => {
  return (
    <section id="platform" className="relative">
      <BackgroundMeteors className="min-h-[78vh] flex items-center justify-center px-6 md:px-12 pt-24 pb-24 text-center">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-white/92 mb-8 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
            <img src="/sensai-logo.png" alt="Sensai logo" className="w-8 h-8 object-contain" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-gray-500">
              Dhee for HyperAgents
            </span>
          </div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 mb-6 text-center">
            The cognition layer for self-improving agents
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-gray-900 mb-6 text-center max-w-5xl">
            Turn any agent into a
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              HyperAgent.
            </span>
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-center">
            Dhee adds persistent memory, performance tracking, insight synthesis, and prospective memory to
            Claude, GPT, Gemini, or your own stack. Instead of a stateless wrapper, your agent remembers what
            happened, learns from outcomes, and predicts what matters next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
              <a href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </AnimatedButton>
            <a
              href="#architecture"
              className="px-6 py-3 rounded-sm text-sm font-semibold border border-black/15 text-gray-600 hover:text-gray-900 hover:border-black/40 transition-all"
            >
              Explore architecture
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-14">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/5 bg-white/92 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundMeteors>
    </section>
  );
};
