import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "./ProjectList";

import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="mpp"> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              url={project.url}
              des={project.des}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
