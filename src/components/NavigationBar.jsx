import { useState } from "react";

// utils
import scrollTo from "../utils/smoothScroll";

// images
import logo from "../assets/images/portfolio-logo.png";
import hamburgerIcon from "../assets/images/burgerIcon.png";
import hamburgerIconOpened from "../assets/images/burgerIconOpened.png";

function NavigationBar({ navbarState, setNavbarState }) {
  const [isDropped, setDroppedStatus] = useState(false);
  const sections = ["About", "Projects", "Skills", "Connections"];

  return (
    <nav
      className={`${navbarState === true ? "flex" : "hidden"} fixed top-0 left-0 z-50 box-border w-full items-center justify-between gap-10 border-b-2 border-b-[#c5f022] bg-[#646464]/80 px-5 py-5 text-blue-100 backdrop-blur-md md:px-40 lg:px-80`}
    >
      {/*  THIS IS THE LOGO SIDE */}
      <a
        className="shrink-0 cursor-pointer"
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("hero");
        }}
      >
        <img className="h-13 w-13 object-cover" src={logo} />
      </a>
      {/* DESKTOP ACTUAL NAVIGATION BUTTONS */}
      <ul className="hidden flex-row items-center justify-between gap-8 md:flex">
        {sections.map((section) => (
          <li key={section}>
            <a
              className="cursor-pointer font-semibold transition-colors duration-200 hover:text-[#c5f022]"
              href={`#${section.toLowerCase()}`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="relative h-10 w-10 cursor-pointer md:hidden"
        onClick={() => setDroppedStatus(!isDropped)}
      >
        <img
          className={`absolute inset-0 h-10 w-10 shrink-0 transition-all duration-300 ease-in-out ${isDropped ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
          src={hamburgerIconOpened}
        />
        <img
          className={`absolute inset-0 m-auto h-8 w-8 shrink-0 transition-all duration-300 ease-in-out ${isDropped ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
          src={hamburgerIcon}
        />
      </button>

      {isDropped && (
        <ul
          className={`absolute top-full left-0 z-50 w-full border-t-2 border-b-2 border-[#c5f022] bg-[#252728]/95 backdrop-blur-md`}
        >
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="block cursor-pointer px-3 py-5 font-semibold hover:bg-[#646464] hover:text-[#c5f022]"
                onClick={(e) => {
                  e.preventDefault();
                  setDroppedStatus(!isDropped);
                  scrollTo(section.toLowerCase());
                }}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavigationBar;
