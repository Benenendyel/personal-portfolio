import { useState } from "react";

// components
import ProjectCard from "../components/ProjectCard";
import PreviewCard from "../components/PreviewCard";

// datas
import Projects from "../data/projects";
import Icons from "../data/icons";

function ProjectsSection() {
  const [previewState, setPreviewState] = useState(false);
  const [previewData, setPreviewData] = useState(Object.values(Projects)[0]);

  const [hovering, setHover] = useState(null);

  return (
    <section id="projects" className="py-10 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-2 md:px-6">
        <div className="flex flex-col">
          <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projects
          </span>
          <span className="text-muted-foreground mt-2 font-mono text-sm tracking-widest text-[#646464] uppercase">
            What I've built
          </span>
        </div>

        <div className="mt-5 overflow-x-auto">
          <ProjectCard
            Icons={Icons}
            Projects={Projects}
            previewData={previewData}
            setPreviewData={setPreviewData}
            previewState={previewState}
            setPreviewState={setPreviewState}
            hovering={hovering}
            setHover={setHover}
          />
        </div>
      </div>

      <PreviewCard
        previewState={previewState}
        setPreviewState={setPreviewState}
        previewData={previewData}
      />
    </section>
  );
}

export default ProjectsSection;
