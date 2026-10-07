import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: ReactNode[];
  tags?: string[];
}

const JOBS: Job[] = [
  {
    role: "Full Stack Developer",
    company: "Blueprojects",
    period: "2025 — atual",
    description: "Empresa de desenvolvimento de software para soluções corporativas.",
    bullets: [
      <>SPAs com <strong>Vue 3, TypeScript e TailwindCSS</strong>, gerenciamento de estado com Pinia.</>,
      <>Criação e consumo de APIs em <strong>Node.js</strong>, interceptação de requisições e tratamento de erros.</>,
      <>Robôs de automação em <strong>C# .NET</strong> integrando tribunais (e-SAJ, eProc, PJe), PostgreSQL/MySQL e AWS S3.</>,
      <>Função <strong>AWS Lambda</strong> para geração de documentos Word com QR Code a partir de templates no S3.</>,
      <>Services, Dependency Injection, Clean Code e Scrum.</>,
    ],
    tags: ["Vue 3", "TypeScript", "Pinia", "C#", "Node.js", "AWS"],
  },
  {
    role: "Desenvolvedora Front-end",
    company: "TotalCAD",
    period: "2022 — 2024",
    description: "Empresa especializada em soluções para gestão empresarial.",
    bullets: [
      <>Interfaces e aplicações web com <strong>React, Angular e JavaScript</strong>.</>,
      <>Componentes reutilizáveis e escaláveis seguindo boas práticas de componentização.</>,
      <>Manutenção e evolução de <strong>CRM corporativo</strong>.</>,
      <>Endpoints e integrações entre sistemas internos e externos via APIs RESTful.</>,
    ],
    tags: ["React", "Angular", "JavaScript", "REST"],
  },
  {
    role: "Análise e Desenvolvimento de Sistemas",
    company: "FATEC",
    period: "Concluído",
    description: "Faculdade de Tecnologia de São Paulo.",
  },
];

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <SectionHead eyebrow="02 · Trajetória">
        Experiência <span className="gradient-text">profissional</span>
      </SectionHead>

      <div className="timeline">
        {JOBS.map((job) => (
          <Reveal key={job.company} className="tl-item">
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-top">
                <h3>
                  {job.role} · <span className="accent">{job.company}</span>
                </h3>
                <span className="tl-date">{job.period}</span>
              </div>
              <p className="tl-desc">{job.description}</p>
              {job.bullets && (
                <ul>
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {job.tags && (
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
