import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import makeup from "./assets/makeup.jpeg";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url(${makeup})` }}
        >
          <div className="absolute inset-0 bg-white opacity-30"></div>

          <div className="relative z-10">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
