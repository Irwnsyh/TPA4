import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
import Article from './components/article/Article';
import Project from './components/project/Project';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Article />
      {/* <Footer /> */}
    </>
  );
}

export default App;
