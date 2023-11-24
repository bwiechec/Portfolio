import "./projectCard.css";
import { useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PageviewIcon from "@mui/icons-material/Pageview";

interface projectCardProps {
  projectLink: string;
  githubLink: string;
  projectSrc: string;
  projectName: string;
  projectClass: string;
}

const ProjectCard = ({
  projectLink,
  projectSrc,
  githubLink,
  projectName,
  projectClass,
}: projectCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // entry.target.classList.remove('hidden');
      entry.target.classList.add("show");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (cardRef.current) observer.observe(cardRef.current as Element);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current as Element);
    };
  }, [cardRef]);

  return (
    <div ref={cardRef} className={`project ${projectClass} hidden`}>
      <img className={"project-image"} src={projectSrc} alt={projectName} />
      <div className={"project-info"}>
        <h2>{projectName}</h2>
        <div className={"project-info__icons"}>
          <a href={githubLink} target={"_blank"}>
            <GitHubIcon />
          </a>
          <a href={projectLink} target={"_blank"}>
            <PageviewIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
