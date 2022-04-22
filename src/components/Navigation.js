import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
        <Link to = '/'> HOME (메인) </Link>
        <Link to = '/about'> ABOUT (소개) </Link>
    </div>
  );
}

export default Navigation;
