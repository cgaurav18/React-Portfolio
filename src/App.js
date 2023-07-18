import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Qualification from "./Components/Qualification/Qualification";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { useMediaQuery } from "react-responsive";
function App() {
  const isMobile = useMediaQuery({maxWidth:600});
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "", width: isMobile?'62vh':'auto'
    }}>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Projects></Projects>
      <Qualification></Qualification>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
