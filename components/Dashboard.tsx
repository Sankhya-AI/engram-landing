import React, { useState } from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const tools = [
  {
    key: 'remember',
    label: 'remember()',
    eyebrow: 'Store something now',
    title: 'Capture facts without paying an LLM tax.',
    description:
      'Facts, preferences, and observations land immediately. Dhee stores them first and defers echo enrichment until checkpoint, so the hot path stays cheap.',
    hotPath: '0 LLM calls, 1 embedding',
    snippet: [
      'from dhee import Dhee',
      '',
      'd = Dhee()',
      'd.remember("User prefers dark mode")',
      'd.remember("Project uses PostgreSQL 15")',
    ],
    bullets: [
      'Immediate persistence for facts and preferences',
      'Echo enrichment is batched later for better recall quality',
      'Keeps the interactive loop fast enough for coding agents',
    ],
  },
  {
    key: 'recall',
    label: 'recall()',
    eyebrow: 'Ask better questions later',
    title: 'Retrieve memory across phrasing, not just exact wording.',
    description:
      'Dhee combines embeddings with echo-boosted retrieval so “what database do we use?” can still find “PostgreSQL 15 with pgvector.”',
    hotPath: '0 LLM calls, 1 embedding',
    snippet: [
      'results = d.recall("what database does the project use?")',
      '',
      '# [{"memory": "Project uses PostgreSQL 15", "score": 0.94}]',
    ],
    bullets: [
      'Top-K semantic recall with re-ranking',
      'Works across paraphrases, keywords, and question forms',
      'Designed for real agent context retrieval, not archive browsing',
    ],
  },
  {
    key: 'context',
    label: 'context()',
    eyebrow: 'Bootstrap a session',
    title: 'Start each task with the context a HyperAgent actually needs.',
    description:
      'One call brings back the previous session, relevant memories, live warnings, synthesized insights, and triggered intentions so the agent can begin from continuity instead of zero.',
    hotPath: '0 to 1 embedding, 0 LLM calls',
    snippet: [
      'ctx = d.context("fixing the auth bug in login.py")',
      '',
      '# ctx["warnings"] -> ["Performance on bug_fix declining"]',
      '# ctx["insights"] -> [{"content": "What worked: check git blame first"}]',
    ],
    bullets: [
      'Returns last-session state for cross-tool handoff',
      'Surfaces trend warnings and reusable learnings',
      'Brings intentions back exactly when they become relevant',
    ],
  },
  {
    key: 'checkpoint',
    label: 'checkpoint()',
    eyebrow: 'Compound the learning',
    title: 'Save the session in a way that improves the next one.',
    description:
      'Checkpoint is where Dhee converts work into cognition: session digest, enrichment, outcome tracking, insight synthesis, and prospective memory storage.',
    hotPath: '1 LLM call per ~10 memories',
    snippet: [
      'd.checkpoint(',
      '    "Fixed auth bug in login.py",',
      '    task_type="bug_fix",',
      '    outcome_score=1.0,',
      '    what_worked="git blame showed the breaking commit",',
      '    remember_to="run auth tests after login.py changes",',
      ')',
    ],
    bullets: [
      'Stores a handoff-ready session digest',
      'Turns outcomes into trends and synthesized insights',
      'Creates future triggers that fire in the next matching task',
    ],
  },
] as const;

type ToolKey = (typeof tools)[number]['key'];

export const Dashboard: React.FC = () => {
  const [active, setActive] = useState<ToolKey>('context');
  const current = tools.find((tool) => tool.key === active) ?? tools[0];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
        <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">The loop</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          Four tools.
          {' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            One cognition loop.
          </span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Dhee keeps the working loop minimal on purpose: remember, recall, bootstrap with context, then
          checkpoint once so the next session starts sharper than the last one.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {tools.map((tool) => (
          <button
            key={tool.key}
            onClick={() => setActive(tool.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              active === tool.key
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6">
        <SpotlightCard
          spotlightColor="255, 255, 255"
          className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400 mb-3">{current.eyebrow}</p>
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">{current.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">{current.description}</p>

          <div className="rounded-xl bg-[#f7f3f0] border border-black/5 px-4 py-3 mb-6">
            <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">Hot path</div>
            <div className="text-sm font-medium text-gray-900">{current.hotPath}</div>
          </div>

          <div className="space-y-3">
            {current.bullets.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e8722a]" />
                <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="255, 255, 255"
          className="rounded-2xl border border-black/5 bg-[#0d0d0d] shadow-[0_12px_30px_rgba(0,0,0,0.18)] overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 pt-5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 text-[11px] text-gray-500 font-mono">dhee session</span>
          </div>

          <div className="px-5 pb-5 pt-4">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-gray-200">
              {current.snippet.join('\n')}
            </pre>
          </div>

          <div className="border-t border-white/10 px-5 py-4 bg-white/[0.03]">
            <p className="text-xs text-gray-400 leading-relaxed">
              The loop stays intentionally narrow so Dhee can live underneath Claude Code, Cursor, Codex,
              Claude Desktop, Python, CLI, or Docker without forcing a new agent runtime.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
