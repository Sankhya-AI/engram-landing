import React from 'react';

export const McpServer: React.FC = () => {
  return (
    <section>
      <h1>MCP Server</h1>
      <p>
        The smallest way to adopt Dhee is through MCP. You expose the same four core operations to your
        agent runtime and let the agent decide when to remember, recall, bootstrap context, and checkpoint.
      </p>

      <h2>Install</h2>
      <pre className="docs-code">
        <code>{`pip install dhee[openai,mcp]
export OPENAI_API_KEY="your-key"`}</code>
      </pre>

      <h2>Standard MCP Configuration</h2>
      <p>For Claude Code, Claude Desktop, and Cursor:</p>
      <pre className="docs-code">
        <code>{`{
  "mcpServers": {
    "dhee": { "command": "dhee-mcp" }
  }
}`}</code>
      </pre>

      <p>For OpenAI Codex in <code>~/.codex/config.toml</code>:</p>
      <pre className="docs-code">
        <code>{`[mcp_servers.dhee]
command = "dhee-mcp"`}</code>
      </pre>

      <h2>The Four Core MCP Tools</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>When to use it</th>
            <th>What comes back</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>remember</code></td>
            <td>When the agent learns a durable fact or preference</td>
            <td>Stored memory record</td>
          </tr>
          <tr>
            <td><code>recall</code></td>
            <td>When the agent needs relevant prior context</td>
            <td>Top matching memories</td>
          </tr>
          <tr>
            <td><code>context</code></td>
            <td>At the start of a task or conversation</td>
            <td>Last session, memories, warnings, insights, intentions</td>
          </tr>
          <tr>
            <td><code>checkpoint</code></td>
            <td>At the end of a meaningful work session</td>
            <td>Saved digest plus updated cognition state</td>
          </tr>
        </tbody>
      </table>

      <h2>Recommended Agent Pattern</h2>
      <ol>
        <li>Call <code>context</code> once at the beginning.</li>
        <li>Use <code>remember</code> only for durable facts, not every transient token.</li>
        <li>Use <code>recall</code> when the task depends on previous sessions.</li>
        <li>End with <code>checkpoint</code> so the next session can inherit learnings.</li>
      </ol>

      <h2>Advanced Mode</h2>
      <p>
        If you need more than the minimal loop, <code>dhee-mcp-full</code> exposes the advanced 24-tool surface.
        The simpler product direction keeps that mode optional rather than primary.
      </p>

      <div className="callout tip">
        If you want direct application integration instead of MCP, go to <a href="#sdk">Python SDK</a>.
      </div>
    </section>
  );
};
