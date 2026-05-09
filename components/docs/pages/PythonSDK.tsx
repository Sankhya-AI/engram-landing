import React from 'react';

export const PythonSDK: React.FC = () => {
  return (
    <section>
      <h1>Python SDK</h1>
      <p>
        The Python SDK mirrors the simpler Dhee product directly. You do not need to learn a large object
        model or a deep memory lifecycle to get value out of it.
      </p>

      <h2>Install</h2>
      <pre className="docs-code">
        <code>{`pip install dhee[openai,mcp]
export OPENAI_API_KEY="your-key"`}</code>
      </pre>

      <h2>Core Usage</h2>
      <pre className="docs-code">
        <code>{`from dhee import Dhee

d = Dhee()

d.remember("User prefers dark mode")
results = d.recall("what theme does the user like?")

ctx = d.context("fixing the auth bug in login.py")

d.checkpoint(
    "Fixed auth bug in login.py",
    task_type="bug_fix",
    outcome_score=1.0,
    what_worked="git blame showed the exact breaking commit",
    remember_to="run auth tests after any login.py change",
    trigger_keywords=["login", "auth"],
)`}</code>
      </pre>

      <h2>What Each Method Is For</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>remember(content)</code></td>
            <td>Store a fact, preference, or observation</td>
            <td>Fast hot path, no LLM call</td>
          </tr>
          <tr>
            <td><code>recall(query)</code></td>
            <td>Search memory for relevant context</td>
            <td>Uses embeddings plus echo-boosted retrieval</td>
          </tr>
          <tr>
            <td><code>context(task)</code></td>
            <td>Bootstrap a task with continuity</td>
            <td>Returns warnings, insights, intentions, and relevant memories</td>
          </tr>
          <tr>
            <td><code>checkpoint(summary, ...)</code></td>
            <td>Turn a session into future cognition</td>
            <td>Where enrichment, trends, insights, and reminders are updated</td>
          </tr>
        </tbody>
      </table>

      <h2>Checkpoint Is Where the Cognition Happens</h2>
      <p>
        Dhee keeps the hot path cheap and moves the heavier cognition work to the checkpoint boundary. That is
        where session digesting, memory enrichment, performance tracking, insight synthesis, and prospective
        memory updates happen.
      </p>

      <h2>Provider Options</h2>
      <pre className="docs-code">
        <code>{`pip install dhee[openai,mcp]   # OpenAI
pip install dhee[gemini,mcp]   # Gemini
pip install dhee[ollama,mcp]   # Ollama`}</code>
      </pre>

      <h2>When to Use the SDK</h2>
      <ul>
        <li>Use the SDK when Dhee is part of your own Python runtime.</li>
        <li>Use MCP when you want an editor or agent tool to call Dhee externally.</li>
        <li>Use the CLI when you want lightweight scripting without embedding Python code.</li>
      </ul>

      <div className="callout tip">
        If you want the smallest integration path, use <a href="#mcp-server">MCP Server</a> first.
      </div>
    </section>
  );
};
