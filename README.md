# Vitor Tenorio — Portfolio

Portfólio pessoal desenvolvido com **Angular 17** e **Tailwind CSS**, com design dark-tech inspirado na identidade de desenvolvedor full stack e gerente de projetos.

## Stack

- **Framework**: Angular 17 (standalone components, signals)
- **Estilo**: Tailwind CSS v3 com design system customizado
- **Tema**: Dark mode como padrão, com toggle para light mode
- **i18n**: Internacionalização PT 🇧🇷 / EN 🇺🇸 via `TranslationService`
- **SSR**: Angular Universal (`server.ts`)
- **Deploy**: GitHub Pages

## Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com code snippet decorativo interativo |
| **About** | Bio, foto e estatísticas de carreira |
| **Skills** | Habilidades por categoria (Frontend, Backend, DevOps, Tools) |
| **Projects** | Projetos em destaque com links para demo/código |
| **Education** | Formações acadêmicas, certificações e idiomas |
| **Experience** | Timeline de experiência profissional |
| **Cases** | Casos reais de problemas resolvidos (desafio → solução → impacto) |

## Estrutura

```
src/
├── app/
│   ├── components/
│   │   ├── header/        # Navbar com scroll detection e active section
│   │   ├── hero/          # Seção principal com code snippet
│   │   ├── about/         # Bio e estatísticas
│   │   ├── skills/        # Grid de tecnologias por categoria
│   │   ├── projects/      # Cards de projetos
│   │   ├── education/     # Formações, certificações e idiomas
│   │   ├── professions/   # Timeline de experiência
│   │   ├── problems/      # Cases: problema → solução → impacto
│   │   └── footer/        # Rodapé com links
│   ├── services/
│   │   ├── portfolio.service.ts    # Dados centralizados (skills, projetos, etc.)
│   │   ├── translation.service.ts  # i18n PT/EN com Angular signals
│   │   └── theme.service.ts        # Toggle dark/light mode
│   └── models/            # Interfaces TypeScript
├── assets/
│   ├── cv.pdf
│   ├── icons/             # SVGs das tecnologias
│   └── images/            # Imagens dos projetos
└── styles.css             # Design system global
```

## Design System

- **Primária**: Cyan neon (`#06b6d4`)
- **Secundária**: Laranja (`#f97316`)
- **Background**: Navy deep (`#0a0f1e`)
- **Tipografia**: Inter (corpo), Poppins (títulos), Fira Code (mono/código)
- **Efeitos**: Neon glow, grid pattern, glassmorphism, float animation

## Desenvolvimento local

```bash
npm install
ng serve
```

Acesse: `http://localhost:4200`

## Build

```bash
ng build --configuration production
```

## Contato

- **GitHub**: [VitorTenorio14](https://github.com/VitorTenorio14)
- **LinkedIn**: [vitor-tenorio](https://www.linkedin.com/in/vitor-tenorio-7baba5276/)
- **Email**: vitortenorio14@hotmail.com
- **WhatsApp**: +55 (61) 99666-7222
