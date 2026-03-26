import React from 'react';
import VenomBeam from './scrollx/VenomBeam';
import { AnimatedButton } from './scrollx/AnimatedButton';

export const CTA: React.FC = () => {
  return (
    <div className="w-full">
      <VenomBeam className="flex items-center justify-center w-full flex-col px-6 md:px-12 py-24 text-center">
        <img src="/sensai-logo.png" alt="Sensai logo" className="w-16 h-16 object-contain mb-6" />
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gray-900 mb-6">
          Give your agents a
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            cognition layer.
          </span>
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg text-gray-600 text-center mb-6">
          <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">pip install dhee[openai,mcp]</code>
          {' '}and start with
          {' '}<code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">dhee-mcp</code>.
          {' '}Persistent memory, performance tracking, insight synthesis, and prospective memory in one minimal loop.
        </p>
        <p className="max-w-2xl mx-auto text-xs md:text-sm text-gray-500 text-center mb-10">
          Open source. Local first. One batched LLM pass per checkpoint, with the hot path kept fast enough for real agent work.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
            <a href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </AnimatedButton>
        </div>
      </VenomBeam>
    </div>
  );
};
