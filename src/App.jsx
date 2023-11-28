import React from "react";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Trainers from './pages/trainers/Trainers';
import Plans from './pages/plans/Plans';
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/notFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/trainers" element={<Trainers />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
