function ConnectionsSection() {
  return (
    <section id="connections" className="py-10 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-2 md:px-6">
        <div className="flex flex-col">
          <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let's Build Something
          </span>
          <span className="mt-2 font-mono text-sm tracking-widest text-[#646464] uppercase">
            Get in touch
          </span>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs tracking-widest text-[#646464] uppercase">
              Phone
            </span>
            <span className="text-white">+6395 967 4584</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs tracking-widest text-[#646464] uppercase">
              Email
            </span>
            <a
              href="mailto:vencarlostagaro@gmail.com"
              className="text-white transition-colors duration-300 hover:text-[#c5f022]"
            >
              vencarlostagaro@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs tracking-widest text-[#646464] uppercase">
              Find me on
            </span>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="https://github.com/Benenendyel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#646464] px-4 py-2 text-sm text-white transition-colors duration-300 hover:border-[#c5f022]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ven-carlos-tagaro-1901592a1/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#646464] px-4 py-2 text-sm text-white transition-colors duration-300 hover:border-[#c5f022]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectionsSection;
