import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToTop from './components/ToTop';

function App() {
  const [showBtn, setShowBtn] = useState(false);
    
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 330) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    });
}, []);
  return (
   <React.Fragment>
   <Navbar />
   <Introduction />
    {showBtn && <ToTop />}
   <About />
   <Skills />
   <MyWork />
   <Contact />
   <Footer />
   </React.Fragment>
  );
}

export default App;
