import React from 'react';
import { NavLink } from 'react-router-dom'

function SignedOutLinks () {
    return (
      <ul id="nav-mobile" className="right">
        <li><NavLink to="/">Sign In</NavLink>Sign In</li>
        <li><NavLink to="/">Log In</NavLink></li>
      </ul>
    );
}

export default SignedOutLinks;