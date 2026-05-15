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

const contactEmail = 'admin@sankhyaailabs.com';
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
    href: 'https://github.com/Sankhya-AI/Dhee',
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
    cta: 'Join team list',
    href: '#team-interest',
    featured: true,
    includes: [
      'Shared repo context across your team',
      'Git-backed decisions, conventions, and handoffs',
      'Shared tasks, broadcasts, and reviewed memories',
      'Direct onboarding help from Sankhya AI Labs',
    ],
    notes: ['Minimum 5 seats', 'Starts at $25/month', 'We reach out by email'],
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
  const [signup, setSignup] = useState({
    email: '',
    company: '',
    seats: String(minimumSeats),
    github: '',
    surfaces: 'Codex, Claude Code, Cursor, MCP',
  });

  const seats = Math.max(minimumSeats, Number.parseInt(signup.seats, 10) || minimumSeats);
  const monthlyEstimate = seats * seatPrice;

  const signupHref = useMemo(() => {
    const subject = 'Dhee Team plan interest';
    const body = [
      'Plan: Dhee Team',
      `Price: $${seatPrice}/seat/month`,
      `Minimum seats: ${minimumSeats}`,
      `Expected seats: ${seats}`,
      `Estimated monthly: $${monthlyEstimate}`,
      `Work email: ${signup.email || '-'}`,
      `Company: ${signup.company || '-'}`,
      `GitHub org or repo: ${signup.github || '-'}`,
      `Agent surfaces: ${signup.surfaces || '-'}`,
      '',
      'Please reach out about sharing repo context across our team using Dhee.',
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
            <p className="ledger-meta">/ team interest</p>
            <h1>Share repo context across your team.</h1>
            <p>
              Tell us where Dhee will run and how many seats you expect. We will reach out from
              admin@sankhyaailabs.com to help your team get set up.
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
          <form onSubmit={handleSubmit} className="signup-form">
            <div>
              <span className="signup-label">join the team list</span>
            </div>
            <div className="signup-fields">
              <label>
                <span>Work email</span>
                <input
                  required
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
                  min={minimumSeats}
                  value={signup.seats}
                  onChange={(event) => setSignup((current) => ({ ...current, seats: event.target.value }))}
                  onBlur={(event) => {
                    const value = Number.parseInt(event.target.value, 10);
                    if (!Number.isFinite(value) || value < minimumSeats) {
                      setSignup((current) => ({ ...current, seats: String(minimumSeats) }));
                    }
                  }}
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
              Open interest email -&gt;
            </button>
          </form>

          <aside className="signup-summary">
            <div className="signup-summary-top">/ team quote</div>
            <h2>${monthlyEstimate.toLocaleString()}</h2>
            <p>{seats} seats x ${seatPrice} per seat per month. Minimum {minimumSeats} seats.</p>
            <div className="signup-console">
              <div>what we help set up</div>
              <p>dhee ui and workspace flow</p>
              <p>repo context bootstrap</p>
              <p>agent routing setup</p>
              <p>shared memory review flow</p>
            </div>
            <a className="signup-github" href={`mailto:${contactEmail}?subject=Dhee%20Team%20plan%20interest`}>
              {contactEmail}
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
};
