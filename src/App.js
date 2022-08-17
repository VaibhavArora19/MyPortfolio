import React from 'react';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';

function App() {
  return (
   <React.Fragment>
   <Navbar />
   <Introduction />
   <About />
   </React.Fragment>
  );
}

export default App;
