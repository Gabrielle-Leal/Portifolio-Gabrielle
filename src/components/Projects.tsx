import { useCallback, useMemo, useState } from "react";
import { CATEGORIES, PROJECTS, type CategoryId, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const countFor = (id: CategoryId) => (id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === id).length);

export function Projects() {
  const [filter, setFilter] = useState<CategoryId>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const visible = useMemo(() => {
    if (filter !== "all") return PROJECTS.filter((p) => p.category === filter);
    // Em "Todos", os destaques aparecem primeiro
    return [...PROJECTS].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [filter]);

  return (
    <section className="section" id="projetos">
      <SectionHead
        eyebrow="03 · Portfólio"
        subtitle="Do front-end com IA generativa a robôs que rodam na nuvem. Clique em um card para ver os detalhes."
      >
        Projetos em <span className="gradient-text">destaque</span>
      </SectionHead>

      <Reveal className="filters">
        <div role="tablist" style={{ display: "contents" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              className={`filter-btn ${filter === c.id ? "active" : ""}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
              <span className="count">{countFor(c.id)}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* key força a animação de entrada dos cards a cada troca de filtro */}
      <div className="projects-grid" key={filter}>
        {visible.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </section>
  );
}
