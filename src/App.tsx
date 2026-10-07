import { About } from "./components/About";
import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Background />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
