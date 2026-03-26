import React from 'react';

export const Quickstart: React.FC = () => {
  return (
    <section>
      <h1>Quickstart</h1>
      <p>Get Dhee working in a few minutes with the smaller product surface.</p>

      <h2>1. Install Dhee</h2>
      <pre className="docs-code">
        <code>{`pip install dhee[openai,mcp]`}</code>
      </pre>

      <h2>2. Set Your API Key</h2>
      <pre className="docs-code">
        <code>{`export OPENAI_API_KEY="your-key"`}</code>
      </pre>
      <div className="callout tip">
        If you prefer a different provider, the Python package also supports Gemini and Ollama extras.
      </div>

      <h2>3. Connect Dhee to an MCP Client</h2>
      <p>For Claude Code, Claude Desktop, and Cursor, the minimal config is:</p>
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

      <h2>4. Or Use the Python SDK Directly</h2>
      <pre className="docs-code">
        <code>{`from dhee import Dhee

d = Dhee()
d.context("fixing auth bug")
d.remember("User prefers dark mode")
d.recall("what UI theme does the user like?")
d.checkpoint(
    "Fixed auth bug",
    task_type="bug_fix",
    what_worked="git blame showed the breaking commit",
)`}</code>
      </pre>

      <h2>5. Optional Interfaces</h2>
      <pre className="docs-code">
        <code>{`# CLI
dhee remember "User prefers Python"
dhee recall "programming language"

# Docker
docker compose up -d`}</code>
      </pre>

      <h2>What You Get</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Persistent memory</td>
            <td>Your agent can remember facts and preferences across sessions</td>
          </tr>
          <tr>
            <td>Performance tracking</td>
            <td>Dhee can warn when task performance starts regressing</td>
          </tr>
          <tr>
            <td>Insight synthesis</td>
            <td>What worked and what failed become reusable learnings</td>
          </tr>
          <tr>
            <td>Prospective memory</td>
            <td>Future reminders fire when the right trigger context appears</td>
          </tr>
        </tbody>
      </table>

      <h2>Next Steps</h2>
      <ul>
        <li><a href="/docs/mcp-server/">MCP Server</a> for the leanest integration path</li>
        <li><a href="/docs/sdk/">Python SDK</a> for application-level integration</li>
        <li><a href="/docs/architecture/">Architecture</a> for the Engram and Buddhi split</li>
      </ul>
    </section>
  );
};
