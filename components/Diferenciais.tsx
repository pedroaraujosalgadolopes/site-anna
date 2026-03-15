const stats = [
  { number: '5+', label: 'Anos de prática clínica' },
  { number: '3', label: 'Títulos de pós-graduação' },
  { number: 'Nova Friburgo', label: 'RJ — onde atendo e resido' },
]

const items = [
  {
    icon: '🔬',
    title: 'Formação científica contínua',
    desc: 'Mestranda ativa, integrando as pesquisas mais recentes à prática clínica diária.',
  },
  {
    icon: '💎',
    title: 'Fluxo digital integrado',
    desc: 'Planejamento moderno com recursos digitais para resultados mais precisos e previsíveis.',
  },
  {
    icon: '🫶',
    title: 'Atendimento humanizado',
    desc: 'Atenção personalizada em cada consulta, respeitando as necessidades e ansiedades do paciente.',
  },
  {
    icon: '⚡',
    title: 'Laser próprio de baixa potência',
    desc: 'Equipamento exclusivo que proporciona procedimentos mais confortáveis e com menor tempo de recuperação.',
  },
]

export default function Diferenciais() {
  return (
    <section
      className="diferenciais-section grid"
      style={{
        background: 'var(--warm-white)',
        padding: '7rem 4rem',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
      }}
    >
      {/* Left — stats */}
      <div className="flex flex-col justify-center">
        <div className="section-label">Por que escolher</div>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: 'var(--charcoal)',
            marginBottom: '1.5rem',
          }}
        >
          Diferenciais que
          <br />fazem a{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>diferença</em>
        </h2>

        <div style={{ marginTop: '2.5rem' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                marginBottom: i < stats.length - 1 ? '3rem' : 0,
                paddingBottom: i < stats.length - 1 ? '3rem' : 0,
                borderBottom:
                  i < stats.length - 1 ? '1px solid var(--light-border)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '3.5rem',
                  fontWeight: 300,
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--mid)',
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — items */}
      <div className="flex flex-col justify-center">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-6 items-start"
            style={{ marginBottom: '2.5rem' }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0 text-base"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid var(--light-border)',
                color: 'var(--gold)',
              }}
            >
              {item.icon}
            </div>
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  marginBottom: '0.25rem',
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.78rem',
                  color: 'var(--mid)',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
