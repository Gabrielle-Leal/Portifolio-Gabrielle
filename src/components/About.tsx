import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const AREAS = [
  { icon: "🎨", title: "Front-end", text: "SPAs com React, Vue 3 e Angular. Design responsivo, acessível e com atenção a cada detalhe." },
  { icon: "⚙️", title: "Back-end & APIs", text: "APIs RESTful em Node.js e .NET, modelagem de dados SQL e integração entre sistemas." },
  { icon: "🤖", title: "Automação", text: "Robôs com Puppeteer, PuppeteerSharp e Playwright que capturam, processam e integram dados." },
  { icon: "📱", title: "Mobile", text: "Apps multiplataforma com React Native e Expo, com armazenamento local e notificações." },
];

export function About() {
  return (
    <section className="section" id="sobre">
      <SectionHead eyebrow="01 · Sobre mim">
        Código limpo, interfaces <span className="gradient-text">que encantam</span>
      </SectionHead>

      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            Sou formada em <strong>Análise e Desenvolvimento de Sistemas pela FATEC</strong> e atuo como Full Stack
            Developer, transitando com naturalidade entre o front-end e o back-end. Gosto de transformar problemas reais
            em produtos simples de usar, seja uma SPA responsiva, um app mobile ou um robô que roda sozinho de madrugada.
          </p>
          <p>
            Hoje, na <strong>Blueprojects</strong>, desenvolvo SPAs com Vue 3, TypeScript e TailwindCSS e construo robôs
            de automação em C# que integram tribunais, bancos de dados e serviços AWS. Também tenho explorado{" "}
            <strong>IA generativa</strong> em aplicações React, como no Planej.ai, um educador financeiro com Google
            Gemini.
          </p>
          <p>
            Valorizo <strong>Clean Code</strong>, componentização, acessibilidade, performance e testes, além do
            trabalho em times ágeis com Scrum.
          </p>
        </Reveal>

        <div className="about-cards">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} className="mini-card" delay={i * 80}>
              <div className="mini-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
