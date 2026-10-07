import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadProps {
  eyebrow: string;
  children: ReactNode;
  subtitle?: string;
}

export function SectionHead({ eyebrow, children, subtitle }: SectionHeadProps) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </Reveal>
  );
}
