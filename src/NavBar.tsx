import React from 'react';
import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <nav>
      <div>
        <a href="#title"><p>COMPANY</p></a>
      </div>
      <div>
        <a href="#home"><i className="material-icons">home</i></a>
        <a href="#account"><i className="material-icons">person</i></a>
        <a href="#cart"><i className="material-icons">shopping_cart</i></a>
      </div>
	</nav>
  );
}

export default Navbar;
