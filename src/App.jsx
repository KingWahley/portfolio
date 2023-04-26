import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/Projects/Projects";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Footer from "./Footer";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Nav /> */}
      <Toggle />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
