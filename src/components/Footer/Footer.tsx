import "./footer.css"
import Socials from "../Socials/Socials";

const Footer = () => {
  return(
    <footer
      className={"footer"}
    >
      <span className={"footer-contact"}>
        <h3>Contact</h3>
        Email: bartosz.b.wiechec@gmail.com

        <Socials />
      </span>
      <span className={"footer-author"}>
        <h3>Author</h3>
        Bartosz Wiecheć
      </span>
    </footer>
  )
}

export default Footer;