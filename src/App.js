import React, { useEffect, useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToTop from './components/ToTop';
import HamburgerNavbar from './components/UI/HamburgerNavbar';

function App() {
  const [showBtn, setShowBtn] = useState(false);
  const [classes, setIsClasses] = useState('topDiv');
  const [isNavbarShowing, setIsNavbarShowing] = useState(false);
  const [isHamburgerShowing, setIsHamburgerShowing] = useState(false);
  useEffect(() => {

    if(window.screen.width < 450){
      setIsClasses('topDiv mobileScreen');
      setIsHamburgerShowing(true);
    }
    window.addEventListener('resize', () => {
      if(window.screen.width < 450){

        setIsClasses('topDiv mobileScreen');
        setIsHamburgerShowing(true);

      }else{

        setIsHamburgerShowing(false);
        setIsClasses('topDiv');
      }
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 330) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    });
}, []);

  const showNavbarHandler = ()  => {
    setIsNavbarShowing(!isNavbarShowing);
  };
  return (
   <div className= {classes}>
   <Navbar showNavbar = {showNavbarHandler}/>
   {isNavbarShowing && <HamburgerNavbar/>}
   <Introduction  mobileView = {isHamburgerShowing}/>
    {showBtn && <ToTop />}
   <About />
   <Skills />
   <MyWork />
   <Contact />
   <Footer />
   </div>
  );
}

export default App;
