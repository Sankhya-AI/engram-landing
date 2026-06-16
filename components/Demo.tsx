import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

export const Demo: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="text-center mb-10">
        <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">See it live</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          Watch the product brain form.{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #14100c 0%, #4f4a43 30%, #6b665f 60%, #9a958d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Then reuse it across agents.
          </span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Walkthrough: install → agent session → selective inject → digested tool output → handoff-ready context.
          The same memory loop works across provider SDKs, MCP clients, and HTTP sidecars.
        </p>
      </div>

      <SpotlightCard
        spotlightColor="255, 255, 255"
        className="rounded-2xl border border-black/5 bg-[#0d0d0d] p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)] overflow-hidden"
      >
        <div className="flex items-center gap-2 px-3 pb-3 pt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 text-[11px] text-gray-500 font-mono">dhee — terminal walkthrough</span>
        </div>
        <img
          src="/demo.gif"
          alt="Dhee demo: install, selective inject, digest-at-source, self-tune"
          className="w-full rounded-xl border border-white/5"
          loading="lazy"
        />
      </SpotlightCard>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="rounded-xl border border-black/5 bg-white/92 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">0:08</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            One curl installs the package, registers MCP, and wires Claude Code hooks.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white/92 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">0:22</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            A 527-line CLAUDE.md arrives as 240 tokens of relevant context, not 5,700.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white/92 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">0:34</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            A 2.4&nbsp;MB git log lands in context as a 40-token digest + pointer.
          </p>
        </div>
      </div>
    </div>
  );
};
