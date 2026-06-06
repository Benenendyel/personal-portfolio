function ProjectCard({
  navbarState,
  setNavbarState,
  Icons,
  Projects,
  previewData,
  setPreviewData,
  previewState,
  setPreviewState,
  hovering,
  setHover,
}) {
  return (
    <div className="grid auto-cols-[230px] grid-flow-col grid-rows-1 gap-4 pb-4 md:auto-cols-[minmax(310px,1fr)]">
      {Object.values(Projects).map((project, index) => (
        <div
          className={`relative flex h-120 cursor-pointer scrollbar-thin flex-col overflow-hidden rounded-xl border border-[#c5f022] bg-[#282828]`}
          key={index}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
          onClick={() => {
            setNavbarState(false);
            setPreviewData(project);
            setPreviewState(true);
          }}
        >
          <img
            className={`${hovering === index ? "h-0 opacity-0" : "h-50 opacity-100"} w-full shrink-0 object-cover object-top transition-all duration-300`}
            src={project.image[0]}
          />
          <div className="flex flex-col px-5 pt-3">
            <p className="text-xl font-bold text-white">{project.name}</p>
            <div className="flex flex-col">
              <div className="mt-4 inline-flex flex-wrap content-start gap-2 overflow-hidden">
                {project.stack.map((stack, i) => (
                  <span
                    key={i}
                    className="rounded-sm bg-[#c5f022] px-2 py-1 text-xs font-semibold text-[#282828]"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <p className="mt-2 mb-5 line-clamp-3 flex overflow-y-auto text-sm text-[#646464]">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              className={`${hovering === index ? "opacity-100" : " pointer-events-none opacity-0"} absolute right-5 bottom-5 z-10 flex flex-row items-center justify-center gap-1 rounded-sm bg-[#c5f022] px-5 py-1 transition-all duration-300 hover:animate-bounce`}
              style={{
                transitionDelay: hovering === index ? "300ms" : "0ms",
              }}
            >
              <img className="h-4 w-4" src={Icons.github} />
              <span className="font-semibold text-[#282828]">Github</span>
            </a>
            <div
              className={`${hovering === index ? "opacity-0" : "opacity-100"} absolute bottom-0 left-0 h-15 w-full bg-linear-to-t from-[#282828] to-transparent transition-all duration-300`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
