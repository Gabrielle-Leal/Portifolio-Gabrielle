# Portfólio · Gabrielle Leal

Portfólio pessoal de **Gabrielle Leal**, Full Stack Developer (React, Vue, Angular, Node.js, C# e automação).

🔗 **Acesse:** https://gabrielle-leal.github.io/Portifolio-Gabrielle/

## Tecnologias

- React 19 + TypeScript
- Vite
- CSS puro com design tokens (tema claro/escuro)
- Hooks customizados: tema, efeito de digitação, contadores animados, animações de entrada e scroll spy
- Deploy automático no GitHub Pages com GitHub Actions

## Estrutura

```
src/
  components/   Seções da página (Hero, Projects, ProjectModal, Skills...)
  hooks/        useTheme, useTypewriter, useCountUp, useInView, useScrollSpy
  data/         projects.ts: projetos, categorias e habilidades (tipados)
  index.css     Estilos globais
```

## Rodando localmente

```bash
npm install
npm run dev
```

Para adicionar um projeto, basta incluir um novo objeto em `src/data/projects.ts`.
