import React from 'react';

export const Research: React.FC = () => {
  return (
    <section>
      <h1>Research</h1>
      <p>
        Dhee is guided by a focused research stance: useful agents need practical long-term memory,
        context selection, and outcome learning that carries across sessions, tools, and teammates.
      </p>

      <h2>Primary Direction: HyperAgents</h2>
      <p>
        <strong>HyperAgents</strong> —{' '}
        <a href="https://arxiv.org/abs/2603.19461" target="_blank" rel="noreferrer">
          arXiv:2603.19461
        </a>
        <br />
        The key takeaway for Dhee is that persistent memory and performance tracking are not just storage
        features. They are transferable capabilities that help agents improve how they improve.
      </p>

      <h2>Evaluation Lens: LongMemEval</h2>
      <p>
        <strong>LongMemEval</strong> —{' '}
        <a href="https://arxiv.org/abs/2410.10813" target="_blank" rel="noreferrer">
          arXiv:2410.10813
        </a>
        <br />
        This is the benchmark lens for long-term conversational memory: temporal reasoning, multi-session
        aggregation, updates, and counterfactual tracking. Dhee’s evaluation against it is in progress.
      </p>

      <h2>How Research Maps to Product Decisions</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Research idea</th>
            <th>Dhee product choice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Persistent memory matters across runs</td>
            <td>Keep <code>remember()</code> and <code>recall()</code> as first-class primitives</td>
          </tr>
          <tr>
            <td>Performance tracking improves future decision-making</td>
            <td>Return warnings and trends through <code>context()</code></td>
          </tr>
          <tr>
            <td>Self-improvement benefits from reusable learnings</td>
            <td>Turn outcomes into insights during <code>checkpoint()</code></td>
          </tr>
          <tr>
            <td>Future triggers matter, not just past recall</td>
            <td>Support prospective memory and trigger-based reminders</td>
          </tr>
        </tbody>
      </table>

      <div className="callout tip">
        If you want the implementation view, see <a href="#architecture">Architecture</a>.
      </div>
    </section>
  );
};
