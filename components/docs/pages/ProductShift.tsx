import React from 'react';

export const ProductShift: React.FC = () => {
  return (
    <section>
      <h1>What Changed</h1>
      <p>
        The docs used to describe a broader Engram product with dashboards, agent coordination, memory
        inspectors, and many internal subsystems. The product has moved to a simpler Dhee direction.
      </p>

      <div className="callout note">
        <strong>New center of gravity:</strong> Dhee is now the cognition layer that helps agents remember,
        track outcomes, synthesize learnings, and trigger future intent.
      </div>

      <h2>What Stayed</h2>
      <ul>
        <li>Persistent memory is still important.</li>
        <li>Cross-session continuity is still important.</li>
        <li>The HyperAgents direction is now the strategic framing.</li>
      </ul>

      <h2>What We Simplified Away</h2>
      <ul>
        <li>Dashboard-first positioning</li>
        <li>Broad orchestration and task-board messaging</li>
        <li>A docs IA centered on many internal memory sublayers</li>
        <li>A large product story when the real value is the cognition loop</li>
      </ul>

      <h2>The Simpler Product Story</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Old emphasis</th>
            <th>New emphasis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Memory platform and orchestration stack</td>
            <td>Cognition layer for existing agents</td>
          </tr>
          <tr>
            <td>Many subsystems and UI surfaces</td>
            <td>Four core operations</td>
          </tr>
          <tr>
            <td>Dashboard workflows</td>
            <td>MCP and SDK integration</td>
          </tr>
          <tr>
            <td>Complex internal taxonomy</td>
            <td>Engram plus Buddhi, explained simply</td>
          </tr>
        </tbody>
      </table>

      <h2>Start Here Now</h2>
      <ul>
        <li><a href="/docs/">Introduction</a> for the new product shape</li>
        <li><a href="/docs/quickstart/">Quickstart</a> for installation and first use</li>
        <li><a href="/docs/mcp-server/">MCP Server</a> for tool integration</li>
        <li><a href="/docs/sdk/">Python SDK</a> for runtime integration</li>
        <li><a href="/docs/architecture/">Architecture</a> for the two-layer model</li>
      </ul>
    </section>
  );
};
