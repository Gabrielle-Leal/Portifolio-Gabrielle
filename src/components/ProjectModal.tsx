import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { ArrowIcon, GithubIcon } from "./Icons";
import { categoryLabel, coverStyle } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  // Mantém o último projeto renderizado enquanto o modal anima o fechamento
  const lastProject = useRef<Project | null>(null);
  if (project) lastProject.current = project;
  const p = project ?? lastProject.current;
  const open = project !== null;

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [open, onClose]);

  return (
    <div className={`modal ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Fechar">
          ✕
        </button>
        {p && (
          <>
            <div className="modal-cover" style={coverStyle(p)}>
              <span className="p-emoji">{p.emoji}</span>
            </div>
            <div className="modal-body">
              <span className="p-cat">
                {categoryLabel(p.category)} · {p.year}
              </span>
              <h3 id="modalTitle">{p.title}</h3>
              <p className="m-sub">{p.subtitle}</p>
              {p.context ? <span className="m-ctx">{p.context}</span> : <div style={{ height: 16 }} />}
              <p className="m-desc">{p.description}</p>

              <h4>Destaques</h4>
              <ul className="m-list">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <h4>Tecnologias</h4>
              <div className="tags">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>

              {p.links.github || p.links.demo ? (
                <div className="m-links">
                  {p.links.github && (
                    <a className="btn btn-ghost" href={p.links.github} target="_blank" rel="noopener">
                      <GithubIcon /> Ver no GitHub
                    </a>
                  )}
                  {p.links.demo && (
                    <a className="btn btn-primary" href={p.links.demo} target="_blank" rel="noopener">
                      Ver online <ArrowIcon />
                    </a>
                  )}
                </div>
              ) : (
                <p className="m-private">🔒 Código privado / corporativo. Posso apresentar mais detalhes em uma conversa.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
