import Navbar from "../../components/Navbar/Navbar";
import "./about.css";

import skillList from "../../helpers/skills";
import {useEffect, useRef} from "react";

const About = () => {
  const infoRef = useRef<HTMLInputElement | null>(null);
  const aboutRef = useRef<HTMLInputElement | null>(null);

  const observerCallback = (entries) => {
    const [ entry ] = entries;
    if(entry.isIntersecting){
      // entry.target.classList.remove('hidden');
      entry.target.classList.add('show');
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (aboutRef.current) observer.observe(aboutRef.current as Element);

  }, [aboutRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (infoRef.current) observer.observe(infoRef.current as Element);

  }, [infoRef]);

  return (
    <section className={"about"} id={"about"}>
      <Navbar classNameString={"secondary"} />
      <div className={"about-content"}>
        <div className={"about-content__info hidden"} ref={infoRef}>
          <h3>About me</h3>I am Front-End developer with 1.5 years of
          experience. <br />
          Currently I focus on mastering React. <br />
          I have graduated Poznan University of Technology as bachelor of
          Computer Science. <br />
          After graduating I have studied at University WSB Merito <br />
          as Master of Computer Science with a specialization of IoT. <br />
          <br />I am passionated about football, technology, games and last but
          not least programming.
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
