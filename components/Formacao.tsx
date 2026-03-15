const timeline = [
  {
    year: '2019–2023',
    title: 'Graduação em Odontologia',
    inst: 'Centro Universitário Arthur Sá Earp Neto — UNIFASE, Petrópolis',
    delay: 'animate-fade-up-1',
  },
  {
    year: '2023',
    title: 'Habilitação em Laserterapia',
    inst: 'International Academy of Lasers in Dentistry — IALD',
    delay: 'animate-fade-up-2',
  },
  {
    year: '2024',
    title: 'Especialização em Dentística',
    inst: 'Universidade do Estado do Rio de Janeiro — UERJ',
    delay: 'animate-fade-up-3',
  },
  {
    year: '2025',
    title: 'Especialização em Implantodontia',
    inst: 'INERO (em andamento)',
    delay: 'animate-fade-up-4',
  },
  {
    year: '2025–',
    title: 'Mestrado em Clínica Odontológica · foco em Prótese',
    inst: 'Universidade Federal Fluminense — UFF, Nova Friburgo (em andamento)',
    delay: 'animate-fade-up-5',
  },
]

export default function Formacao() {
  return (
    <section
      id="formacao"
      style={{ background: 'var(--charcoal)', padding: '7rem 4rem' }}
    >
      <div className="section-label section-label-light">Trajetória acadêmica</div>
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          fontWeight: 300,
          lineHeight: 1.2,
          color: 'var(--cream)',
          marginBottom: '1.5rem',
        }}
      >
        Formação &amp;{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Titulação</em>
      </h2>

      <div className="relative mt-16" style={{ paddingLeft: '0' }}>
        {/* Vertical line */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '7.5rem',
            width: '1px',
            background: 'rgba(165,117,115,0.3)',
          }}
        />

        {timeline.map((item) => (
          <div
            key={item.year}
            className={`grid ${item.delay}`}
            style={{
              gridTemplateColumns: '7.5rem 1px 1fr',
              gap: '0 2.5rem',
              marginBottom: '3rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-jost)',
                textAlign: 'right',
                paddingTop: '0.25rem',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                color: 'var(--gold)',
                fontWeight: 500,
              }}
            >
              {item.year}
            </div>
            <div className="flex justify-center relative" style={{ paddingTop: '0.375rem' }}>
              <span
                className="block rounded-full flex-shrink-0"
                style={{ width: '7px', height: '7px', background: 'var(--gold)' }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  color: 'var(--cream)',
                  marginBottom: '0.25rem',
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.06em',
                  fontWeight: 300,
                }}
              >
                {item.inst}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
