import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css"
import logo from "../../assets/images/logo.png"

function Header() {
  return (
    <header>
      <div id="title">
      <img src={logo} alt="logo" id="logo" />
      <h1>Poke List</h1>
      <img src={logo} alt="logo2" id="logo2" />
      </div>
      <Nav/>
    </header>
  )
}

export default Header
