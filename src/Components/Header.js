import React from 'react';
import '../Styles/Header.css'
import logo from '../Images/logo.png'

export default function Header() {
  return (
    <header>
        <div id="logo"><img src={logo} ></img></div>
        <h1 id="logo-name">Expanse Tracker</h1>
    </header>
  );
}
