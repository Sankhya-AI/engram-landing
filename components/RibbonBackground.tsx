import React from 'react';

export const RibbonBackground: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#f6f4f1]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(255,255,255,0.96),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(245,158,11,0.12),transparent_28%),radial-gradient(circle_at_68%_78%,rgba(232,93,69,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,244,241,0.86))]" />

      <div className="ribbon-orb ribbon-orb-a" />
      <div className="ribbon-orb ribbon-orb-b" />
      <div className="ribbon-orb ribbon-orb-c" />

      <div className="ribbon-sweep ribbon-sweep-a" />
      <div className="ribbon-sweep ribbon-sweep-b" />
    </div>
  );
};
