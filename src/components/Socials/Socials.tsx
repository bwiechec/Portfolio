import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./socials.css"

const Socials = () => {
  return(
    <div className={"socials"}>
      <a
        href={"https://www.linkedin.com/in/bartosz-wieche%C4%87-620089226/"}
        target={"_blank"}
      >
        <LinkedInIcon />
      </a>

      <a
        href={"https://github.com/bwiechec"}
        target={"_blank"}
      >
        <GitHubIcon />
      </a>
    </div>
  )
}

export default Socials;