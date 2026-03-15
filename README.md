# Anna Beatriz Granado — Site Profissional

Site profissional para a Cirurgiã-Dentista **Anna Beatriz Granado** (CRO/RJ 55333), desenvolvido com Next.js, Tailwind CSS e TypeScript.

## Tecnologias

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- Deploy na **Vercel**

## Rodando localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

### Opção 1 — Via CLI

```bash
npm i -g vercel
vercel
```

### Opção 2 — Via GitHub (recomendado)

1. Faça push do projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em **"Add New Project"**
4. Importe o repositório
5. A Vercel detecta Next.js automaticamente — clique em **Deploy**

### Configurando domínio próprio na Vercel

1. No painel da Vercel, acesse o projeto → **Settings → Domains**
2. Adicione o domínio (ex: `annabeatrizgranado.com.br`)
3. Configure o DNS no seu registrador apontando para a Vercel
4. A Vercel emite o certificado SSL automaticamente

## Adicionando a foto de perfil

No arquivo `components/Hero.tsx`, localize o comentário:

```tsx
{/* TODO: adicionar foto — colocar <Image> aqui quando tiver a foto de perfil */}
```

Substitua pelo componente de imagem:

```tsx
import Image from 'next/image'

// Dentro do Hero right:
<div className="relative w-full aspect-[3/4] mb-8 overflow-hidden">
  <Image
    src="/foto-anna.jpg"  // coloque a foto em /public/foto-anna.jpg
    alt="Anna Beatriz Granado — Cirurgiã-Dentista"
    fill
    className="object-cover object-top"
    priority
  />
</div>
```

Coloque a foto em `public/foto-anna.jpg`.

## Estrutura do projeto

```
anna-beatriz-site/
├── app/
│   ├── layout.tsx      # Metadata, fontes, SEO
│   ├── page.tsx        # Página principal
│   └── globals.css     # Variáveis CSS e animações
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Sobre.tsx
│   ├── Formacao.tsx
│   ├── Especialidades.tsx
│   ├── Diferenciais.tsx
│   ├── Contato.tsx
│   └── Footer.tsx
├── public/             # Imagens estáticas
├── next.config.ts
└── vercel.json
```

## Contato da profissional

- **WhatsApp:** (24) 98809-0016
- **E-mail:** Granado1308@gmail.com
- **Local:** Nova Friburgo, RJ — Salud Odontologia
- **CRO/RJ:** 55333
