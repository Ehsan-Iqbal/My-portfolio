import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Skill from "./Pages/Skill";
import Work from "./Pages/Work";
import Testimonial from "./Pages/Testimonial";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </>
  );
}
