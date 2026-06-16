
import React from 'react';

export const GridLines: React.FC = () => {
  return (
    <div className="grid-overlay">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to right, rgba(0, 0, 0, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px, 160px 160px, 32px 32px, 32px 32px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-white/15" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 10%, rgba(255,255,255,0.6), transparent 65%), radial-gradient(circle at 70% 85%, rgba(107,102,95,0.04), transparent 50%), radial-gradient(circle at 20% 60%, rgba(79,74,67,0.03), transparent 45%)',
        }}
      />
    </div>
  );
};
