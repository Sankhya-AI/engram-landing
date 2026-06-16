import { PixelDither } from './PixelDither';

const workflowSteps = [
  {
    num: '01',
    verb: 'Start with context',
    label: 'before',
    body: 'Dhee compiles the useful facts, decisions, open tasks, repo state, and handoffs before the model takes the next step.',
    proof: ['compact context', 'repo aware', 'handoff ready'],
  },
  {
    num: '02',
    verb: 'Recall or save',
    label: 'during',
    body: 'The agent calls dhee_memory when it needs a preference, correction, prior decision, source note, or new fact worth keeping.',
    proof: ['tool call', 'selective recall', 'new memory'],
  },
  {
    num: '03',
    verb: 'Filter noise',
    label: 'admit',
    body: 'Raw transcripts, huge tool output, stale claims, OTPs, secrets, and filler stay out unless there is a reason to inspect the source.',
    proof: ['secret gates', 'source pointers', 'no prompt dump'],
  },
  {
    num: '04',
    verb: 'Checkpoint proof',
    label: 'after',
    body: 'At the end of work, Dhee stores the result, rejected paths, accepted decisions, and proof so the next run starts warmer.',
    proof: ['outcomes', 'lessons', 'next context'],
  },
];

const useCases = [
  {
    title: 'Coding agents',
    body: 'Claude Code, Codex, Cursor, and MCP clients keep repo rules, prior fixes, open tasks, branch handoffs, and tool-output digests across sessions.',
    tags: ['repo memory', 'agent handoff', 'digested tools'],
  },
  {
    title: 'Voice agents',
    body: 'ElevenLabs agents start calls with the right customer facts, use a memory tool during the call, and checkpoint useful outcomes afterward.',
    tags: ['before call', 'server tool', 'post-call memory'],
  },
  {
    title: 'Support agents',
    body: 'Agents can continue refund cases, remember follow-up channels, suppress private details, and cite the source of a fact when needed.',
    tags: ['case continuity', 'safe recall', 'source-linked'],
  },
  {
    title: 'Browser and desktop agents',
    body: 'Long-running assistants keep preferences, app state, accepted decisions, and rejected paths without replaying every old chat.',
    tags: ['local context', 'preferences', 'next action'],
  },
  {
    title: 'Multi-agent teams',
    body: 'One agent can pause and another can resume from a compact handoff instead of reconstructing the whole task from logs.',
    tags: ['shared context', 'task router', 'handoff'],
  },
];

const integrationPaths = [
  {
    title: 'MCP clients',
    note: 'Claude Code, Cursor, Codex, Gemini CLI, Aider, Cline, Goose, and Claude Desktop get the same memory surface.',
    code: `dhee mcp install

# then call
dhee_context_bootstrap
dhee_read
dhee_expand_result
dhee_checkpoint`,
  },
  {
    title: 'Python SDK',
    note: 'Embed Dhee directly in your agent runtime when you want a small explicit API.',
    code: `from dhee import Dhee

d = Dhee()
ctx = d.context("fix the auth flow")
d.remember("Use Playwright for browser checks")
d.checkpoint("Auth flow fixed and verified")`,
  },
  {
    title: 'OpenAI and Gemini',
    note: 'Provider helpers add Dhee context, a memory tool, and checkpointing without changing your whole stack.',
    code: `memory = OpenAIAgent(model=OPENAI_MODEL)
response = memory.create_response(
    "what did we decide?",
    tools=existing_tools,
)
memory.checkpoint(response)`,
  },
  {
    title: 'ElevenLabs voice',
    note: 'Dynamic variables before the call, a client/server memory tool during it, and useful recall next time.',
    code: `memory = ElevenLabsAgent(
    agent_id=agent_id,
    user_id=user.id,
)
init = memory.start_call(task="support call")`,
  },
  {
    title: 'HTTP sidecar',
    note: 'Any stack can call Dhee over HTTP for context, memory tools, and finish checkpoints.',
    code: `POST /v1/runs/start
POST /v1/tools/dhee_memory
POST /v1/runs/{run_id}/finish`,
  },
];

const proofPoints = [
  {
    title: 'Not just vector search',
    body: 'Dhee stores memories, scenes, handoffs, outcomes, and source pointers, then admits only the parts that fit the current task.',
  },
  {
    title: 'Source-linked digests',
    body: 'Large files, shell output, logs, and subagent replies become compact digests with pointers the model can expand only when needed.',
  },
  {
    title: 'Local-first governance',
    body: 'SQLite by default, deterministic gates first, and careful handling for secrets, private scenes, contradictions, and stale facts.',
  },
  {
    title: 'Self-tuning retrieval',
    body: 'Dhee watches which pointers agents expand and tunes digest depth by tool and intent, so context improves as teams use it.',
  },
];

const stats = [
  ['4', 'core operations'],
  ['28', 'MCP tools'],
  ['0', 'hot-path LLM calls'],
];

export function ContextBrainSection() {
  return (
    <div className="dhee-landing-page">
      <section className="dhee-landing-hero" aria-label="Dhee agent memory runtime">
        <div className="dhee-landing-inner dhee-hero-grid">
          <div className="dhee-hero-copy">
            <p className="dhee-eyebrow"><span /> Dhee agent memory runtime</p>
            <h1>
              <span>Give agents</span>
              <span className="dhee-hero-muted">the right context.</span>
            </h1>
            <p className="dhee-hero-lede">
              Dhee gives AI agents compact memory before, during, and after work.
            </p>
            <div className="dhee-hero-actions">
              <a className="dhee-action dhee-action-primary" href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
                Install Dhee -&gt;
              </a>
              <a className="dhee-action" href="/docs/">
                Read docs
              </a>
            </div>
          </div>

          <aside className="dhee-hero-system" aria-label="Dhee memory workbench">
            <div className="dhee-hero-system-bar">
              <span className="dhee-window-dots">
                <span />
                <span />
                <span />
              </span>
              <strong>dhee run packet</strong>
              <em>live</em>
            </div>

            <div className="dhee-hero-system-body">
              <div className="dhee-memory-lane dhee-memory-lane-before">
                <span>before</span>
                <h2>context packet</h2>
                <div className="dhee-memory-chips" aria-label="Context packet contents">
                  <b>repo rules</b>
                  <b>open task</b>
                  <b>user prefs</b>
                  <b>handoff</b>
                </div>
              </div>

              <div className="dhee-memory-core" aria-label="Dhee memory router">
                <span>dhee_memory</span>
                <strong>recall useful facts</strong>
                <p>source-linked, filtered, compact</p>
              </div>

              <div className="dhee-memory-lane dhee-memory-lane-during">
                <span>during</span>
                <h2>agent asks</h2>
                <code>what did we decide?</code>
              </div>

              <div className="dhee-memory-lane dhee-memory-lane-after">
                <span>after</span>
                <h2>checkpoint proof</h2>
                <ul>
                  <li>diff verified</li>
                  <li>lesson saved</li>
                  <li>next run warmer</li>
                </ul>
              </div>
            </div>

            <div className="dhee-hero-system-footer" aria-label="Install Dhee command">
              <span>install</span>
              <code>curl -fsSL https://raw.githubusercontent.com/Sankhya-AI/Dhee/main/install.sh | sh</code>
            </div>
          </aside>
        </div>
      </section>

      <div className="dhee-transition-band dhee-light-to-dark-bridge dhee-hero-transition-band" aria-hidden="true">
        <PixelDither
          direction="bottom-up"
          fillColor="#100d0a"
          pattern="noise"
          erosionWeight={0.62}
          pixelSize={18}
          seed={11}
          startWeight={0.05}
          className="opacity-100"
        />
      </div>

      <section className="dhee-loop-section" id="how" data-dhee-navbar-inverse="true" aria-label="How Dhee works">
        <div className="dhee-landing-inner">
          <div className="dhee-section-head dhee-section-head-dark">
            <p className="dhee-eyebrow"><span /> How Dhee works</p>
            <h2>Memory becomes a loop, not a prompt dump.</h2>
            <p>
              Dhee sits underneath the agent you already run. The model gets the right context at the right time, while raw history and noisy tool output stay behind the router.
            </p>
          </div>
          <div className="dhee-step-grid">
            {workflowSteps.map((step) => (
              <article key={step.num} className="dhee-step-card">
                <span>{step.num} / {step.label}</span>
                <h3>{step.verb}</h3>
                <p>{step.body}</p>
                <div>
                  {step.proof.map((item) => (
                    <em key={item}>{item}</em>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="dhee-transition-band dhee-dark-to-light-bridge" aria-hidden="true">
        <PixelDither
          direction="bottom-up"
          fillColor="var(--dhee-paper)"
          pattern="noise"
          erosionWeight={0.62}
          pixelSize={18}
          seed={11}
          startWeight={0.05}
          className="opacity-100"
        />
      </div>

      <section className="dhee-use-section" aria-label="Dhee use cases">
        <div className="dhee-landing-inner">
          <div className="dhee-section-head">
            <p className="dhee-eyebrow"><span /> Give agents memory</p>
            <h2>Use Dhee where agents lose the thread.</h2>
            <p>
              The product promise is practical: fewer repeated questions, fewer giant prompts, clearer handoffs, and better next actions.
            </p>
          </div>
          <div className="dhee-use-grid">
            {useCases.map((useCase) => (
              <article key={useCase.title} className="dhee-use-card">
                <h3>{useCase.title}</h3>
                <p>{useCase.body}</p>
                <div>
                  {useCase.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dhee-integration-section" id="integrations" aria-label="Dhee integrations">
        <div className="dhee-landing-inner">
          <div className="dhee-section-head">
            <p className="dhee-eyebrow"><span /> Integrations</p>
            <h2>Keep your stack. Add memory underneath it.</h2>
            <p>
              Dhee is not asking you to adopt a new agent framework. Use MCP, Python, provider helpers, or HTTP and keep the rest of your runtime intact.
            </p>
          </div>
          <div className="dhee-integration-grid">
            {integrationPaths.map((path) => (
              <article key={path.title} className="dhee-integration-card">
                <h3>{path.title}</h3>
                <p>{path.note}</p>
                <pre><code>{path.code}</code></pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="dhee-transition-band dhee-light-to-dark-bridge" aria-hidden="true">
        <PixelDither
          direction="bottom-up"
          fillColor="#100d0a"
          pattern="noise"
          erosionWeight={0.62}
          pixelSize={18}
          seed={11}
          startWeight={0.05}
          className="opacity-100"
        />
      </div>

      <section className="dhee-proof-section" data-dhee-navbar-inverse="true" aria-label="Why Dhee is different">
        <div className="dhee-landing-inner dhee-proof-layout">
          <div className="dhee-proof-copy">
            <p className="dhee-eyebrow"><span /> Why it works</p>
            <h2>Useful memory is governed before it is remembered.</h2>
            <p>
              Dhee treats every fact as something that needs scope, source, freshness, and permission to enter the next context packet.
            </p>
            <div className="dhee-stat-row">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="dhee-proof-grid">
            {proofPoints.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="dhee-transition-band dhee-dark-to-light-bridge" aria-hidden="true">
        <PixelDither
          direction="bottom-up"
          fillColor="var(--dhee-paper)"
          pattern="noise"
          erosionWeight={0.62}
          pixelSize={18}
          seed={11}
          startWeight={0.05}
          className="opacity-100"
        />
      </div>

      <section className="dhee-final-cta" aria-label="Install Dhee">
        <div className="dhee-landing-inner dhee-final-card">
          <p className="dhee-eyebrow"><span /> Start small</p>
          <h2>Add memory to one agent today.</h2>
          <p>
            Wire Dhee into a local MCP client, a Python agent, or a provider SDK. The first win is simple: the next session should not start from zero.
          </p>
          <div className="dhee-hero-actions">
            <a className="dhee-action dhee-action-primary" href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
              Install from GitHub -&gt;
            </a>
            <a className="dhee-action" href="/docs/">
              Open docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
