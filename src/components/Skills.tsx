import { SKILLS } from "../data/projects";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const CERTIFICATIONS = [
  { org: "Santander", name: "Code Girls Front-end" },
  { org: "DIO", name: "Certificação em Angular" },
  { org: "Alura", name: "Angular: aplicação web com componentes, template e CLI" },
  { org: "Alura", name: "TypeScript: orientação a objetos no Front-end" },
];

export function Skills() {
  return (
    <section className="section" id="habilidades">
      <SectionHead eyebrow="04 · Stack">
        Habilidades <span className="gradient-text">técnicas</span>
      </SectionHead>

      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <Reveal key={group.title} className="skill-card" delay={(i % 3) * 80}>
            <h3>
              <span>{group.icon}</span>
              {group.title}
            </h3>
            <div className="skill-items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="certs">
        <h3>🏅 Certificações</h3>
        <div className="cert-list">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="cert">
              <span className="cert-org">{c.org}</span>
              {c.name}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
