import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/projects";

const STATS = [
  { value: 3, label: "+ anos de experiência" },
  { value: PROJECTS.length, label: "projetos no portfólio" },
  { value: 10, label: "+ robôs de automação" },
  { value: 4, label: "certificações" },
];

function Stat({ value, label, start }: { value: number; label: string; start: boolean }) {
  const count = useCountUp(value, start);
  return (
    <div className="stat">
      <strong>{count}</strong>
      <span>{label}</span>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLElement>(0.4);
  return (
    <section className={`stats reveal ${inView ? "visible" : ""}`} ref={ref}>
      {STATS.map((s) => (
        <Stat key={s.label} {...s} start={inView} />
      ))}
    </section>
  );
}
