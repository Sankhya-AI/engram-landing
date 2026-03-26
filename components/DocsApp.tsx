import React from 'react';
import { DocsLayout } from './docs/DocsLayout';
import { Introduction } from './docs/pages/Introduction';
import { Quickstart } from './docs/pages/Quickstart';
import { PythonSDK } from './docs/pages/PythonSDK';
import { McpServer } from './docs/pages/McpServer';
import { Architecture } from './docs/pages/Architecture';
import { Research } from './docs/pages/Research';
import { ProductShift } from './docs/pages/ProductShift';

const routes: Record<string, { key: string; component: React.ReactNode }> = {
  '': { key: 'introduction', component: <Introduction /> },
  docs: { key: 'introduction', component: <Introduction /> },
  introduction: { key: 'introduction', component: <Introduction /> },
  'what-changed': { key: 'what-changed', component: <ProductShift /> },
  quickstart: { key: 'quickstart', component: <Quickstart /> },
  sdk: { key: 'sdk', component: <PythonSDK /> },
  'mcp-server': { key: 'mcp-server', component: <McpServer /> },
  architecture: { key: 'architecture', component: <Architecture /> },
  research: { key: 'research', component: <Research /> },
  dashboard: { key: 'what-changed', component: <ProductShift /> },
  'task-board': { key: 'what-changed', component: <ProductShift /> },
  'agent-chat': { key: 'what-changed', component: <ProductShift /> },
  coordination: { key: 'what-changed', component: <ProductShift /> },
  'memory-inspector': { key: 'what-changed', component: <ProductShift /> },
  'rest-api': { key: 'what-changed', component: <ProductShift /> },
  handoff: { key: 'what-changed', component: <ProductShift /> },
  'how-memory-works': { key: 'what-changed', component: <ProductShift /> },
  fadem: { key: 'what-changed', component: <ProductShift /> },
  scenes: { key: 'what-changed', component: <ProductShift /> },
  'knowledge-graph': { key: 'what-changed', component: <ProductShift /> },
  configuration: { key: 'what-changed', component: <ProductShift /> },
  'self-hosting': { key: 'what-changed', component: <ProductShift /> },
};

export const DocsApp: React.FC = () => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/docs/';
  const trimmed = path.replace(/\/$/, '');
  const slug = trimmed.split('/').pop() ?? '';
  const route = routes[slug] ?? routes.docs;

  return <DocsLayout activeKey={route.key}>{route.component}</DocsLayout>;
};
