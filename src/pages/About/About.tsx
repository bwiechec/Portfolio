import Navbar from "../../components/Navbar/Navbar";
import "./about.css";

import skillList from "../../helpers/skills";
import {useEffect, useRef} from "react";

const About = () => {
  const infoRef = useRef<HTMLInputElement | null>(null);
  const aboutRef = useRef<HTMLInputElement | null>(null);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [ entry ] = entries;
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (aboutRef.current) observer.observe(aboutRef.current as Element);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current as Element);
    }

  }, [aboutRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (infoRef.current) observer.observe(infoRef.current as Element);

    return () => {
      if (infoRef.current) observer.unobserve(infoRef.current as Element);
    }
  }, [infoRef]);

  return (
    <section className={"about"} id={"about"}>
      <Navbar classNameString={"secondary"} />
      <div className={"about-content"}>
        <div className={"about-content__info hidden"} ref={infoRef}>
          <h3>About me</h3>
          <p>
            I am Front-End developer with almost 2 years of experience. <br />
            Currently I focus on mastering React and it's libraries. <br />
            Except react I'm currently working in ecosystem made of PHP (Symfony) and SQL (PostgreSQL).<br />
            I have graduated Poznan University of Technology as bachelor of
            Computer Science. <br />
            After graduating I have studied at University WSB Merito <br />
            as Master of Computer Science with a specialization of IoT. <br />
            <br />I am passionated about football, technology, games and last but
            not least programming.
          </p>
        </div>
        <div className={"about-content__skills hidden"} ref={aboutRef}>
          <h3>Skills</h3>
          <table>
            <tbody>
              {skillList.map((skill) => {
                return (
                  <tr key={skill.skillName}>
                    <td>{skill.skillName}:</td>
                    <td>{skill.skillRating}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default About;
