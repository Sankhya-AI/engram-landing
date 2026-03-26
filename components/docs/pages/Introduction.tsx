import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section>
      <h1>Dhee Documentation</h1>
      <p>
        Dhee is the simpler product direction: a cognition layer that turns an existing agent into a
        better one. Instead of a broad platform with dashboards and orchestration surfaces, Dhee focuses
        on four core operations that help agents remember, learn from outcomes, and continue across sessions.
      </p>

      <div className="callout note">
        <strong>Product simplification</strong> — if you saw older Engram docs about dashboards, task boards,
        orchestration, or deep memory internals, those are no longer the center of the product. See
        {' '}<a href="/docs/what-changed/">What Changed</a>.
      </div>

      <h2>The Four Core Operations</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>What it does</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>remember()</code></td>
            <td>Stores facts, preferences, and observations</td>
            <td>Lets the agent accumulate durable memory over time</td>
          </tr>
          <tr>
            <td><code>recall()</code></td>
            <td>Searches memory with echo-augmented retrieval</td>
            <td>Finds the right context even when queries are phrased differently</td>
          </tr>
          <tr>
            <td><code>context()</code></td>
            <td>Bootstraps a new task with memories, warnings, insights, and intentions</td>
            <td>Reduces cold starts and cross-tool amnesia</td>
          </tr>
          <tr>
            <td><code>checkpoint()</code></td>
            <td>Saves the session and turns outcomes into cognition</td>
            <td>Compounds learning through trends, insights, and future triggers</td>
          </tr>
        </tbody>
      </table>

      <h2>Mental Model</h2>
      <ol>
        <li>Start a task with <code>context()</code>.</li>
        <li>Store important facts with <code>remember()</code> and search with <code>recall()</code> while you work.</li>
        <li>End with <code>checkpoint()</code> so the next session begins smarter.</li>
      </ol>

      <h2>How to Use Dhee</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Interface</th>
            <th>Best for</th>
            <th>Start here</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MCP</td>
            <td>Claude Code, Cursor, Codex, Claude Desktop</td>
            <td><a href="/docs/mcp-server/">MCP Server</a></td>
          </tr>
          <tr>
            <td>Python SDK</td>
            <td>Embedding Dhee directly into your runtime</td>
            <td><a href="/docs/sdk/">Python SDK</a></td>
          </tr>
          <tr>
            <td>Architecture</td>
            <td>Understanding Engram and Buddhi under the hood</td>
            <td><a href="/docs/architecture/">Architecture</a></td>
          </tr>
        </tbody>
      </table>

      <div className="callout tip">
        <strong>Start here:</strong> go to <a href="/docs/quickstart/">Quickstart</a> if you want to wire Dhee
        into a tool today, or <a href="/docs/research/">Research</a> if you want the HyperAgents rationale first.
      </div>
    </section>
  );
};
