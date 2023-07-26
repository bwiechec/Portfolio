import Navbar from "../../components/Navbar/Navbar";
import "./about.css"

const About = () => {
  return(
    <section className={"about"} id={"about"}>
      <Navbar classNameString={"secondary"} />
      <div className={"about-content"}>
        <div className={"about-content__info"}>
          I am Front-End developer with 1.5 years of experience. <br />
          Currently I focus on mastering React. <br />
          I have graduated Poznan University of Technology as bachelor of Computer Science. <br />
          After graduating I have studied at University WSB Merito <br />
          as Master of Computer Science with a specialization of IoT. <br />
          <br />
          I am passionated about football, technology, games and last but not least programming.
        </div>
        <div className={"about-content__skills"}>
          <table>
            <tr>
              <td>
                JavaScript:
              </td>
              <td>
                🟢🟢🟢🟢⚪
              </td>
            </tr>

            <tr>
              <td>
                React:
              </td>
              <td>
                🟢🟢🟢⚪⚪
              </td>
            </tr>

            <tr>
              <td>
                SQL:
              </td>
              <td>
                🟢🟢🟢⚪⚪
              </td>
            </tr>

            <tr>
              <td>
                PHP:
              </td>
              <td>
                🟢🟢⚪⚪⚪
              </td>
            </tr>

            <tr>
              <td>
                C++
              </td>
              <td>
                🟢🟢⚪⚪⚪
              </td>
            </tr>

            <tr>
              <td>
                C#
              </td>
              <td>
                🟢⚪⚪⚪⚪
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  )
}

export default About;