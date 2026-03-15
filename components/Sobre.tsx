import Image from 'next/image'

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="sobre-grid grid"
      style={{
        gridTemplateColumns: '1fr 1.6fr',
        background: 'var(--warm-white)',
      }}
    >
      {/* Left — foto */}
      <div
        className="sobre-photo relative overflow-hidden"
        style={{
          minHeight: '580px',
          borderRight: '1px solid var(--light-border)',
        }}
      >
        <Image
          src="/anna-sobre.jpg"
          alt="Anna Beatriz Granado"
          fill
          className="object-cover object-top"
          sizes="40vw"
        />
      </div>

      {/* Right — texto */}
      <div
        className="sobre-content flex flex-col justify-center"
        style={{ padding: '7rem 4rem' }}
      >
        <div className="section-label">Quem sou eu</div>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: 'var(--charcoal)',
            marginBottom: '2rem',
          }}
        >
          Uma dentista
          <br />movida por{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>propósito</em>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: 'var(--mid)',
            fontWeight: 300,
            marginBottom: '1.5rem',
          }}
        >
          Formada em Odontologia pelo Centro Universitário Arthur Sá Earp Neto (UNIFASE,
          Petrópolis), construí minha trajetória com dedicação à ciência e ao cuidado
          humanizado. Resido e atendo em Nova Friburgo, onde cada atendimento é pensado
          de forma individualizada.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: 'var(--mid)',
            fontWeight: 300,
            marginBottom: '2rem',
          }}
        >
          Sou mestranda em Clínica Odontológica com foco em Prótese pela Universidade
          Federal Fluminense (UFF – Nova Friburgo), especialista em Dentística pela UERJ
          e pós-graduanda em Implantodontia pelo INERO. Também sou habilitada em
          Laserterapia pelo International Academy of Lasers in Dentistry (IALD) e possuo
          equipamento próprio de baixa potência.
        </p>
        <div
          style={{
            borderLeft: '2px solid var(--gold)',
            paddingLeft: '1.5rem',
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--charcoal)',
            lineHeight: 1.6,
          }}
        >
          Meu compromisso é oferecer a cada paciente planejamento cuidadoso, estética
          de qualidade e tratamentos minimamente invasivos.
        </div>
      </div>
    </section>
  )
}
