import React, { useState } from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const steps = [
  {
    key: 'install',
    label: '1. Install',
    eyebrow: 'One command',
    title: 'Install once. No venv, no config, no paste into settings.json.',
    description:
      'The installer drops Dhee into ~/.dhee, registers the MCP router, and wires Claude Code hooks. The next session you open in any project, cognition is on.',
    hotPath: '~30 seconds, one command',
    snippet: [
      '$ curl -fsSL https://raw.githubusercontent.com/Sankhya-AI/Dhee/main/install.sh | sh',
      '',
      '✓ hooks installed',
      '✓ router MCP registered',
      '✓ CLAUDE.md + AGENTS.md ingested  (527 lines → 38 chunks)',
    ],
    bullets: [
      'Native Claude Code hooks — no plugin directory, no SKILL.md',
      'MCP server for Cursor, Codex, Gemini CLI, Cline, Goose, Aider',
      'Python SDK, CLI, and Docker for custom runtimes',
    ],
  },
  {
    key: 'inject',
    label: '2. Selective inject',
    eyebrow: 'Every prompt, every turn',
    title: 'Only the rules that match this turn reach the model.',
    description:
      'Instead of re-loading your 500-line CLAUDE.md every turn, Dhee runs a vector + heading-breadcrumb match and injects only the matching slice — about 240 tokens per prompt. Off-topic prompts inject zero.',
    hotPath: '~240 tokens per turn (vs 5,700 raw)',
    snippet: [
      "# prompt: 'how do I run tests?'",
      '<dhee v="1">',
      '  <doc src="CLAUDE.md" head="Testing Guidelines" s="0.87">',
      '    Run `pytest -q`. Integration tests live in tests/integration/.',
      '    Use --cov for coverage. Coverage gate = 85%.',
      '  </doc>',
      '</dhee>',
      '→ 240 tokens  (not 5,700)',
    ],
    bullets: [
      'Match threshold + token budget — nothing leaks through',
      'Heading-scoped chunks preserve structure and breadcrumb',
      'Off-topic prompts inject zero tokens',
    ],
  },
  {
    key: 'digest',
    label: '3. Digest tool output',
    eyebrow: 'Router at source',
    title: 'Fat tool output never enters context raw.',
    description:
      'Dhee wraps Read, Bash, and subagent returns. A 10 MB git log becomes a 40-token summary plus a pointer. The model only calls dhee_expand_result(ptr) when the digest genuinely is not enough.',
    hotPath: '2.4 MB output → ~40 tokens in context',
    snippet: [
      'mcp__dhee__dhee_bash(command="git log --oneline -5000")',
      '<dhee_bash ptr="B-a1b2c3">',
      '  cmd=git log --oneline -5000',
      '  exit=0 duration=412ms stdout=2.4MB class=git_log',
      '  summary:',
      '    5000 commits across 14 authors',
      '    top contributor: cmalviya (1842)',
      '  (expand: dhee_expand_result(ptr="B-a1b2c3"))',
      '</dhee_bash>',
    ],
    bullets: [
      'Per-class digests: git_log, pytest, grep, listing, source_code, config, data, generic',
      'Pointers resolve back to the full raw content on demand',
      'Symbol extraction for source files — functions, classes, imports',
    ],
  },
  {
    key: 'evolve',
    label: '4. Self-tune',
    eyebrow: 'No config to maintain',
    title: 'The policy is the behavior. The behavior is learned.',
    description:
      'Every expand-pointer call is logged with tool + intent + depth. dhee router tune applies thresholds — >30% expansion rate → deepen, <5% → shallower — and atomically writes the new policy. The longer you use it, the better it gets.',
    hotPath: 'Zero LLM calls on the hot path',
    snippet: [
      '$ dhee router tune',
      '',
      'Expansion rate by (tool, intent):',
      '  Read / source_code     42%  → deepen   (normal → deep)',
      '  Read / config           3%  → shallower (normal → shallow)',
      '  Bash / git_log         11%  → hold',
      '',
      'Applied 2 policy changes → ~/.dhee/router_policy.json',
    ],
    bullets: [
      'Per-tool, per-intent retrieval depth tuned from real usage',
      'Policy file atomically rewritten — no service restart',
      'Frontend teams get deeper JS/TS digests; data teams get richer JSONL',
    ],
  },
] as const;

type StepKey = (typeof steps)[number]['key'];

export const Dashboard: React.FC = () => {
  const [active, setActive] = useState<StepKey>('install');
  const current = steps.find((s) => s.key === active) ?? steps[0];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
        <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">Onboarding</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          From install to shared repo brain —{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            the path to Enterprise.
          </span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Start with the local developer brain. As your team adopts Dhee, reviewed memories can become shared repo
          context, and Enterprise adds governance, readiness scoring, telemetry, and secure routing.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {steps.map((step) => (
          <button
            key={step.key}
            onClick={() => setActive(step.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              active === step.key
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
            }`}
          >
            {step.label}
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
            <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">Effect</div>
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
            <span className="ml-3 text-[11px] text-gray-500 font-mono">dhee</span>
          </div>

          <div className="px-5 pb-5 pt-4">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-gray-200">
              {current.snippet.join('\n')}
            </pre>
          </div>

          <div className="border-t border-white/10 px-5 py-4 bg-white/[0.03]">
            <p className="text-xs text-gray-400 leading-relaxed">
              Dhee sits underneath Claude Code, Cursor, Codex, Gemini CLI, Aider, Cline, Goose, and Claude Desktop —
              same four-step flow, every host.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
