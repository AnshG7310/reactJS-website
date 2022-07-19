import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Error from './Pages/Error';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
