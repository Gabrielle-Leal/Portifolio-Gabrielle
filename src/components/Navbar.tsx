import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import type { Theme } from "../hooks/useTheme";
import { MenuIcon, MoonIcon, SunIcon } from "./Icons";

const LINKS = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
];
const SECTION_IDS = LINKS.map((l) => l.id);

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#inicio" className="logo">
        <span className="logo-mark">GL</span>
        <span className="logo-text">
          gabrielle<span className="accent">.dev</span>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Alternar tema">
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
        <button className="icon-btn menu-btn" onClick={() => setMenuOpen((o) => !o)} aria-label="Abrir menu">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
