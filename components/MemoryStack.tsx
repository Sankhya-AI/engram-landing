import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const cards = [
  {
    title: 'Memory substrate',
    description:
      'SQLite plus a vector index, heading-scoped chunking, and SHA-tracked ingest. Re-ingest is a no-op if the doc hasn’t changed. Works offline with Ollama, online with OpenAI, NVIDIA NIM, or Gemini.',
  },
  {
    title: 'Context router',
    description:
      'Digest-at-source wrappers for Read, Bash, and subagent returns. Raw output is stored under a pointer; only the digest reaches the model. Per-class summaries for git_log, pytest, grep, source code, config, and more.',
  },
  {
    title: 'Cognition engine',
    description:
      'Insight synthesis, performance tracking, prospective memory, belief store, policy store, edit ledger. Zero LLM calls on the hot path — the synthesis step runs at session checkpoint.',
  },
  {
    title: 'Self-tuning policy',
    description:
      'Every dhee_expand_result call logs (tool, intent, depth). dhee router tune reads that ledger, applies thresholds, and atomically rewrites ~/.dhee/router_policy.json. The policy is the behavior.',
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
            Four layers.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #14100c 0%, #4f4a43 30%, #6b665f 60%, #9a958d 100%)',
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
          Dhee is not just a vector store and not a full agent framework. It is the layer that keeps your fat
          knowledge fat — in your repo — while only the relevant slice reaches the model, and the retrieval policy
          keeps tuning to what your team actually expands.
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
              Token bloat is the silent tax on every AI team.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your CLAUDE.md grew from 50 lines to 500 to 2,000 in 18 months. Your skills directory has 30 files. Your
              prompt library has a thousand entries. Every new session loads all of it, every turn, at full token
              cost. Dhee turns that library into searchable, decay-aware, self-promoting memory — and digests fat
              tool output so raw bytes never enter context. Keep authoring fat knowledge. Dhee handles the delivery.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">Before Dhee</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  5,700 tokens per turn, growing.
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">With Dhee</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ~300 tokens of the right stuff.
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">Five years in</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Still ~300 tokens. Decay keeps the hot path flat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
