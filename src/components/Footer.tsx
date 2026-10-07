export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gabrielle Leal · Feito com React, TypeScript e muito ☕</p>
      <a href="#inicio" className="to-top" aria-label="Voltar ao topo">
        ↑
      </a>
    </footer>
  );
}
