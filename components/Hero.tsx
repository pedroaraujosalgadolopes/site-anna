import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-section min-h-screen grid relative overflow-hidden"
      style={{ gridTemplateColumns: '1fr 1fr' }}
    >
      {/* Left — dark burgundy */}
      <div
        className="flex flex-col justify-end relative animate-fade-in-delay"
        style={{ padding: '8rem 4rem 6rem' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, #8a3d30 0%, #5a1f18 100%)' }}
        />
        <div className="relative z-10">
          <div
            className="flex items-center gap-3 mb-7"
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold-light)',
            }}
          >
            <span className="block w-8 h-px" style={{ background: 'var(--gold-light)' }} />
            Cirurgiã-Dentista
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '1.25rem',
            }}
          >
            Anna{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Beatriz</em>
            <br />Granado
          </h1>

          <p
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}
          >
            Especialista em Dentística · Laserterapia · Implantodontia
          </p>

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.1rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            &ldquo;Cuidar do sorriso de cada paciente é uma responsabilidade que levo
            com ciência, ética e atenção genuína.&rdquo;
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contato"
              className="hero-cta inline-block"
              style={{
                padding: '0.95rem 2.2rem',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 500,
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'var(--font-jost)',
              }}
            >
              Agendar consulta
            </a>

            <div
              className="inline-flex items-center gap-2"
              style={{
                border: '1px solid rgba(165,117,115,0.5)',
                padding: '0.5rem 1.1rem',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                borderRadius: '2px',
              }}
            >
              ⬡ &nbsp;CRO/RJ: 55333
            </div>
          </div>
        </div>

      </div>

      {/* Right — foto consultório */}
      <div className="hero-photo-panel relative animate-fade-in-delay2 overflow-hidden">
        <Image
          src="/anna-hero.jpg"
          alt="Dra. Anna Beatriz Granado — Cirurgiã-Dentista no consultório"
          fill
          priority
          className="object-cover object-top"
          sizes="50vw"
        />
        {/* Overlay sutil nas bordas para fundir com o fundo */}
        <div
          className="absolute inset-y-0 left-0 w-8"
          style={{
            background: 'linear-gradient(to right, rgba(90,31,24,0.3), transparent)',
          }}
        />
      </div>
    </section>
  )
}
