import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const integrations = [
  {
    name: 'Claude Code',
    description: 'Core MCP server with session bootstrap and checkpoint-backed continuity',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 13h4M8 16h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="21" cy="9" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Cursor',
    description: 'Drop in the MCP config and give every coding session shared cognition',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6l16 8-7 3-3 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M15 17l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'OpenAI Codex',
    description: 'Shared context and checkpoints so Codex can pick up where another agent stopped',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="14" y1="5" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" />
        <line x1="14" y1="20" x2="14" y2="23" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.2" />
        <line x1="20" y1="14" x2="23" y2="14" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Claude Desktop',
    description: 'Native MCP integration for conversational agents that should remember across chats',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="20" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
        <line x1="10" y1="19" x2="10" y2="22" stroke="currentColor" strokeWidth="1.2" />
        <line x1="18" y1="19" x2="18" y2="22" stroke="currentColor" strokeWidth="1.2" />
        <line x1="8" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Python SDK',
    description: 'Call Dhee directly from your runtime with the same four core operations',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6h6a4 4 0 0 1 4 4v3H11a3 3 0 0 0-3 3v1H6a3 3 0 0 1-3-3v-4a4 4 0 0 1 4-4h2Z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M19 22h-6a4 4 0 0 1-4-4v-3h8a3 3 0 0 0 3-3v-1h2a3 3 0 0 1 3 3v4a4 4 0 0 1-4 4h-2Z" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="10" cy="9.5" r="1" fill="currentColor" />
        <circle cx="18" cy="18.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'CLI + Docker',
    description: 'Use the same cognition loop in scripts, local tooling, or containerized deployments',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="9" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 14h3M14 14h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M8 9V6M14 9V6M20 9V6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ToolBadge = ({ label }: { label: string }) => (
  <span className="px-2.5 py-1 rounded-md bg-[#f7f3f0] text-[11px] font-semibold text-gray-700 border border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
    {label}
  </span>
);

export const Integrations: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.26em] text-gray-400 mb-4">Interfaces</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          One install.
          {' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Every agent can learn.
          </span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Dhee keeps the interface surface small enough to embed anywhere: MCP for agent tools, Python for
          applications, CLI for scripts, and Docker when you want a portable runtime.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {integrations.map((item) => (
          <SpotlightCard
            key={item.name}
            spotlightColor="255, 255, 255"
            className="group p-5 border border-black/5 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-500"
          >
            <div className="w-12 h-12 mb-4 text-gray-400 group-hover:text-gray-900 flex items-center justify-center border border-black/8 rounded-xl bg-gray-50 group-hover:bg-black group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.name}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
          </SpotlightCard>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6 mb-8">
        <div className="rounded-2xl bg-[#0d0d0d] p-6 md:p-8 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 text-[11px] text-gray-500 font-mono">mcp quick start</span>
          </div>
          <div className="font-mono text-sm leading-loose">
            <div className="text-gray-500">
              <span className="text-green-400">$</span>{' '}
              <span className="text-gray-200">pip install</span>{' '}
              <span className="text-blue-300">"dhee[openai,mcp]"</span>
            </div>
            <div className="text-gray-500">
              <span className="text-green-400">$</span>{' '}
              <span className="text-gray-200">export</span>{' '}
              <span className="text-amber-300">OPENAI_API_KEY</span>
              <span className="text-gray-400">=</span>
              <span className="text-amber-300">"your-key"</span>
            </div>
            <div className="text-gray-500">
              <span className="text-green-400">$</span>{' '}
              <span className="text-gray-200">dhee-mcp</span>
            </div>
            <div className="mt-3 text-gray-500 text-xs leading-relaxed">
              <span className="text-gray-600">{'>'}</span> Core tools exposed: remember, recall, context, checkpoint{' '}
              <span className="text-green-400/70">✓</span>
              <br />
              <span className="text-gray-600">{'>'}</span> Works with Claude Code, Cursor, Codex, Claude Desktop{' '}
              <span className="text-green-400/70">✓</span>
              <br />
              <span className="text-gray-600">{'>'}</span> Hot path stays at zero LLM calls{' '}
              <span className="text-green-400/70">✓</span>
            </div>
          </div>
        </div>

        <SpotlightCard
          spotlightColor="255, 255, 255"
          className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-gray-400 mb-3">Python SDK</div>
          <pre className="overflow-x-auto rounded-xl bg-[#f7f3f0] border border-black/5 p-4 font-mono text-sm leading-7 text-gray-700">
{`from dhee import Dhee

d = Dhee()
d.context("fixing the auth bug in login.py")
d.remember("User prefers dark mode")
d.checkpoint(
    "Fixed auth bug",
    task_type="bug_fix",
    what_worked="git blame showed the breaking commit",
)`}
          </pre>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            When you need more control, <code className="px-1.5 py-0.5 rounded bg-gray-100 text-xs">dhee-mcp-full</code>
            {' '}exposes the advanced 24-tool surface for power users.
          </p>
        </SpotlightCard>
      </div>

      <SpotlightCard
        spotlightColor="120, 120, 200"
        className="rounded-2xl border border-black/5 bg-white p-8 md:p-10 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
      >
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.35fr)_340px] gap-8 xl:items-start">
          <div className="min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <span className="w-fit px-2.5 py-1 rounded-md bg-black text-white text-[10px] font-semibold uppercase tracking-[0.15em]">
                MCP + SDK
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                Small surface area, deep behavior
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-5">
              Dhee does not ask you to adopt a new orchestration platform. It layers underneath the agents you
              already run, adding the cognition primitives that let them remember, reflect, and continue.
            </p>
            <div className="flex flex-wrap gap-2">
              <ToolBadge label="remember()" />
              <ToolBadge label="recall()" />
              <ToolBadge label="context()" />
              <ToolBadge label="checkpoint()" />
              <span className="px-2.5 py-1 rounded-md bg-[#f7f3f0] text-[11px] font-medium text-gray-600 border border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                optional 24-tool full server
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 xl:max-w-[340px]">
            <div className="rounded-xl bg-gray-50 border border-black/5 p-5">
              <div className="text-4xl font-semibold text-gray-900 mb-1">4</div>
              <div className="text-xs text-gray-400 uppercase tracking-[0.15em] font-medium mb-2">Core tools</div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Purposefully narrow primitives that work across agents and runtimes.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-black/5 p-5">
              <div className="text-4xl font-semibold text-gray-900 mb-1">1</div>
              <div className="text-xs text-gray-400 uppercase tracking-[0.15em] font-medium mb-2">LLM pass</div>
              <p className="text-xs text-gray-500 leading-relaxed">
                One batched checkpoint call per session instead of per-memory churn.
              </p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
