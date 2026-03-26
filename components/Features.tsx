import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const featureCards = [
  {
    title: 'Persistent memory',
    description:
      'Store facts, preferences, and observations with echo-augmented retrieval, so recall still works when the future question is phrased differently.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12.5" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M14 18h12M14 22h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M15 12.5V10a5 5 0 0 1 10 0v2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Performance tracking',
    description:
      'Capture outcomes per task type, surface trends, and warn when an agent is regressing before the regression becomes user-visible.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 29l7-8 5 4 10-13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 31h22" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="16" cy="21" r="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="21" cy="25" r="2" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    title: 'Insight synthesis',
    description:
      'Turn what worked and what failed into reusable causal learnings, so the next run starts with strategies instead of just raw logs.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8c-5 0-9 3.7-9 8.3 0 2.7 1.4 5.2 3.7 6.8V28a1 1 0 0 0 1 1h8.6a1 1 0 0 0 1-1v-4.9c2.3-1.6 3.7-4.1 3.7-6.8C29 11.7 25 8 20 8Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M17 31h6M17.5 34h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M17 18h6M17 21h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Prospective memory',
    description:
      'Store future triggers like “remember to run auth tests when login changes” and surface them automatically when the next matching context appears.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 14v7l4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="29" cy="12" r="3" fill="currentColor" fillOpacity="0.18" />
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
          <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">Core capabilities</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Four cognition primitives that make
            {' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              HyperAgents possible.
            </span>
          </h2>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Most agent memory products stop at storage and retrieval. Dhee packages the four capabilities that the
          HyperAgents direction actually needs: remembering, tracking outcomes, synthesizing learnings, and
          triggering future intent in the right context.
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
