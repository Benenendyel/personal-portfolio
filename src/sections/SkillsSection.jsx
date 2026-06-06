import aboutMe from "../data/aboutMe";

function SkillsSection() {
  return (
    <section id="skills" className="py-10 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-2 md:px-6">
        <div className="flex flex-col">
          <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Skills
          </span>
          <span className="mt-2 font-mono text-sm tracking-widest text-[#646464] uppercase">
            What I work with
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-5">
          {Object.entries(aboutMe).map(([category, skills], index) => (
            <div key={index}>
              <span className="text-muted-foreground mt-2 font-mono text-sm tracking-widest text-[#646464] uppercase">
                {category}
              </span>
              <div className="mt-2 flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex cursor-default items-center gap-2 rounded-lg border border-[#c5f022] px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c5f022] hover:text-[#282828]"
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
