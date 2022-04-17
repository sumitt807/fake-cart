import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Products from "./pages/Products";
import Testimonial from "./pages/Testimonial";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;