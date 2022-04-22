import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from '../routes/About';
import Home from '../routes/Home';

function App08() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME (메인) </Link>
        </li>
        <li>
          <Link to="/about"> ABOUT (소개)</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App08;
