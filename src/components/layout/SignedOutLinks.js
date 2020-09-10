import React from 'react';
import { NavLink } from 'react-router-dom'

function SignedOutLinks () {
    return (
      <ul id="nav-mobile" className="right">
        <li><NavLink to="/SignIn">Log In</NavLink></li>
        <li><NavLink to="/SignUp">Sign Up</NavLink></li>
      </ul>
    );
}

export default SignedOutLinks;