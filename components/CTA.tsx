import React from 'react';
import VenomBeam from './scrollx/VenomBeam';
import { AnimatedButton } from './scrollx/AnimatedButton';

export const CTA: React.FC = () => {
  return (
    <div className="w-full">
      <VenomBeam className="flex items-center justify-center w-full flex-col px-6 md:px-12 py-24 text-center">
        <img src="/sensai-logo.png" alt="Sensai logo" className="w-16 h-16 object-contain mb-6" />
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gray-900 mb-6">
          Fat skills stay fat.
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Token bill stays thin.
          </span>
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg text-gray-600 text-center mb-8">
          Keep authoring your 500-line CLAUDE.md. Keep growing your skills library. Dhee turns it all into
          decay-aware memory, digests fat tool output at source, and tunes its own retrieval policy to your workflow.
        </p>

        <div className="w-full max-w-3xl rounded-2xl bg-[#0d0d0d] p-5 md:p-6 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-8 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 text-[11px] text-gray-500 font-mono">install</span>
          </div>
          <div className="font-mono text-sm leading-relaxed">
            <span className="text-green-400">$</span>{' '}
            <span className="text-gray-200">curl -fsSL</span>{' '}
            <span className="text-blue-300 break-all">
              https://raw.githubusercontent.com/Sankhya-AI/Dhee/main/install.sh
            </span>{' '}
            <span className="text-gray-200">| sh</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
            <a href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </AnimatedButton>
          <a
            href="https://github.com/Sankhya-AI/Dhee#readme"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-sm text-sm font-semibold border border-black/15 text-gray-600 hover:text-gray-900 hover:border-black/40 transition-all"
          >
            Read the docs
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Open source · Local-first · MIT licensed · Works with every MCP client
        </p>
      </VenomBeam>
    </div>
  );
};
