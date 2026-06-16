import React from 'react';

export const Architecture: React.FC = () => {
  return (
    <section>
      <h1>Architecture</h1>
      <p>
        Dhee has one external loop and two internal responsibilities: memory persistence and context routing.
        The agent uses four operations, while Dhee handles the storage, ranking, outcome tracking, and repo
        continuity underneath.
      </p>

      <div className="docs-diagram">
        <svg viewBox="0 0 900 430" role="img" aria-label="Dhee architecture">
          <defs>
            <linearGradient id="dheeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14100c" />
              <stop offset="100%" stopColor="#6b665f" />
            </linearGradient>
          </defs>

          <rect x="180" y="20" width="540" height="58" rx="14" fill="#ffffff" stroke="url(#dheeStroke)" strokeWidth="2" />
          <text x="450" y="55" textAnchor="middle" fontSize="16" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agent Runtime (Claude, GPT, Gemini, Cursor, Codex, custom)
          </text>

          <line x1="450" y1="78" x2="450" y2="118" stroke="#9ca3af" strokeWidth="2" />

          <rect x="110" y="118" width="680" height="84" rx="16" fill="#fbf6f2" stroke="#e8d8cd" strokeWidth="1.5" />
          <text x="450" y="148" textAnchor="middle" fontSize="15" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Dhee Core Loop
          </text>
          <text x="450" y="176" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#4b5563">
            remember() · recall() · context() · checkpoint()
          </text>

          <line x1="290" y1="202" x2="290" y2="242" stroke="#9ca3af" strokeWidth="2" />
          <line x1="610" y1="202" x2="610" y2="242" stroke="#9ca3af" strokeWidth="2" />

          <rect x="90" y="242" width="400" height="118" rx="16" fill="#ffffff" stroke="url(#dheeStroke)" strokeWidth="1.5" />
          <text x="290" y="274" textAnchor="middle" fontSize="15" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Memory Store
          </text>
          <text x="290" y="301" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#4b5563">
            Durable local and repo memory
          </text>
          <text x="290" y="324" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#6b7280">
            SQLite + vector index
          </text>
          <text x="290" y="344" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#6b7280">
            Hot path retrieval and batched enrichment
          </text>

          <rect x="410" y="242" width="400" height="118" rx="16" fill="#ffffff" stroke="url(#dheeStroke)" strokeWidth="1.5" />
          <text x="610" y="274" textAnchor="middle" fontSize="15" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Context Router
          </text>
          <text x="610" y="301" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#4b5563">
            Ranking, policies, outcomes
          </text>
          <text x="610" y="324" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#6b7280">
            Performance tracking, insights, intentions
          </text>
          <text x="610" y="344" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#6b7280">
            Trend warnings and task continuity
          </text>

          <line x1="450" y1="360" x2="450" y2="395" stroke="#9ca3af" strokeWidth="2" />
          <rect x="270" y="395" width="360" height="28" rx="10" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="450" y="414" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6b7280">
            ~/.dhee/history.db · ~/.dhee/zvec · repo/.dhee/context/*
          </text>
        </svg>
      </div>

      <h2>Layer Responsibilities</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Owns</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Memory Store</td>
            <td>Memory persistence and retrieval</td>
            <td>Facts, history, embeddings, recall ranking</td>
          </tr>
          <tr>
            <td>Context Router</td>
            <td>Meta-knowledge about performance, policy, and future action</td>
            <td>Warnings, insights, what worked, remember-to triggers</td>
          </tr>
          <tr>
            <td>Interfaces</td>
            <td>How agents call into Dhee</td>
            <td>MCP, Python SDK, CLI, Docker</td>
          </tr>
        </tbody>
      </table>

      <h2>Session Lifecycle</h2>
      <ol>
        <li>The agent calls <code>context()</code> at the start of a task.</li>
        <li>Dhee returns relevant memories, warnings, insights, and triggered intentions.</li>
        <li>The agent stores facts with <code>remember()</code> and retrieves context with <code>recall()</code>.</li>
        <li>At the end, <code>checkpoint()</code> writes the digest and updates outcomes, insights, and future triggers.</li>
      </ol>

      <h2>On-Disk Layout</h2>
      <pre className="docs-code">
        <code>{`~/.dhee/
├── history.db
├── zvec/
├── router_policy.json
└── outcomes/
    ├── insights.jsonl
    ├── intentions.jsonl
    └── performance.json

repo/.dhee/context/
├── manifest.json
└── entries.jsonl`}</code>
      </pre>

      <div className="callout tip">
        Dhee is not trying to be the whole agent platform. It is the product brain that sits underneath
        your agent surfaces and makes them start sharper.
      </div>
    </section>
  );
};
