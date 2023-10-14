import "./projectCard.css"
import {useEffect, useRef} from "react";

interface projectCardProps {
  projectLink: string,
  projectSrc: string,
  projectName: string,
  projectClass: string
}

const ProjectCard = ({
  projectLink,
  projectSrc,
  projectName,
  projectClass
} : projectCardProps
) => {

  const cardRef = useRef<HTMLAnchorElement | null>(null);

  const observerCallback = (entries) => {
    const [ entry ] = entries;
    if(entry.isIntersecting){
      // entry.target.classList.remove('hidden');
      entry.target.classList.add('show');
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (cardRef.current) observer.observe(cardRef.current as Element);

  }, [cardRef]);

  return(
    <a
      ref={cardRef}
      className={`project ${projectClass} hidden`}
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