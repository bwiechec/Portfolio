import "./hero.css"
import Navbar from "../../components/Navbar/Navbar";

const Hero = () => {
  return(
    <section className={"hero"}>
      <Navbar classNameString={"primary"} />
      <div className={"hero-content"}>
        <h1>
          Bartosz Wiecheć
        </h1>

        <h2>
          Front-End Developer
        </h2>
        <div className={"hero-image"}>
          <img
            src={"my-picture.png"}
            alt={"my-picture"}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;