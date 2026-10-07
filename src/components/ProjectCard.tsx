import type { Project } from "../data/projects";
import { CATEGORIES } from "../data/projects";
import { ArrowIcon } from "./Icons";

export const categoryLabel = (id: string) => CATEGORIES.find((c) => c.id === id)?.label ?? id;
export const coverStyle = (p: Project) => ({ background: `linear-gradient(135deg, ${p.cover[0]}, ${p.cover[1]})` });

const MAX_TAGS = 4;

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project: p, index, onOpen }: ProjectCardProps) {
  const extra = p.stack.length - MAX_TAGS;

  return (
    <button
      className={`project-card ${p.featured ? "featured" : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onOpen(p)}
    >
      <div className="p-cover" style={coverStyle(p)}>
        {p.featured && <span className="p-star">★ Destaque</span>}
        <span className="p-year">{p.year}</span>
        <span className="p-emoji">{p.emoji}</span>
        <span className="p-window" />
      </div>
      <div className="p-body">
        <span className="p-cat">{categoryLabel(p.category)}</span>
        <h3>{p.title}</h3>
        <p className="p-sub">{p.subtitle}</p>
        <p className="p-sum">{p.summary}</p>
        <div className="p-stack">
          {p.stack.slice(0, MAX_TAGS).map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
          {extra > 0 && <span className="tag">+{extra}</span>}
        </div>
        <div className="p-more">
          Ver detalhes <ArrowIcon />
        </div>
      </div>
    </button>
  );
}
