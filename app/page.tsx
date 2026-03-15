import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Formacao from '@/components/Formacao'
import Especialidades from '@/components/Especialidades'
import Diferenciais from '@/components/Diferenciais'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'

function GoldLine() {
  return (
    <div
      className="h-px mx-16"
      style={{
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }}
    />
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GoldLine />
      <Sobre />
      <GoldLine />
      <Formacao />
      <Especialidades />
      <GoldLine />
      <Diferenciais />
      <Contato />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  )
}
