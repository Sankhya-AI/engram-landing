import React, { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ContextBrainSection } from './components/ContextBrainSection';
import { Pricing } from './components/Pricing';

function DheeHeader() {
  const [inverted, setInverted] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const inverseSections = Array.from(document.querySelectorAll('[data-dhee-navbar-inverse]'));
      const shouldInvert = inverseSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < 76 && rect.bottom > 0;
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
          <a href="/pricing/">Pricing</a>
          <a href="/docs/">Docs</a>
          <a href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="dhee-nav-cta" href="https://github.com/Sankhya-AI/Dhee" target="_blank" rel="noreferrer">
            Start free <span aria-hidden="true">-&gt;</span>
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
      <a href="/pricing/">pricing</a>
    </footer>
  );
}

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isPricingPage = path.replace(/\/$/, '') === '/pricing';

  return (
    <div className="dhee-site-shell">
      <DheeHeader />
      <main>
        {isPricingPage ? (
          <section className="dhee-page-frame" aria-label="Dhee pricing">
            <Pricing />
          </section>
        ) : (
          <ContextBrainSection />
        )}
      </main>
      <DheeFooter />
      <Analytics />
    </div>
  );
}
