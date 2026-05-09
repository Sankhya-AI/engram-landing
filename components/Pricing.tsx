import React, { useMemo, useState } from 'react';

type PricingPlan = {
  name: string;
  label: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  href: string;
  featured?: boolean;
  includes: string[];
  notes: string[];
};

const contactEmail = 'hello@sensai.co.in';
const seatPrice = 5;

const plans: PricingPlan[] = [
  {
    name: 'Free OSS',
    label: '01 / local',
    price: '$0',
    cadence: 'forever',
    description: 'Run Dhee on your machine and see the context layer inside a real coding loop.',
    cta: 'Start free',
    href: 'https://github.com/Sankhya-AI/Dhee',
    includes: [
      'Local activity capture',
      'Repo-scoped context files',
      'CLI, Python, and MCP primitives',
      'Session digests and handoffs',
    ],
    notes: ['Self-hosted', 'No hosted sync', 'Community support'],
  },
  {
    name: 'Developer',
    label: '02 / personal',
    price: '$5',
    cadence: 'per seat / month',
    description: 'Hosted continuity for one developer moving across repos, agents, and interruptions.',
    cta: 'Sign up',
    href: '#enterprise-signup',
    includes: [
      'Personal cross-repo recall',
      'Hosted private context sync',
      'Live inbox and handoff signals',
      'Artifact and markdown ingestion',
      'Launch onboarding',
    ],
    notes: ['Single developer seat', 'Fair-use context routing', 'Upgrade to Enterprise any time'],
  },
  {
    name: 'Enterprise',
    label: '03 / team',
    price: '$5',
    cadence: 'per seat / month',
    description: 'Shared memory for teams that need the same repo decisions and product context in every agent.',
    cta: 'Start enterprise',
    href: '#enterprise-signup',
    featured: true,
    includes: [
      'Shared repo and product brain',
      'Shared tasks and broadcasts',
      'Reviewed memory lifecycle',
      'Team controls and audit-ready history',
      'Readiness and savings telemetry',
      'Secure context routing',
    ],
    notes: ['Starts at 3 active developers', 'Hosted or private deployment', 'Launch rollout support included'],
  },
];

const comparison = [
  ['Local developer brain', true, true, true],
  ['Repo context entries', true, true, true],
  ['Personal cross-repo recall', false, true, true],
  ['Hosted context sync', false, true, true],
  ['Shared repo and product brain', false, false, true],
  ['Live shared tasks and broadcasts', false, false, true],
  ['Reviewed memory lifecycle', false, false, true],
  ['Team controls and telemetry', false, false, true],
] as const;

export const Pricing: React.FC = () => {
  const [signup, setSignup] = useState({
    email: '',
    company: '',
    seats: '10',
    github: '',
    surfaces: 'Codex, Claude Code, Cursor, MCP',
  });

  const seats = Math.max(1, Number.parseInt(signup.seats, 10) || 1);
  const monthlyEstimate = seats * seatPrice;

  const signupHref = useMemo(() => {
    const subject = 'Dhee Enterprise signup';
    const body = [
      'Plan: Dhee Enterprise',
      `Price: $${seatPrice}/seat/month`,
      `Seats: ${seats}`,
      `Estimated monthly: $${monthlyEstimate}`,
      `Work email: ${signup.email || '-'}`,
      `Company: ${signup.company || '-'}`,
      `GitHub org or repo: ${signup.github || '-'}`,
      `Agent surfaces: ${signup.surfaces || '-'}`,
    ].join('\n');

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [monthlyEstimate, seats, signup.company, signup.email, signup.github, signup.surfaces]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = signupHref;
  };

  return (
    <div className="ledger-pricing">
      <section className="ledger-hero">
        <div>
          <p className="ledger-meta">/ pricing</p>
          <h1>
            Free local.
            <br />
            $5 for shared context.
          </h1>
          <p>
            Dhee is free on your machine. Pay when memory has to follow your team
            across agents, repos, and handoffs.
          </p>
          <div className="ledger-proofline" aria-label="Pricing summary">
            <span />
            Free OSS / hosted developer / shared team memory
          </div>
          <div className="ledger-actions">
            <a href="#plans" className="ledger-btn ledger-btn-primary">
              Compare plans -&gt;
            </a>
            <a href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer" className="ledger-btn">
              View OSS
            </a>
          </div>
        </div>

        <aside className="ledger-receipt" aria-label="Pricing receipt">
          <div className="ledger-receipt-title">
            <span />
            pricing receipt
          </div>
          <dl>
            <div>
              <dt>Free OSS</dt>
              <dd>$0 forever</dd>
            </div>
            <div>
              <dt>Developer</dt>
              <dd>$5 / seat</dd>
            </div>
            <div>
              <dt>Enterprise</dt>
              <dd>$5 / seat</dd>
            </div>
            <div>
              <dt>Team start</dt>
              <dd>3 seats</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section id="plans" className="ledger-plans" aria-label="Dhee pricing plans">
        {plans.map((plan) => (
          <article key={plan.name} className={plan.featured ? 'featured' : undefined}>
            <div className="ledger-plan-top">
              <p>{plan.label}</p>
              {plan.featured ? <span>self-serve</span> : null}
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

            <a
              href={plan.href}
              target={plan.href.startsWith('http') ? '_blank' : undefined}
              rel={plan.href.startsWith('http') ? 'noreferrer' : undefined}
              className={plan.featured ? 'ledger-plan-cta primary' : 'ledger-plan-cta'}
            >
              {plan.cta} -&gt;
            </a>
          </article>
        ))}
      </section>

      <section className="ledger-principles" aria-label="Pricing principles">
        <article>
          <p className="ledger-meta">/ why free exists</p>
          <h2>Free OSS is real Dhee, not a fake trial.</h2>
          <p>
            A developer should be able to install Dhee, run real agent work, and understand the category before paying.
          </p>
        </article>
        <article>
          <p className="ledger-meta">/ why enterprise exists</p>
          <h2>Teams pay when context becomes shared infrastructure.</h2>
          <p>
            Shared repo memory, reviewed context, governance, telemetry, and secure routing matter once every agent
            and teammate needs the same product understanding.
          </p>
        </article>
      </section>

      <section className="ledger-compare">
        <div className="ledger-compare-head">
          <div>
            <p className="ledger-meta">/ plan comparison</p>
            <h2>Enterprise starts where repeated context dumping ends.</h2>
          </div>
        </div>

        <div className="ledger-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Capability</th>
                <th>Free OSS</th>
                <th>Developer</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, free, individual, team]) => (
                <tr key={label}>
                  <td>{label}</td>
                  {[free, individual, team].map((included, index) => (
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

      <section id="enterprise-signup" className="signup-page">
        <div className="signup-hero">
          <div>
            <p className="ledger-meta">/ enterprise signup</p>
            <h1>Start Dhee Enterprise at $5 per seat.</h1>
            <p>
              This local version opens a prefilled signup email while checkout is being wired.
              You can still see the full self-serve motion.
            </p>
          </div>
          <aside className="signup-hero-aside" aria-label="Signup summary">
            <span>plan / enterprise</span>
            <span>${seatPrice} / seat / month</span>
            <span>{seats} seats</span>
            <span>${monthlyEstimate.toLocaleString()} estimated monthly</span>
          </aside>
        </div>

        <div className="signup-grid">
          <form onSubmit={handleSubmit} className="signup-form">
            <div>
              <span className="signup-label">signup details</span>
            </div>
            <div className="signup-fields">
              <label>
                <span>Work email</span>
                <input
                  type="email"
                  value={signup.email}
                  onChange={(event) => setSignup((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
              <label>
                <span>Company</span>
                <input
                  type="text"
                  value={signup.company}
                  onChange={(event) => setSignup((current) => ({ ...current, company: event.target.value }))}
                  placeholder="Acme"
                  autoComplete="organization"
                />
              </label>
              <label>
                <span>Seats</span>
                <input
                  type="number"
                  min="1"
                  value={signup.seats}
                  onChange={(event) => setSignup((current) => ({ ...current, seats: event.target.value }))}
                />
              </label>
              <label>
                <span>GitHub org / repo</span>
                <input
                  type="text"
                  value={signup.github}
                  onChange={(event) => setSignup((current) => ({ ...current, github: event.target.value }))}
                  placeholder="github.com/org/repo"
                />
              </label>
              <label className="signup-wide">
                <span>Agent surfaces</span>
                <input
                  type="text"
                  value={signup.surfaces}
                  onChange={(event) => setSignup((current) => ({ ...current, surfaces: event.target.value }))}
                />
              </label>
            </div>
            <button type="submit" className="ledger-plan-cta primary signup-submit">
              Open signup email -&gt;
            </button>
          </form>

          <aside className="signup-summary">
            <div className="signup-summary-top">/ launch quote</div>
            <h2>${monthlyEstimate.toLocaleString()}</h2>
            <p>{seats} seats x ${seatPrice} per seat per month.</p>
            <div className="signup-console">
              <div>next steps</div>
              <p>dhee workspace invite</p>
              <p>repo context bootstrap</p>
              <p>agent routing setup</p>
              <p>shared memory review flow</p>
            </div>
            <a className="signup-github" href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
};
