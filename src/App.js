import React from 'react';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';

function App() {
  return (
   <React.Fragment>
   <Navbar />
   <Introduction />
   <About />
   <Skills />
   <MyWork />
   </React.Fragment>
  );
}

export default App;
