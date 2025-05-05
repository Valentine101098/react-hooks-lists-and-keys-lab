import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologyItem = technologies.map((technology) => {
    return <span key={technology} name={technology.technology} >{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologyItem}

      </div>
    </div>
  );
}

export default ProjectItem;
