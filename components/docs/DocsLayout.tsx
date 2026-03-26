import React from 'react';

type NavItem = {
  label: string;
  href: string;
  key: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Introduction', href: '/docs/', key: 'introduction' },
      { label: 'What Changed', href: '/docs/what-changed/', key: 'what-changed' },
      { label: 'Quickstart', href: '/docs/quickstart/', key: 'quickstart' },
    ],
  },
  {
    title: 'Interfaces',
    items: [
      { label: 'MCP Server', href: '/docs/mcp-server/', key: 'mcp-server' },
      { label: 'Python SDK', href: '/docs/sdk/', key: 'sdk' },
    ],
  },
  {
    title: 'Concepts',
    items: [
      { label: 'Architecture', href: '/docs/architecture/', key: 'architecture' },
      { label: 'Research', href: '/docs/research/', key: 'research' },
    ],
  },
];

export const DocsLayout: React.FC<{
  activeKey: string;
  children: React.ReactNode;
}> = ({ activeKey, children }) => {
  return (
    <div className="docs-page">
      <header className="docs-header">
        <a className="docs-logo" href="/docs/">
          <img
            src="/sensai-logo.png"
            alt="Sensai logo"
            width="24"
            height="24"
            style={{ objectFit: 'contain', borderRadius: 9999 }}
          />
          <span>Dhee Docs</span>
        </a>
        <div className="docs-header-actions">
          <a
            className="docs-cta-secondary"
            href="https://github.com/Sankhya-AI/Dhee"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="docs-cta" href="/">Back to Dhee</a>
        </div>
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar">
          <h4>Documentation</h4>
          <nav className="docs-nav">
            {navGroups.map((group) => (
              <div key={group.title} className="docs-nav-group">
                <div className="docs-nav-title">{group.title}</div>
                {group.items.map((item) => (
                  <a key={item.key} href={item.href} className={item.key === activeKey ? 'active' : ''}>
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className="docs-content">
          {children}
          <div className="docs-footer">
            Simple cognition for HyperAgents.{' '}
            <a href="https://www.sankhyaailabs.com/" target="_blank" rel="noreferrer">
              A Sankhya AI Labs product.
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};
