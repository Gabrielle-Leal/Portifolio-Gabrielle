const WORDS = ["React", "Vue 3", "Angular", "TypeScript", "Node.js", "C# .NET", "Python", "AWS", "React Native", "Tailwind", "PostgreSQL", "Puppeteer"];

export function Marquee() {
  // A lista é duplicada para o loop da animação ficar contínuo
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...WORDS, ...WORDS].map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
    </div>
  );
}
