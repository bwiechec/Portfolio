import { useEffect } from "react";
import "./hero.css";

const Hero = () => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      document.querySelector("nav")?.classList.remove("secondary");
    } else {
      console.log("not intersecting");
      document.querySelector("nav")?.classList.add("secondary");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (document.querySelector(".hero-image"))
      observer.observe(document.querySelector(".hero-image") as Element);

    return () => {
      if (document.querySelector(".hero-image"))
        observer.unobserve(document.querySelector(".hero-image") as Element);
    };
  }, []);

  return (
    <section className={"hero"}>
      <div className={"hero-content"}>
        <h1>Bartosz Wiecheć</h1>

        <h2>Software Developer</h2>
        <div className={"hero-image"}>
          <img src={"my-picture.png"} alt={"my-picture"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
