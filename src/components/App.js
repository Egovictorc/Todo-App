import React, { Component } from "react";
import { BrowserRouter, Route, Prompt } from "react-router-dom";
import '../css/style.css';

import Navbar from "./Navbar";
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        
        <Route path="/About" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        
       
        <Route exact path="/" component={Home} />
        <Footer />
        </div>
    </BrowserRouter>
  );
};


export default App;