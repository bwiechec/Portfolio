import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./navbar.css"
import Socials from "../Socials/Socials";

interface NavbarProps {
  classNameString: string;
}

const Navbar = ({ classNameString } : NavbarProps) => {

  const smoothScrollToElement = (selector: string) => {

    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return(
    <nav className={`${classNameString} nav`}>

      <Socials />

      <div className={"nav-sections"}>
        <button
          onClick={() => smoothScrollToElement(".about")}
        >
          About
        </button>
        <button
          onClick={() => smoothScrollToElement(".projects")}
        >
          Projects
        </button>
      </div>
    </nav>
  )
}

export default Navbar;