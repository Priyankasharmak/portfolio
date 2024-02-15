import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/about';
import Contact from './components/contact me';
import Navigation from './components/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Contact/>
    {/* <About></About> */}
    {/* <Home></Home> */}
    
  </React.StrictMode>
);
