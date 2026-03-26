import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GridLines } from './components/GridLines';
import { Features } from './components/Features';
import { RibbonBackground } from './components/RibbonBackground';
import { MemoryStack } from './components/MemoryStack';
import { Integrations } from './components/Integrations';
import { Dashboard } from './components/Dashboard';
import { CTA } from './components/CTA';
import { Waitlist } from './components/Waitlist';

export default function App() {
  return (
    <div className="page-shell">
      <div className="ribbon-layer opacity-95">
        <RibbonBackground />
      </div>

      <GridLines />

      <div className="relative z-10 flex flex-col">
        <Navbar />

        <main className="relative">
          <Hero />

          <section id="capabilities" className="bg-white/92 border-t border-black/5 py-20">
            <Features />
          </section>

          <section id="loop" className="bg-white/94 border-t border-black/5 py-20">
            <Dashboard />
          </section>

          <section id="architecture" className="bg-[#fdfbf9] border-t border-black/5 py-20">
            <MemoryStack />
          </section>

          <section id="interfaces" className="bg-white border-t border-black/5 py-20">
            <Integrations />
          </section>

          <section id="hyperagents" className="bg-[#fffdfa] border-t border-black/5 py-20">
            <Waitlist />
          </section>

          <section id="get-started" className="bg-[#fdf8f5] py-0">
            <CTA />
          </section>
        </main>

        <footer className="py-10 px-6 text-center text-xs text-gray-400 bg-white/85">
          <div className="max-w-6xl mx-auto border-t border-black/5 pt-6">
            <p>
              &copy; 2026 Dhee - <a
                href="https://www.sankhyaailabs.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-700 underline underline-offset-2"
              >
                A Sankhya AI Labs product.
              </a>
            </p>
          </div>
        </footer>
      </div>
      <Analytics />
    </div>
  );
}
