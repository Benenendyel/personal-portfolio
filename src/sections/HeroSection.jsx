import { useState } from "react";

// utils
import twoFrameMotion from "../utils/twoFrameMotion";

// images
import CharacterDown from "../assets/images/characterDown.png";
import CharacterDown2 from "../assets/images/characterDown2.png";

function HeroSection() {
  const [currentMotion, setCurrentMotion] = useState(CharacterDown);

  const frame = twoFrameMotion({
    firstFrame: CharacterDown,
    secondFrame: CharacterDown2,
    currentMotion,
    setCurrentMotion,
  });

  return (
    <section
      className="relative flex min-h-screen items-center justify-center"
      id="hero"
    >
      <div className="1 flex flex-col items-center justify-center text-center">
        <span className="font-mono text-2xl font-semibold tracking-widest text-nowrap text-[#646464] uppercase md:text-4xl">
          College Student
        </span>
        <span className="mt-4 text-4xl leading-none font-bold tracking-tighter text-nowrap text-white md:text-6xl lg:text-8xl">
          Ven Angel Tagaro
        </span>
        <p className="mx-auto mt-6 max-w-2xl font-mono text-lg text-wrap text-[#646464] md:text-2xl">
          I code and love thinking about what happens beneath what is shown.
        </p>
      </div>

      <a className="absolute bottom-0 inline-flex animate-bounce" href="#about">
        <img className="h-28 w-28 shrink-0 cursor-pointer" src={frame} />
      </a>
    </section>
  );
}

export default HeroSection;
