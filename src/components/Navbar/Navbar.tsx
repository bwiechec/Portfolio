import "./navbar.css";
import Socials from "../Socials/Socials";

interface NavbarProps {
  classNameString: string;
}

const Navbar = ({ classNameString }: NavbarProps) => {
  const smoothScrollToElement = (selector: string) => {
    document
      .querySelector(selector)
      ?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <nav className={`${classNameString}`}>
      <div className="nav">
        <Socials />

        <div className={"nav-sections"}>
          <button onClick={() => smoothScrollToElement(".about-anchor")}>
            About
          </button>
          <button onClick={() => smoothScrollToElement(".projects-anchor")}>
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
