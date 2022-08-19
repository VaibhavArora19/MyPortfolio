import React from 'react';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
   <React.Fragment>
   <Navbar />
   <Introduction />
   <About />
   <Skills />
   </React.Fragment>
  );
}

export default App;
