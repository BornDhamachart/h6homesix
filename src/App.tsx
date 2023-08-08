import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/HomePage";
import Services from "./Pages/Services/ServicesPage";
import About from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/ContactPage";

function App() {
  return (
    <>
      <div className="pt-20">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<>404 Not found</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
