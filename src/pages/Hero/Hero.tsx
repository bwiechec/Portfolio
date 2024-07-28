import "./hero.css";

const Hero = () => {
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
