import type { ReactNode } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { Reveal } from "./Reveal";

const ROLES = ["Full Stack Developer", "React · Vue · Angular", "Automação com C# e Node", "Apps com IA generativa"];

const CODE = `const dev = {
  nome: "Gabrielle Leal",
  cargo: "Full Stack Developer",
  local: "São Paulo, BR",
  front: ["React", "Vue 3", "Angular"],
  back: ["Node.js", "C# .NET", "Python"],
  cloud: ["AWS Lambda", "S3", "RDS"],
  cafe: Infinity,
  build: () => "ideias → produto",
};`;

/** Colore o snippet de código com um realce simples. */
function highlight(code: string) {
  const tokens = /("[^"]*")|\b(const)\b|\b(Infinity)\b|\b(build)\b(?=:)|\b(\w+)(?=:)|\b(dev)\b/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = tokens.exec(code))) {
    parts.push(code.slice(last, match.index));
    const cls = match[1] ? "s" : match[2] ? "k" : match[3] ? "n" : match[4] ? "f" : match[5] ? "p" : "v";
    parts.push(
      <span key={match.index} className={cls}>
        {match[0]}
      </span>
    );
    last = match.index + match[0].length;
  }
  parts.push(code.slice(last));
  return parts;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <Reveal className="badge-pill">
          <span className="pulse" /> Disponível para novos projetos
        </Reveal>

        <Reveal delay={80}>
          <h1 className="hero-title">
            Olá, eu sou
            <br />
            <span className="gradient-text">Gabrielle Leal</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero-role">
            <span className="mono">&lt;</span>
            {typed}
            <span className="caret">|</span>
            <span className="mono">/&gt;</span>
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="hero-sub">
            Full Stack Developer com mais de 3 anos criando SPAs elegantes em <strong>React, Vue e Angular</strong>,
            APIs em <strong>Node.js</strong> e robôs de automação em <strong>C#</strong> que eliminam horas de trabalho
            manual.
          </p>
        </Reveal>

        <Reveal className="hero-cta" delay={320}>
          <a href="#projetos" className="btn btn-primary">
            Ver projetos <ArrowIcon />
          </a>
          <a href="#contato" className="btn btn-ghost">
            Fale comigo
          </a>
        </Reveal>

        <Reveal className="hero-social" delay={400}>
          <a href="https://github.com/Gabrielle-Leal" target="_blank" rel="noopener" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/gabrielle-leal-leite/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:gabrielle.leal773@gmail.com" aria-label="E-mail">
            <MailIcon />
          </a>
        </Reveal>
      </div>

      <Reveal className="hero-visual" delay={200}>
        <div className="code-card">
          <div className="code-head">
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="code-file">gabrielle.tsx</span>
          </div>
          <pre className="code-body">
            <code>{highlight(CODE)}</code>
          </pre>
        </div>
        <div className="float-chip chip-1">⚛️ React 19</div>
        <div className="float-chip chip-2">🤖 +10 robôs</div>
        <div className="float-chip chip-3">✨ IA Generativa</div>
      </Reveal>

      <a href="#sobre" className="scroll-hint" aria-label="Rolar para baixo">
        <span />
      </a>
    </section>
  );
}
