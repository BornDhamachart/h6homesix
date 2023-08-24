import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/HomePage";
import Services from "./Pages/Services/ServicesPage";
import About from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/ContactPage";
import Project from "./Pages/Project/ProjectPage";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import MinjiHouse from "./Pages/Project/House/MinjiHouse";
import JapandiHouse from "./Pages/Project/House/JapandiHouse";

function App() {
  return (
    <>
      <AnimatePresence>
        <Navbar key="navbar" />
        <div className="pt-20">
          <Routes>
            <Route key="home" path="" element={<Home />} />
            <Route key="projects" path="projects" element={<Project />} />
            <Route
              key="minjihouse"
              path="minjihouse"
              element={<MinjiHouse />}
            />
            <Route
              key="japandihouse"
              path="japandihouse"
              element={<JapandiHouse />}
            />
            <Route key="services" path="services" element={<Services />} />
            <Route key="about" path="about" element={<About />} />
            <Route key="contact" path="contact" element={<Contact />} />
            <Route key="notfound" path="*" element={<>404 Not found</>} />
          </Routes>
        </div>
        <Footer key="footer" />
      </AnimatePresence>
    </>
  );
}

export default App;
