import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso da animação em ms */
  delay?: number;
}

/** Faz o conteúdo surgir suavemente quando entra na tela. */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
