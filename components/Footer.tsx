export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between"
      style={{ background: 'var(--footer-dark)', padding: '2rem 4rem' }}
    >
      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '0.9rem',
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        Anna Beatriz Granado
      </div>
      <div
        style={{
          fontFamily: 'var(--font-jost)',
          fontSize: '0.62rem',
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.2)',
        }}
      >
        © 2026 · Todos os direitos reservados
      </div>
      <div
        style={{
          fontFamily: 'var(--font-jost)',
          fontSize: '0.62rem',
          letterSpacing: '0.15em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
        }}
      >
        CRO/RJ 55333
      </div>
    </footer>
  )
}
