import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const cards = [
  {
    title: 'Engram: the memory store',
    description:
      'SQLite plus a vector index for facts, history, and entities. Remember and recall stay on the hot path without LLM calls, while checkpoint batches enrichment into a single pass.',
  },
  {
    title: 'Buddhi: the cognition engine',
    description:
      'Performance tracking, insight synthesis, and prospective memory live here. Buddhi watches outcomes over time and turns them into warnings, learnings, and triggered intent.',
  },
  {
    title: 'Context bootstrap',
    description:
      'A new task starts with the last session state, relevant memories, trend signals, reusable insights, and future triggers. This is how tool-switching stops feeling like amnesia.',
  },
  {
    title: 'Checkpoint compounding',
    description:
      'One end-of-session checkpoint saves the digest, records outcome scores, enriches recent memories, and stores forward-looking reminders. The next run inherits that cognition.',
  },
];

const StackItem = ({ title, description }: { title: string; description: string }) => (
  <SpotlightCard
    spotlightColor="255, 255, 255"
    className="rounded-2xl border border-black/5 bg-white/85 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
  >
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </SpotlightCard>
);

export const MemoryStack: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">Architecture</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Two layers.
            {' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              One self-improving loop.
            </span>
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-md">
          Dhee is not just a vector store and not a full agent framework. It is the cognition layer between
          those worlds: Engram stores memory, Buddhi turns experience into better future behavior.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {cards.map((card) => (
          <StackItem key={card.title} {...card} />
        ))}
      </div>

      <SpotlightCard
        spotlightColor="255, 255, 255"
        className="rounded-2xl border border-black/5 bg-[#fbf6f2] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400 mb-3">Why this matters</p>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
              HyperAgents need infrastructure for learning across sessions, not just bigger prompts.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The March 2026 HyperAgents paper showed that persistent memory and performance tracking emerge as
              transferable meta-capabilities when the improvement process itself can improve. Dhee packages those
              capabilities so everyday agents can act less like wrappers and more like systems that compound.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">Task agent</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Solves the work in front of it.
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">Meta signals</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Track outcomes, warnings, and what worked.
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">Next session</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Starts with context instead of cold start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
