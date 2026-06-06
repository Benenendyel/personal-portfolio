// components
import NavigationBar from "./components/NavigationBar";

// sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ConnectionsSection from "./sections/ConnectionsSection";

// MAIN BG
import HeroBG from "./assets/images/heroBG.png";

function App() {
  return (
    <div className="relative min-h-screen scrollbar-thin bg-[#282828] px-10">
      <NavigationBar />
      <main className="relative z-10">
        {/* THIS IS THE SKULL BG WHILE SCROLLING THROUGH THE CONTETNS */}
        <img
          className="pointer-events-none fixed top-1/2 left-1/2 shrink-0 -translate-x-1/2 -translate-y-1/2 transform opacity-2 md:h-200 md:w-200"
          src={HeroBG}
        />

        {/* THIS IS THE MAIN CONTENTS  */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ConnectionsSection />
      </main>
    </div>
  );
}

export default App;
