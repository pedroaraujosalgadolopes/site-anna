'use client'

import { useState, FormEvent } from 'react'

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xkoqvaag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.nome,
          phone: form.telefone,
          subject: form.assunto,
          message: form.mensagem,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nome: '', telefone: '', assunto: '', mensagem: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(165,117,115,0.25)',
    padding: '0.85rem 1rem',
    fontFamily: 'var(--font-jost)',
    fontSize: '0.85rem',
    color: '#FFFFFF',
    fontWeight: 300,
    outline: 'none',
    resize: 'none' as const,
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.62rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '0.6rem',
  }

  const contactItems = [
    {
      icon: '📍',
      label: 'Localização',
      content: 'Nova Friburgo, Rio de Janeiro',
      href: null,
    },
    {
      icon: '📞',
      label: 'Telefone / WhatsApp',
      content: '(24) 98809-0016',
      href: 'https://wa.me/5524988090016',
    },
    {
      icon: '✉',
      label: 'E-mail',
      content: 'Granado1308@gmail.com',
      href: 'mailto:Granado1308@gmail.com',
    },
  ]

  const fields = [
    {
      id: 'nome',
      label: 'Seu nome',
      type: 'text',
      placeholder: 'Como prefere ser chamado(a)?',
    },
    {
      id: 'telefone',
      label: 'Telefone / WhatsApp',
      type: 'tel',
      placeholder: '(00) 00000-0000',
    },
    {
      id: 'assunto',
      label: 'Assunto',
      type: 'text',
      placeholder: 'Ex: agendamento, dúvida, orçamento...',
    },
  ]

  return (
    <section
      id="contato"
      className="grid"
      style={{
        background: 'var(--charcoal)',
        padding: '7rem 4rem',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'start',
      }}
    >
      {/* Left */}
      <div>
        <div className="section-label section-label-light">Entre em contato</div>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: '#FFFFFF',
            marginBottom: '1.5rem',
          }}
        >
          Vamos cuidar
          <br />do seu{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>sorriso</em>
        </h2>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.9,
            fontWeight: 300,
            marginTop: '1.5rem',
          }}
        >
          Atendimento em Nova Friburgo, RJ — Salud Odontologia. Entre em contato para
          agendar sua consulta ou tirar dúvidas.
        </p>

        <div style={{ marginTop: '3rem' }}>
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-5"
              style={{ marginBottom: '2rem' }}
            >
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  border: '1px solid rgba(165,117,115,0.4)',
                  color: 'var(--gold-light)',
                  fontSize: '0.9rem',
                }}
              >
                {item.icon}
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.62rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: '0.3rem',
                  }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.9rem',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontWeight: 300,
                    }}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                    }
                  >
                    {item.content}
                  </a>
                ) : (
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#FFFFFF',
                      fontWeight: 300,
                    }}
                  >
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.id as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'var(--gold-light)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(165,117,115,0.25)')}
            />
          </div>
        ))}

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={labelStyle}>Mensagem</label>
          <textarea
            rows={4}
            placeholder="Conte um pouco sobre o que precisa..."
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--gold-light)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(165,117,115,0.25)')}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          className="w-full hero-cta transition-colors duration-300"
          style={{
            padding: '1rem',
            color: 'white',
            border: 'none',
            cursor: status === 'sending' || status === 'success' ? 'default' : 'pointer',
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 500,
            fontFamily: 'var(--font-jost)',
            opacity: status === 'sending' ? 0.7 : 1,
          }}
        >
          {status === 'sending' && 'Enviando...'}
          {status === 'success' && '✓ Mensagem enviada!'}
          {status === 'error' && 'Erro — tente novamente'}
          {status === 'idle' && 'Enviar mensagem'}
        </button>

        {status === 'error' && (
          <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--gold-light)', textAlign: 'center' }}>
            Ocorreu um erro. Tente pelo WhatsApp:{' '}
            <a href="https://wa.me/5524988090016" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-light)' }}>
              (24) 98809-0016
            </a>
          </p>
        )}
      </form>
    </section>
  )
}
