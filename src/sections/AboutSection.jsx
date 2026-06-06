function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-2 md:px-6">
        <div className="flex flex-col">
          <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            About
          </span>
          <span className="text-muted-foreground mt-2 font-mono text-sm tracking-widest text-[#646464] uppercase">
            Who I am
          </span>
        </div>

        {/* <hr className="border-border my-5 border-t-2 text-[#c5f022]" /> */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <p className="text-muted-foreground leading- text-md line-clamp-2 flex items-center text-justify text-white md:text-lg">
            2nd year Bachelor of Science in Information Technology student at
            New Era University with a strong foundation in Java and
            object-oriented programming. Has working knowledge of JavaScript and
            has explored Spring Boot and REST API development through personal
            practice projects. Familiar with HTML, CSS, and ReactJS. A fast
            learner eager to contribute and grow in a real-world development
            environment.
          </p>

          <ul className="grid grid-cols-2 gap-4">
            <li className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#c5f022] p-6 text-center text-white">
              <span className="text-3xl font-bold">20+</span>
              <span className="text-muted-foreground text-sm">
                Tools & Languages
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#c5f022] p-6 text-center text-white">
              <span className="text-3xl font-bold">3+</span>
              <span className="text-muted-foreground text-sm">
                Projects Built
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#c5f022] p-6 text-center text-white">
              <span className="text-3xl font-bold">2</span>
              <span className="text-muted-foreground text-sm">
                Years of Coding
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#c5f022] p-6 text-center text-white">
              <span className="text-3xl font-bold">∞</span>
              <span className="text-muted-foreground text-sm">
                Cups of Coffee
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
