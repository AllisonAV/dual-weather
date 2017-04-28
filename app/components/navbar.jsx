import React, { Component } from 'react'
import { Link } from 'react-router'

const Navbar = (props) =>
  (
<nav className="navbar navbar-default">
  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <Link to="/" className="navbar-brand">Home</Link>
  </div>
</nav>
)

export default Navbar
