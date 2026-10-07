export type CategoryId = "all" | "web" | "mobile" | "freela" | "automacao" | "backend";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<CategoryId, "all">;
  featured?: boolean;
  year: string;
  emoji: string;
  /** Gradiente da capa: [cor inicial, cor final] */
  cover: [string, string];
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { github?: string; demo?: string };
  context?: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web & IA" },
  { id: "mobile", label: "Mobile" },
  { id: "freela", label: "Sites para clientes" },
  { id: "automacao", label: "Automação" },
  { id: "backend", label: "Back-end & Cloud" },
];

export const PROJECTS: Project[] = [
  {
    id: "planejai",
    title: "Planej.ai",
    subtitle: "Educador financeiro com IA generativa",
    category: "web",
    featured: true,
    year: "2026",
    emoji: "🐷",
    cover: ["#7c3aed", "#ec4899"],
    summary:
      "Aplicação de planejamento financeiro que calcula a viabilidade de uma meta e usa o Google Gemini para gerar um diagnóstico personalizado.",
    description:
      "O usuário preenche um formulário multi-step (renda, custos fixos, dívidas, meta, custo e prazo) e recebe um diagnóstico gerado pela IA do Google Gemini, com sugestões práticas, ideias de renda extra e plano de investimento. Tudo roda no navegador, sem backend.",
    highlights: [
      "Formulário multi-step com 6 passos, máscara de moeda pt-BR e barra de progresso",
      "Diagnóstico por IA: viabilidade, sugestões, renda extra e investimentos",
      "Chat com o Educador Financeiro com contexto da simulação e histórico persistido",
      "Histórico de simulações com badges de status (viável / ajuste / inviável)",
      "Skeleton loading, tratamento de erros e prevenção de chamadas duplicadas",
      "Tema claro/escuro com design tokens no Tailwind v4",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind v4", "Google Gemini", "LocalStorage"],
    links: { github: "https://github.com/Gabrielle-Leal/planejamento-financeiro-ai" },
    context: "Bootcamp Santander 2026 · AI React Front-end",
  },
  {
    id: "educador-gamificado",
    title: "Educador Financeiro Gamificado",
    subtitle: "Metas, desafios e conquistas para poupar",
    category: "web",
    featured: true,
    year: "2026",
    emoji: "🏆",
    cover: ["#0ea5e9", "#22c55e"],
    summary:
      "Protótipo que transforma educação financeira em jogo: metas, desafios semanais, badges e XP, com dashboard de gastos.",
    description:
      "Desafio criativo do bootcamp Santander: um app de finanças pessoais com onboarding, dashboard de despesas por categoria, metas de economia, dicas e perfil com conquistas. Estado global organizado em stores com Zustand.",
    highlights: [
      "Onboarding e dashboard com gráficos de gastos por categoria (Recharts)",
      "Metas financeiras com progresso e desafios semanais (ex.: 'Sem iFood Extra')",
      "Sistema de badges e XP com celebração animada (canvas-confetti)",
      "Animações fluidas com Framer Motion",
      "Arquitetura com stores separadas (usuário, metas, despesas, dicas)",
    ],
    stack: ["React", "TypeScript", "Zustand", "Framer Motion", "Recharts", "Tailwind"],
    links: { github: "https://github.com/Gabrielle-Leal/prototipando-o-seu-educador-financeiro-inteligente" },
    context: "Bootcamp Santander 2026 · Desafio Criativo",
  },
  {
    id: "kitchen-companion",
    title: "Kitchen Companion",
    subtitle: "Meu livro de receitas com Chef IA",
    category: "mobile",
    featured: true,
    year: "2026",
    emoji: "👩‍🍳",
    cover: ["#f97316", "#facc15"],
    summary:
      "App multiplataforma de receitas com biblioteca por categorias, modo de cozimento, Chef IA e gamificação.",
    description:
      "Livro de receitas para web e mobile (Expo + React Native Web). Organiza receitas em pastas por categoria, tem um modo passo a passo para cozinhar, preferências de dieta, conversão de medidas, ranking e missões diárias.",
    highlights: [
      "Chef IA para sugerir receitas",
      "Modo de cozimento passo a passo",
      "Biblioteca com pastas por categoria e favoritos",
      "Gamificação: missões diárias e ranking",
      "Preferências de dieta, unidades de medida e notificações",
      "Dark mode e testes com Vitest",
    ],
    stack: ["React Native", "Expo", "TypeScript", "React Query", "Zod", "Tailwind", "Vitest"],
    links: { github: "https://github.com/Gabrielle-Leal/app-meu-livro-de-receitas" },
  },
  {
    id: "calorias",
    title: "Meu App Saudável",
    subtitle: "Contador de calorias",
    category: "mobile",
    year: "2026",
    emoji: "🥗",
    cover: ["#10b981", "#06b6d4"],
    summary:
      "App mobile para registrar refeições e acompanhar a ingestão calórica, com banco local SQLite e câmera.",
    description:
      "Aplicativo Expo com login e cadastro, registro de alimentos por refeição, base de alimentos local, captura pela câmera, histórico e perfil do usuário. Funciona também na web com uma camada de banco específica.",
    highlights: [
      "Autenticação (login e cadastro)",
      "Registro de refeições com base de alimentos",
      "Captura de alimentos pela câmera",
      "Histórico e perfil com metas",
      "Persistência offline com expo-sqlite (e adaptador web)",
    ],
    stack: ["React Native", "Expo", "TypeScript", "SQLite"],
    links: { github: "https://github.com/Gabrielle-Leal/app-contagem-de-calorias" },
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    subtitle: "Painel administrativo em Angular 21",
    category: "web",
    year: "2026",
    emoji: "📊",
    cover: ["#dc2626", "#7c3aed"],
    summary:
      "Painel de gestão de usuários com autenticação, guards, interceptors HTTP e API mockada.",
    description:
      "Projeto Angular com arquitetura em camadas (core / features / shared): login, rota protegida por guard, interceptors para autenticação, loading global e mock de API, e dashboard de usuários consumindo services injetados.",
    highlights: [
      "Arquitetura core / features / shared",
      "AuthGuard e AuthInterceptor com token",
      "Loading global via interceptor + service",
      "Mock API interceptor para desenvolvimento sem backend",
      "Standalone components, Services e Dependency Injection",
    ],
    stack: ["Angular 21", "TypeScript", "RxJS", "Standalone Components"],
    links: {},
  },
  {
    id: "alessandra",
    title: "Alessandra Leal · Psicóloga",
    subtitle: "Site institucional",
    category: "freela",
    featured: true,
    year: "2026",
    emoji: "🌿",
    cover: ["#a78bfa", "#f0abfc"],
    summary:
      "Site institucional para psicóloga, com tipografia elegante e foco em acolhimento e conversão.",
    description:
      "Landing page para consultório de psicologia: apresentação da profissional, abordagens, serviços e contato. Visual sereno com Cormorant Garamond + Manrope e componentes acessíveis com Radix UI.",
    highlights: [
      "Layout responsivo e acolhedor, pensado para conversão",
      "Seções de apresentação, serviços e contato",
      "SEO com meta tags por rota",
      "Componentes acessíveis (Radix UI / shadcn)",
    ],
    stack: ["React", "TanStack Start", "TypeScript", "Tailwind", "Radix UI"],
    links: {},
    context: "Projeto freelance",
  },
  {
    id: "pemap",
    title: "Juan Queiroz · PEMAP",
    subtitle: "Site de personal trainer",
    category: "freela",
    year: "2026",
    emoji: "💪",
    cover: ["#111827", "#f59e0b"],
    summary:
      "Site para personal trainer especializado em grupos especiais, com identidade visual forte em preto e dourado.",
    description:
      "Landing page para o PEMAP, com hero impactante, apresentação do profissional, metodologia, públicos atendidos e chamadas para contato, respeitando a identidade visual da marca.",
    highlights: [
      "Hero com foto profissional e marca",
      "Seções de metodologia e grupos especiais",
      "CTAs para agendamento",
      "Totalmente responsivo",
    ],
    stack: ["React", "TanStack Start", "TypeScript", "Tailwind", "Radix UI"],
    links: {},
    context: "Projeto freelance",
  },
  {
    id: "publicacoes-vue",
    title: "Painel de Publicações",
    subtitle: "Tela de detalhes em Vue 3",
    category: "web",
    year: "2026",
    emoji: "📰",
    cover: ["#16a34a", "#0d9488"],
    summary:
      "Tela corporativa para tratamento de publicações jurídicas: detalhes do processo, prazos relacionados e ações.",
    description:
      "Interface em Vue 3 com componentes desacoplados comunicando por props e eventos: detalhes do processo, tabela de publicações com prazo, outras publicações e painel de ações (marcar como lida, vincular manualmente, enfileirar cadastro).",
    highlights: [
      "Componentização: ProcessDetails, ActionsPanel, RelatedPublicationsTable",
      "Comunicação por eventos (toggle-read, manual-link, queue-registration)",
      "Fluxo de leitura sem prazo com confirmação",
    ],
    stack: ["Vue 3", "TypeScript", "Composition API"],
    links: {},
    context: "Blueprojects",
  },
  {
    id: "robos-tribunais",
    title: "Robôs de Tribunais",
    subtitle: "Integração e-SAJ, eProc e PJe",
    category: "automacao",
    featured: true,
    year: "2025–2026",
    emoji: "⚖️",
    cover: ["#1e3a8a", "#6366f1"],
    summary:
      "Família de robôs em C# que acessam tribunais, baixam documentos, registram eventos e integram com o sistema jurídico do cliente.",
    description:
      "Conjunto de robôs .NET para um escritório jurídico: captura de documentos e eventos nos portais e-SAJ e eProc, integração de dados com o ERP jurídico, upload de arquivos para AWS S3 e controle de processamento em PostgreSQL (AWS RDS).",
    highlights: [
      "Automação web com PuppeteerSharp e perfil dedicado do Chrome",
      "Download e validação de PDFs, com backup de arquivos incompletos",
      "Upload de documentos para AWS S3",
      "Controle de processos processados e logs estruturados",
      "Robô de atualização de processos a partir de planilhas CSV/Excel",
    ],
    stack: ["C#", ".NET", "PuppeteerSharp", "PostgreSQL", "ClosedXML", "AWS S3"],
    links: {},
    context: "Blueprojects",
  },
  {
    id: "qrcode-lambda",
    title: "Lambda QR Code Petição",
    subtitle: "Geração de documentos na AWS",
    category: "backend",
    featured: true,
    year: "2026",
    emoji: "☁️",
    cover: ["#f59e0b", "#ef4444"],
    summary:
      "Função AWS Lambda em .NET 8 que gera petições Word a partir de templates no S3, com dados do MySQL e QR Code.",
    description:
      "API ASP.NET Core rodando em AWS Lambda (com entry point local via Kestrel). Baixa um modelo .docx do S3, preenche com informações do banco MySQL, adiciona QR Code e rodapé e devolve o documento pronto. Infra declarada com AWS SAM.",
    highlights: [
      "ASP.NET Core em AWS Lambda + API Gateway",
      "Manipulação de documentos .docx (OpenXML)",
      "Templates versionados no Amazon S3",
      "Infraestrutura como código com AWS SAM",
      "Configuração via IConfiguration (JSON + variáveis de ambiente)",
    ],
    stack: ["C#", ".NET 8", "AWS Lambda", "S3", "MySQL", "AWS SAM"],
    links: {},
    context: "Blueprojects · trabalho em equipe",
  },
  {
    id: "jusbr-bot",
    title: "JUS.BR Bot",
    subtitle: "Captura automática de ofícios",
    category: "automacao",
    year: "2026",
    emoji: "📑",
    cover: ["#0f766e", "#84cc16"],
    summary:
      "Robô Node.js que consulta ofícios em portal jurídico bancário, baixa PDFs e registra tudo em uma API externa.",
    description:
      "Script em duas fases: a primeira coleta a lista de ofícios; a segunda abre cada detalhe, captura os dados completos, baixa o PDF e registra na API do sistema jurídico, salvando payload e resposta para auditoria. Gerencia o Chrome em modo debug automaticamente.",
    highlights: [
      "Execução em duas fases independentes e retomáveis",
      "Gerenciamento automático do Chrome (debug port) + login",
      "Download de PDFs e registro em API com trilha de auditoria",
      "Execução simplificada no Windows via .bat",
    ],
    stack: ["Node.js", "Puppeteer", "REST API", "Windows"],
    links: {},
    context: "Blueprojects",
  },
  {
    id: "monitor-robos",
    title: "Monitor de Robôs",
    subtitle: "Validação de execução + alertas",
    category: "automacao",
    year: "2026",
    emoji: "🚨",
    cover: ["#be123c", "#f97316"],
    summary:
      "Ferramenta em C# que verifica no banco se cada robô executou no horário esperado e dispara alertas.",
    description:
      "Aplicação console .NET que consulta o MySQL, compara as últimas execuções de cada robô com a janela esperada (tolerância configurável) e gera notificações quando algo atrasa ou falha.",
    highlights: [
      "Tolerância de atraso configurável via appsettings.json",
      "Consultas diretas ao MySQL",
      "Relatório claro no console e alertas",
    ],
    stack: ["C#", ".NET", "MySQL"],
    links: {},
    context: "Blueprojects",
  },
  {
    id: "shopee-bot",
    title: "Robô de Ofertas Afiliado",
    subtitle: "Shopee · Amazon · Mercado Livre",
    category: "automacao",
    year: "2026",
    emoji: "🛍️",
    cover: ["#ea580c", "#db2777"],
    summary:
      "Robô que coleta ofertas de programas de afiliados e as divulga automaticamente via WhatsApp.",
    description:
      "API em FastAPI com múltiplas fontes de ofertas, captura visual dos painéis de afiliados com Playwright enquanto as APIs oficiais não são liberadas, persistência em PostgreSQL e serviço de envio por WhatsApp, tudo orquestrado com Docker Compose.",
    highlights: [
      "Arquitetura multi-fonte (Shopee, Amazon, Mercado Livre)",
      "Captura visual com Playwright usando a sessão do usuário",
      "OAuth do Mercado Livre",
      "Envio de ofertas via serviço de WhatsApp",
      "Docker Compose e testes com pytest",
    ],
    stack: ["Python", "FastAPI", "Playwright", "PostgreSQL", "SQLAlchemy", "Docker"],
    links: {},
    context: "Projeto pessoal",
  },
  {
    id: "target-desafio",
    title: "Desafio Target Sistemas",
    subtitle: "Regras de negócio em C# com testes",
    category: "backend",
    year: "2026",
    emoji: "🧮",
    cover: ["#4f46e5", "#06b6d4"],
    summary:
      "Três exercícios em C# / .NET 10 (comissões, estoque e juros) com regras isoladas e testes xUnit.",
    description:
      "Solução de desafio técnico com regras de negócio em classes próprias, separadas da camada de console, permitindo testes isolados. Valores monetários com decimal para evitar erros de arredondamento.",
    highlights: [
      "Comissões por vendedor a partir de JSON (faixas 0%, 1% e 5%)",
      "Controle de estoque com movimentações, validações e histórico",
      "Cálculo de juros simples por atraso (2,5% ao dia)",
      "Testes unitários com xUnit",
    ],
    stack: ["C#", ".NET 10", "xUnit"],
    links: { github: "https://github.com/Gabrielle-Leal/desafio-dev-Target-Sistemas" },
    context: "Desafio técnico",
  },
];

export const SKILLS: SkillGroup[] = [
  { title: "Front-end", icon: "🎨", items: ["React", "Vue 3", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Pinia", "Zustand"] },
  { title: "Back-end & APIs", icon: "⚙️", items: ["Node.js", "C# / .NET", "ASP.NET Core", "Python", "FastAPI", "APIs RESTful"] },
  { title: "Mobile", icon: "📱", items: ["React Native", "Expo", "SQLite", "AsyncStorage"] },
  { title: "Dados & Cloud", icon: "☁️", items: ["SQL", "PostgreSQL", "MySQL", "AWS Lambda", "AWS S3", "AWS RDS", "Docker"] },
  { title: "Automação", icon: "🤖", items: ["PuppeteerSharp", "Puppeteer", "Playwright", "Web scraping", "ETL de planilhas"] },
  { title: "Qualidade & Ferramentas", icon: "🧪", items: ["Vitest", "Testing Library", "xUnit", "Git", "GitHub", "Jira", "Figma", "Scrum"] },
];
