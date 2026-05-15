import React from 'react';

const navItems = [
  { label: 'Dhee', href: '/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Docs', href: '/docs/' },
  { label: 'GitHub', href: 'https://github.com/Sankhya-AI/Dhee' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[78px] px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-white/95 border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-10">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/sensai-logo.png" alt="Dhee logo" className="w-11 h-11 object-contain" />
          <div className="flex flex-col">
            <span
              className="font-bold tracking-[-0.03em] text-gray-900"
              style={{
                fontSize: '1.5rem',
                lineHeight: '1.5rem',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Dhee
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6 text-[11px] font-medium text-gray-500 tracking-[0.12em] uppercase">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-black transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Sankhya-AI/Dhee"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex text-gray-500 hover:text-black px-3 py-2 border border-black/10 rounded-sm items-center gap-2"
          aria-label="Dhee GitHub"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.6 2.36 1.14 2.94.87.09-.68.35-1.14.63-1.4-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.04a9.28 9.28 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.32 2.74-1.04 2.74-1.04.56 1.41.21 2.45.11 2.71.64.71 1.02 1.62 1.02 2.73 0 3.92-2.34 4.77-4.57 5.02.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
          </svg>
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase">GitHub</span>
        </a>
        <a
          href="/pricing/"
          className="hidden sm:inline-flex text-white bg-black hover:bg-gray-900 px-4 py-2 border border-black rounded-sm items-center gap-2"
        >
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">Team $5 / seat</span>
        </a>
      </div>
    </nav>
  );
};
