import React, { Component } from 'react'
import { Link } from 'react-router'

const Navbar = (props) =>
  (
<nav className="navbar navbar-default">
  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <img className="nav-img" src="http://icons.wxug.com/graphics/wu2/logo_130x80.png" />
        <Link to="/" className="navbar-brand">Home</Link>
  </div>
</nav>
)

export default Navbar
