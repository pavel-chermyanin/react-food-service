
import React from "react";
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";




import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";




function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contact/>}/>
            <Route path="/movies/:id" element={<Movie/>}/>
            <Route element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>

  );
}

export default App;
