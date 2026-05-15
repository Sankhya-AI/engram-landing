import React, { useState } from 'react';
import { CalDemoButton } from './CalDemoButton';

type PricingPlan = {
  name: string;
  label: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  featured?: boolean;
  includes: string[];
  notes: string[];
};

const seatPrice = 5;
const minimumSeats = 5;

const plans: PricingPlan[] = [
  {
    name: 'Free OSS',
    label: '01 / individual',
    price: '$0',
    cadence: 'forever',
    description:
      'The individual developer plan is the open-source Dhee plan: local-first, complete, and free.',
    cta: 'Start free',
    includes: [
      'Local developer brain and context firewall',
      'CLI, UI, Python, and MCP primitives',
      'Claude Code, Codex, Cursor, and MCP workflows',
      'Session digests, handoffs, and export/import',
    ],
    notes: ['No credit card', 'Runs on your machine', 'MIT open source'],
  },
  {
    name: 'Team',
    label: '02 / shared repo context',
    price: '$5',
    cadence: 'per seat / month',
    description:
      'For teams that want Dhee to carry repo context across developers, agents, sessions, and handoffs.',
    cta: 'Book a demo',
    featured: true,
    includes: [
      'Shared repo context across your team',
      'Git-backed decisions, conventions, and handoffs',
      'Shared tasks, broadcasts, and reviewed memories',
      'Token-savings walkthrough for your agent workflow',
    ],
    notes: ['Minimum 5 seats', 'Starts at $25/month', 'Demo shows where tokens disappear'],
  },
];

const comparison = [
  ['Local developer brain', true, true],
  ['Context firewall and router', true, true],
  ['CLI, UI, Python, and MCP surfaces', true, true],
  ['Handoffs and portable export/import', true, true],
  ['Shared repo context across developers', false, true],
  ['Team tasks and broadcasts', false, true],
  ['Reviewed shared memory lifecycle', false, true],
  ['Team onboarding support', false, true],
] as const;

export const Pricing: React.FC = () => {
  const [seatInput, setSeatInput] = useState(String(minimumSeats));
  const seats = Math.max(minimumSeats, Number.parseInt(seatInput, 10) || minimumSeats);
  const monthlyEstimate = seats * seatPrice;

  return (
    <div className="ledger-pricing">
      <section className="ledger-hero">
        <div>
          <p className="ledger-meta">/ pricing</p>
          <h1>
            Free for devs.
            <br />
            $5 when teams share context.
          </h1>
          <p>
            Dhee stays free for individual developers. Teams pay only when shared repo context becomes team
            infrastructure across people, agents, and handoffs.
          </p>
          <div className="ledger-proofline" aria-label="Pricing summary">
            <span />
            Free OSS for individuals / Team shared repo context
          </div>
          <div className="ledger-actions">
            <a href="#plans" className="ledger-btn ledger-btn-primary">
              Compare plans -&gt;
            </a>
            <CalDemoButton className="ledger-btn" aria-label="Book a Dhee demo">
              Book a demo
            </CalDemoButton>
          </div>
        </div>

        <aside className="ledger-receipt" aria-label="Pricing receipt">
          <div className="ledger-receipt-title">
            <span />
            pricing receipt
          </div>
          <dl>
            <div>
              <dt>Individual dev</dt>
              <dd>$0 forever</dd>
            </div>
            <div>
              <dt>Team plan</dt>
              <dd>$5 / seat</dd>
            </div>
            <div>
              <dt>Minimum</dt>
              <dd>5 seats</dd>
            </div>
            <div>
              <dt>Team start</dt>
              <dd>$25 / month</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section id="plans" className="ledger-plans" aria-label="Dhee pricing plans">
        {plans.map((plan) => (
          <article key={plan.name} className={plan.featured ? 'featured' : undefined}>
            <div className="ledger-plan-top">
              <p>{plan.label}</p>
              {plan.featured ? <span>team rollout</span> : null}
            </div>
            <h2>{plan.name}</h2>
            <div className="ledger-price">
              <strong>{plan.price}</strong>
              <span>{plan.cadence}</span>
            </div>
            <p className="ledger-plan-description">{plan.description}</p>

            <div className="ledger-includes">
              {plan.includes.map((item) => (
                <div key={item}>
                  <span className="ledger-check" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="ledger-notes">
              <span>notes</span>
              <ul>
                {plan.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            {plan.featured ? (
              <CalDemoButton className="ledger-plan-cta primary" aria-label="Book a Dhee Team demo">
                {plan.cta} -&gt;
              </CalDemoButton>
            ) : (
              <a
                href="https://github.com/Sankhya-AI/Dhee"
                target="_blank"
                rel="noreferrer"
                className="ledger-plan-cta"
              >
                {plan.cta} -&gt;
              </a>
            )}
          </article>
        ))}
      </section>

      <section className="ledger-principles" aria-label="Pricing principles">
        <article>
          <p className="ledger-meta">/ why free exists</p>
          <h2>Free OSS is real Dhee, not a fake trial.</h2>
          <p>
            Individual developers should be able to install Dhee, run real agent work, open the UI, and understand the
            category before paying anyone.
          </p>
        </article>
        <article>
          <p className="ledger-meta">/ why teams pay</p>
          <h2>Teams pay when context becomes shared infrastructure.</h2>
          <p>
            Shared repo memory, reviewed context, coordinated handoffs, and team onboarding matter once every teammate
            and agent needs the same product understanding.
          </p>
        </article>
      </section>

      <section className="ledger-compare">
        <div className="ledger-compare-head">
          <div>
            <p className="ledger-meta">/ plan comparison</p>
            <h2>Two plans. No paid individual tier.</h2>
          </div>
        </div>

        <div className="ledger-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Capability</th>
                <th>Free OSS</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, free, team]) => (
                <tr key={label}>
                  <td>{label}</td>
                  {[free, team].map((included, index) => (
                    <td key={`${label}-${index}`}>
                      {included ? <span className="ledger-table-check" aria-label="Included" /> : <span aria-label="Not included">-</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="team-interest" className="signup-page">
        <div className="signup-hero">
          <div>
            <p className="ledger-meta">/ book a demo</p>
            <h1>See how Dhee saves tokens for you and your team.</h1>
            <p>
              Book a walkthrough and we will map your current agent workflow: repeated context, noisy tool output,
              stale repo knowledge, and where Dhee can cut token waste without hiding the evidence.
            </p>
          </div>
          <aside className="signup-hero-aside" aria-label="Team plan summary">
            <span>plan / team</span>
            <span>${seatPrice} / seat / month</span>
            <span>{seats} seats</span>
            <span>${monthlyEstimate.toLocaleString()} estimated monthly</span>
          </aside>
        </div>

        <div className="signup-grid">
          <div className="signup-form">
            <div>
              <span className="signup-label">demo planner</span>
            </div>
            <div className="signup-fields">
              <label>
                <span>Expected seats</span>
                <input
                  type="number"
                  min={minimumSeats}
                  value={seatInput}
                  onChange={(event) => setSeatInput(event.target.value)}
                  onBlur={(event) => {
                    const value = Number.parseInt(event.target.value, 10);
                    if (!Number.isFinite(value) || value < minimumSeats) {
                      setSeatInput(String(minimumSeats));
                    }
                  }}
                />
              </label>
              <label>
                <span>Minimum</span>
                <input type="text" value={`${minimumSeats} seats`} readOnly />
              </label>
              <label className="signup-wide">
                <span>What we will show</span>
                <textarea
                  value="token savings, repo context, handoff quality, and Dhee UI"
                  readOnly
                />
              </label>
            </div>
            <CalDemoButton className="ledger-plan-cta primary signup-submit" aria-label="Book a Dhee token-savings demo">
              Book a demo -&gt;
            </CalDemoButton>
          </div>

          <aside className="signup-summary">
            <div className="signup-summary-top">/ demo focus</div>
            <h2>${monthlyEstimate.toLocaleString()}</h2>
            <p>{seats} seats x ${seatPrice} per seat per month. Minimum {minimumSeats} seats.</p>
            <div className="signup-console">
              <div>we walk through</div>
              <p>how much context your agents repeat</p>
              <p>where tool output burns tokens</p>
              <p>how shared repo context removes cold starts</p>
              <p>what your team sees inside the Dhee UI</p>
            </div>
            <CalDemoButton className="signup-github" aria-label="Book a Dhee demo from summary">
              Book demo on Cal.com
            </CalDemoButton>
          </aside>
        </div>
      </section>
    </div>
  );
};
