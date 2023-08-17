import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/HomePage";
import Services from "./Pages/Services/ServicesPage";
import About from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/ContactPage";
import Loader from "./Components/Loader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
    {/* <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<>404 Not found</>} />
            </Routes>
          </div>
          
        </>
      )}
      </AnimatePresence> */}

      <AnimatePresence>
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<>404 Not found</>} />
            </Routes>
          </div>
      </AnimatePresence>

    </>
  );
}

export default App;
