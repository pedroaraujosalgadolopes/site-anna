'use client'

import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Voltar ao topo"
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        zIndex: 999,
        width: '2.8rem',
        height: '2.8rem',
        background: 'var(--charcoal)',
        border: '1px solid rgba(165,117,115,0.35)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.2s ease',
        boxShadow: '0 4px 14px rgba(115,49,38,0.25)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#8a3d30')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--charcoal)')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '1rem', height: '1rem' }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
