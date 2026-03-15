const especialidades = [
  {
    icon: '✦',
    name: 'Dentística & Estética',
    desc: 'Restaurações diretas e indiretas, harmonização do sorriso e tratamentos estéticos com planejamento digital.',
  },
  {
    icon: '◈',
    name: 'Laserterapia',
    desc: 'Habilitada pelo IALD, utilizo laser de baixa potência (equipamento próprio) para procedimentos menos invasivos e mais confortáveis.',
  },
  {
    icon: '◉',
    name: 'Implantes Dentários',
    desc: 'Pós-graduanda em Implantodontia pelo INERO, com foco em reabilitação completa e planejamento criterioso.',
  },
  {
    icon: '⬡',
    name: 'Prótese & Reabilitação',
    desc: 'Mestranda com foco em Prótese pela UFF. Próteses fixas, reabilitação oral e fluxo digital integrado.',
  },
  {
    icon: '◇',
    name: 'Clareamento & Manchas',
    desc: 'Especialista no manejo de manchas dentais (incluindo HMI) e clareamento dental seguro e eficaz.',
  },
  {
    icon: '✧',
    name: 'Periodontia & Prevenção',
    desc: 'Profilaxia, terapias periodontais e educação em saúde bucal para manutenção de gengivas e dentes saudáveis.',
  },
]

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      style={{ background: 'var(--section-bg)', padding: '7rem 4rem' }}
    >
      <div className="section-label">Áreas de atuação</div>
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
        O que posso
        <br />fazer por <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>você</em>
      </h2>

      <div
        className="esp-grid mt-16 grid"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          border: '1px solid var(--light-border)',
        }}
      >
        {especialidades.map((esp, i) => (
          <div
            key={esp.name}
            className="esp-card relative overflow-hidden"
            style={{
              padding: '2.5rem 2rem',
              borderRight: (i + 1) % 3 === 0 ? 'none' : '1px solid var(--light-border)',
              cursor: 'default',
            }}
          >
            {/* Gold bottom bar — shown on hover via CSS */}
            <div
              className="gold-bar absolute bottom-0 left-0 right-0"
              style={{
                height: '2px',
                background: 'var(--gold)',
                transformOrigin: 'left',
              }}
            />

            <span className="block text-2xl" style={{ marginBottom: '1.25rem' }}>
              {esp.icon}
            </span>
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.2rem',
                fontWeight: 400,
                color: 'var(--charcoal)',
                marginBottom: '0.5rem',
              }}
            >
              {esp.name}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.78rem',
                color: 'var(--mid)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {esp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
