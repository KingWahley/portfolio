import { ProjectList } from "./ProjectList";
import "./Projects.css";

function ProjectItem({ image, name, id, url, des }) {
  return (
    <a href={url} target="_blank" type="event" className="tbag">
      <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1 className="nome"> {name} </h1>
        <p className="nome">{des}</p>
      </div>
    </a>
  );
}

export default ProjectItem;
