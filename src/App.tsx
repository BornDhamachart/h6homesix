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

function App() {
  return (
    <>
      <AnimatePresence>
        {/* <Navbar /> */}
        <div className="pt-20">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="projects" element={<Project />} />
            <Route path="minjihouse" element={<MinjiHouse />}/>
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<>404 Not found</>} />
          </Routes>
        </div>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
