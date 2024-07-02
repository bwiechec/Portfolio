import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectList from "../../helpers/projectList";
import { getColNumber } from "../../helpers/viewport";
import "./projects.css";

const Projects = () => {
  const colNumber = getColNumber(undefined);
  return (
    <section className={"projects"}>
      <hr className={"accent-hr"} />
      {/* <Navbar classNameString={"secondary"} /> */}
      <div className={"projects-anchor"}></div>
      <h1 className={"heading"}>Projects</h1>
      <div className={"projects-list"}>
        {projectList.map((project, key) => {
          return (
            <ProjectCard
              projectClass={`project-card-${key % colNumber}`}
              key={project.projectName}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              projectSrc={project.projectSrc}
              projectName={project.projectName}
              projectTechStack={project.techStack}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
