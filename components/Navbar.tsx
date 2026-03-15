'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between animate-fade-down"
      style={{
        padding: '1.4rem 4rem',
        background: 'rgba(253,250,244,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--light-border)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          color: 'var(--charcoal)',
          textTransform: 'uppercase',
          fontSize: '1.15rem',
          fontWeight: 400,
          letterSpacing: '0.12em',
        }}
      >
        Anna Beatriz <span style={{ color: 'var(--gold)' }}>Granado</span>
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none" style={{ margin: 0, padding: 0 }}>
        {[
          { label: 'Sobre', href: '#sobre' },
          { label: 'Formação', href: '#formacao' },
          { label: 'Especialidades', href: '#especialidades' },
          { label: 'Contato', href: '#contato' },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              style={{
                fontFamily: 'var(--font-jost)',
                color: 'var(--mid)',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontWeight: 400,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mid)')}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span
          className="block"
          style={{
            width: '1.5rem',
            height: '1px',
            background: 'var(--charcoal)',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
          }}
        />
        <span
          className="block"
          style={{
            width: '1.5rem',
            height: '1px',
            background: 'var(--charcoal)',
            transition: 'all 0.3s',
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          className="block"
          style={{
            width: '1.5rem',
            height: '1px',
            background: 'var(--charcoal)',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
          }}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden"
          style={{
            background: 'rgba(253,250,244,0.98)',
            borderBottom: '1px solid var(--light-border)',
            padding: '1.5rem 2rem',
          }}
        >
          <ul className="flex flex-col gap-4 list-none" style={{ margin: 0, padding: 0 }}>
            {[
              { label: 'Sobre', href: '#sobre' },
              { label: 'Formação', href: '#formacao' },
              { label: 'Especialidades', href: '#especialidades' },
              { label: 'Contato', href: '#contato' },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-jost)',
                    color: 'var(--mid)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontWeight: 400,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
