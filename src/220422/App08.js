import React from 'react';
// import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { HashRouter, Route } from 'react-router-dom';
import About from '../routes/About';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Navigation from '../components/Navigation';

function App08() {
  return (
    <HashRouter>
      <Navigation />
        {/* <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} /> */}
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App08;
