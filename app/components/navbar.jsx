import React, { Component } from 'react'
import { Link } from 'react-router'

const Navbar = (props) =>
  (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <img className="nav-img" src="http://icons.wxug.com/graphics/wu2/logo_130x80.png" />
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <Link to="/" className="navbar-brand">Home</Link>
        <ul className="nav navbar-nav">
          <li><Link to="/map" activeClassName="active-link">Map</Link></li>
          <li><Link to="/routes" activeClassName="active-link">Create Routes</Link></li>
          <li><Link to="/routes/:id" activeClassName="active-link">Your Routes</Link></li>
        </ul>
    </div>
  </div>
</nav>
)

export default Navbar
