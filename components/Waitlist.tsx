import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const principles = [
  {
    title: 'Fixed wrappers stall out',
    description:
      'A static prompt and a vector store can retrieve context, but they do not improve how the agent improves. They have no durable model of outcomes.',
  },
  {
    title: 'HyperAgents edit the improvement loop',
    description:
      'The March 19, 2026 HyperAgents paper reframes progress around metacognitive self-modification: better task behavior and better future improvement procedures.',
  },
  {
    title: 'Dhee provides the cognition substrate',
    description:
      'Persistent memory, performance tracking, synthesized insights, and prospective memory are the practical capabilities that let everyday agents move in that direction.',
  },
];

export const Waitlist: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <div className="text-center mb-10">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-400 mb-4">
          HyperAgents
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
          Dhee is making agents into 
          {' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #14100c 0%, #4f4a43 30%, #6b665f 60%, #9a958d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            HyperAgents.
          </span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
          This is the future: not just storing context for agents, but giving them the infrastructure
          to remember, measure, reflect, and plan across runs so their improvement loop compounds over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {principles.map((principle) => (
          <SpotlightCard
            key={principle.title}
            spotlightColor="255, 255, 255"
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{principle.description}</p>
          </SpotlightCard>
        ))}
      </div>

      <SpotlightCard
        spotlightColor="255, 255, 255"
        className="rounded-2xl border border-black/5 bg-[#fbf6f2] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-3">What we took from the paper</div>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
              The important insight is not “agents need more memory.”
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The insight is that the capabilities surrounding memory matter: persistent memory, performance
              tracking, and reusable learnings help the system improve its future search for better behavior.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white border border-black/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">For product</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dhee becomes the cognition layer underneath any agent runtime.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-black/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">For UX</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fewer cold starts, fewer repeated mistakes, more continuity between tools.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-black/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">For infra</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cheap hot-path retrieval, batched enrichment, and portable interfaces.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-black/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">For strategy</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Align the product with self-improving agents instead of generic memory middleware.
              </p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
