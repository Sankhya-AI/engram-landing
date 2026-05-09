import React from 'react';
import { DocsLayout } from './docs/DocsLayout';
import { Introduction } from './docs/pages/Introduction';
import { Quickstart } from './docs/pages/Quickstart';
import { PythonSDK } from './docs/pages/PythonSDK';
import { McpServer } from './docs/pages/McpServer';
import { Architecture } from './docs/pages/Architecture';
import { Research } from './docs/pages/Research';

const sections = [
  { id: 'introduction', component: <Introduction /> },
  { id: 'quickstart', component: <Quickstart /> },
  { id: 'mcp-server', component: <McpServer /> },
  { id: 'sdk', component: <PythonSDK /> },
  { id: 'architecture', component: <Architecture /> },
  { id: 'research', component: <Research /> },
];

export const DocsApp: React.FC = () => {
  return (
    <DocsLayout>
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="docs-onepage-section">
          {section.component}
        </div>
      ))}
    </DocsLayout>
  );
};
