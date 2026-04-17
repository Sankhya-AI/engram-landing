import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

type Row = {
  system: string;
  r1: string;
  r3: string;
  r5: string;
  r10: string;
  notes: string;
  highlight?: boolean;
};

const rows: Row[] = [
  {
    system: 'Dhee',
    r1: '94.8%',
    r3: '98.6%',
    r5: '99.4%',
    r10: '99.8%',
    notes: 'NVIDIA embed-v2 + rerank · full 500 questions',
    highlight: true,
  },
  {
    system: 'MemPalace',
    r1: '73.4%',
    r3: '—',
    r5: '86.2%',
    r10: '—',
    notes: 'Published scores, subset variant',
  },
  {
    system: 'agentmemory',
    r1: '61.0%',
    r3: '—',
    r5: '78.1%',
    r10: '—',
    notes: 'Published scores, subset variant',
  },
];

export const ProofPoints: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="text-center mb-10">
        <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">Benchmarks</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          #1 on LongMemEval —{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            R@1 94.8% / R@5 99.4%.
          </span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
          LongMemEval is the hardest public long-horizon retrieval benchmark — 500 questions grounded in
          multi-session conversation history. Dhee's memory substrate is the highest-recall system published.
        </p>
      </div>

      <SpotlightCard
        spotlightColor="255, 255, 255"
        className="rounded-2xl border border-black/5 bg-white p-6 md:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.05)] mb-6"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-[11px] uppercase tracking-[0.15em] text-gray-400">
                <th className="py-3 pr-4 font-medium">System</th>
                <th className="py-3 pr-4 font-medium">R@1</th>
                <th className="py-3 pr-4 font-medium">R@3</th>
                <th className="py-3 pr-4 font-medium">R@5</th>
                <th className="py-3 pr-4 font-medium">R@10</th>
                <th className="py-3 pr-4 font-medium">Setup</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.system}
                  className={`border-b border-black/5 last:border-0 ${
                    row.highlight ? 'bg-[#fdf4ee]' : ''
                  }`}
                >
                  <td className="py-4 pr-4 font-semibold text-gray-900">
                    {row.highlight && (
                      <span className="mr-2 inline-block px-1.5 py-0.5 rounded bg-black text-white text-[9px] uppercase tracking-wider align-middle">
                        #1
                      </span>
                    )}
                    {row.system}
                  </td>
                  <td className="py-4 pr-4 font-mono text-gray-900">{row.r1}</td>
                  <td className="py-4 pr-4 font-mono text-gray-900">{row.r3}</td>
                  <td className="py-4 pr-4 font-mono text-gray-900">{row.r5}</td>
                  <td className="py-4 pr-4 font-mono text-gray-900">{row.r10}</td>
                  <td className="py-4 pr-4 text-xs text-gray-500">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-xs text-gray-400 leading-relaxed">
          Run it yourself: <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 font-mono">python -m dhee.benchmarks.longmemeval --retrieval-only --questions 500</code>.
          Raw results in <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 font-mono">docs/benchmarks/longmemeval.md</code>.
        </p>
      </SpotlightCard>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-black/5 bg-white/92 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
          <div className="text-3xl font-semibold text-gray-900 mb-1">~300</div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">tokens / turn</div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Down from 5,700 raw. Selective inject + digest-at-source.
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white/92 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
          <div className="text-3xl font-semibold text-gray-900 mb-1">~$0.004</div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">session cost</div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Over 100× ROI on a 20-turn Claude Opus session.
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white/92 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
          <div className="text-3xl font-semibold text-gray-900 mb-1">0</div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">hot-path LLM calls</div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Memory + routing run on embeddings. Synthesis is batched at checkpoint.
          </p>
        </div>
      </div>
    </div>
  );
};
