import "./projectCard.css"

interface projectCardProps {
  projectLink: string,
  projectSrc: string,
  projectName: string
}

const ProjectCard = ({
  projectLink,
  projectSrc,
  projectName
} : projectCardProps
) => {
  return(
    <a
      className={"project"}
      href = {projectLink}
      target={"_blank"}
    >
      <img
        className={"project-image"}
        src = {projectSrc}
        alt = {projectName}
      />
      <h2>
        {projectName}
      </h2>
    </a>
  )
}

export default ProjectCard;