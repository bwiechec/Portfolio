import './App.css'
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0,0);
  };

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
