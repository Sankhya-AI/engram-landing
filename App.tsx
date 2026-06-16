import React, { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ContextBrainSection } from './components/ContextBrainSection';

function DheeHeader() {
  const [inverted, setInverted] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const inverseSections = Array.from(document.querySelectorAll('[data-dhee-navbar-inverse]'));
      const shouldInvert = inverseSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < 82 && rect.bottom > 82;
      });

      setInverted(shouldInvert);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(updateHeaderTheme);
    };

    updateHeaderTheme();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <header className="dhee-site-header" data-theme={inverted ? 'dark' : 'light'}>
      <div className="dhee-header-cap" aria-hidden="true" />
      <div className="dhee-header-bar">
        <a className="dhee-brand" href="/" aria-label="Dhee home">
          <img src="/sensai-logo.png" alt="" width="34" height="34" />
          <span>dhee</span>
          <i>/</i>
          <small>by sankhya labs</small>
        </a>
        <nav className="dhee-nav" aria-label="Dhee navigation">
          <a href="/">Dhee</a>
          <a href="/#integrations">Integrations</a>
          <a href="/docs/">Docs</a>
          <a href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="dhee-nav-cta" href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
            Install <span aria-hidden="true">-&gt;</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function DheeFooter() {
  return (
    <footer className="dhee-site-footer">
      <span>Dhee</span>
      <a href="https://www.sankhyaailabs.com/" target="_blank" rel="noreferrer">
        Sankhya AI Labs
      </a>
      <a href="/docs/">docs</a>
      <a href="/#integrations">integrations</a>
    </footer>
  );
}

export default function App() {
  return (
    <div className="dhee-site-shell">
      <DheeHeader />
      <main>
        <ContextBrainSection />
      </main>
      <DheeFooter />
      <Analytics />
    </div>
  );
}
