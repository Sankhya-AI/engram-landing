import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const featureCards = [
  {
    title: 'Self-evolving memory',
    description:
      'Chunk your CLAUDE.md, AGENTS.md, and skills library once. Dhee embeds, indexes, and decays — only the rules that match this turn reach the model. A 500-line CLAUDE.md becomes ~300 tokens of the right stuff.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12.5" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M14 18h12M14 22h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M15 12.5V10a5 5 0 0 1 10 0v2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Context router — digest at source',
    description:
      'Fat tool output never enters context raw. A 10 MB git log, a 50 KB source file, a 200-line subagent reply — all become token-sized digests with pointers. The model expands a pointer only when the digest is not enough.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12h24M8 20h24M8 28h24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="14" cy="12" r="2" fill="currentColor" />
        <circle cx="24" cy="20" r="2" fill="currentColor" />
        <circle cx="18" cy="28" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Perfect recall, years in',
    description:
      'Ebbinghaus decay pushes unused knowledge out of the hot path. Frequently-referenced memories auto-promote. After five years you have 50,000 memories and the per-turn injection is still ~300 tokens.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 14v7l4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="29" cy="12" r="3" fill="currentColor" fillOpacity="0.18" />
      </svg>
    ),
  },
  {
    title: 'Self-tuning retrieval policy',
    description:
      'Dhee watches which digests the model expands and which it never does. dhee router tune rewrites the per-tool, per-intent depth policy automatically. The longer a team uses Dhee, the better it fits that team.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 29l7-8 5 4 10-13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 31h22" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="16" cy="21" r="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="21" cy="25" r="2" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <SpotlightCard
    spotlightColor="255, 255, 255"
    className="group p-8 border border-black/5 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] rounded-2xl hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-500"
  >
    <div className="w-20 h-20 mb-8 text-gray-900 flex items-center justify-center border border-black/10 rounded-full bg-white group-hover:bg-black group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-base font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </SpotlightCard>
);

export const Features: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-end mb-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">What Dhee does</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Four jobs, on every turn —{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              so your tokens stay thin.
            </span>
          </h2>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Most agent memory tools stop at "store and retrieve." Dhee does the four things that actually save tokens:
          selective injection, digest-at-source, decay-aware recall, and a policy that tunes itself based on what your
          model actually expands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featureCards.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};
