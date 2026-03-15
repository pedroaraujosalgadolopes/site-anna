import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anna Beatriz Granado | Cirurgiã-Dentista — Nova Friburgo, RJ',
  description:
    'Cirurgiã-Dentista especialista em Dentística, Laserterapia e Implantodontia. Atendimento em Nova Friburgo, RJ. CRO/RJ 55333.',
  keywords: [
    'dentista Nova Friburgo',
    'cirurgiã dentista',
    'implantes dentários',
    'dentística estética',
    'laserterapia odontológica',
    'Anna Beatriz Granado',
    'CRO RJ 55333',
  ],
  authors: [{ name: 'Anna Beatriz Granado' }],
  openGraph: {
    title: 'Anna Beatriz Granado | Cirurgiã-Dentista',
    description:
      'Especialista em Dentística, Laserterapia e Implantodontia. Atendimento humanizado em Nova Friburgo, RJ.',
    url: 'https://annabeatrizgranado.com.br',
    siteName: 'Anna Beatriz Granado — Cirurgiã-Dentista',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Beatriz Granado | Cirurgiã-Dentista',
    description:
      'Especialista em Dentística, Laserterapia e Implantodontia. Nova Friburgo, RJ.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body
        className="overflow-x-hidden"
        style={{
          fontFamily: 'var(--font-jost), sans-serif',
          background: 'var(--warm-white)',
          color: 'var(--charcoal)',
        }}
      >
        {children}
      </body>
    </html>
  )
}
