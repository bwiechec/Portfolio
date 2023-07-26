import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectList from "../../helpers/projectList";
import "./projects.css"

const Projects = () => {
  return(
    <section className={"projects"}>
      <Navbar classNameString={"secondary"} />
      <div className={"projects-list"}>
        {
          projectList.map( project => {
              return (
                <ProjectCard
                  projectLink={project.projectLink}
                  projectSrc={project.projectSrc}
                  projectName={project.projectName}
                />
              )
            }
          )
        }
      </div>
    </section>
  )
}

export default Projects;