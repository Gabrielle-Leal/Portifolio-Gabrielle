import { useEffect, useState } from "react";
import { MailIcon } from "./Icons";
import { Reveal } from "./Reveal";

const EMAIL = "gabrielle.leal773@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard indisponível */
    }
    setCopied(true);
  };

  return (
    <section className="section contact" id="contato">
      <Reveal className="contact-card">
        <span className="eyebrow">05 · Contato</span>
        <h2>
          Vamos construir algo <span className="gradient-text">incrível juntos?</span>
        </h2>
        <p>Estou aberta a oportunidades, freelas e parcerias. Me chama!</p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            <MailIcon /> {EMAIL}
          </a>
          <button className="btn btn-ghost" onClick={copyEmail}>
            Copiar e-mail
          </button>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/gabrielle-leal-leite/" target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <a href="https://github.com/Gabrielle-Leal" target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </div>
      </Reveal>

      <div className={`toast ${copied ? "show" : ""}`} role="status">
        E-mail copiado! ✨
      </div>
    </section>
  );
}
