import React from 'react';
import { NavLink } from 'react-router-dom'

function SignedInLinks(){
    return(
        <ul className="right">
            <NavLink to="/" activeClassName="">Create Project</NavLink>
            <NavLink to="/">Log Out</NavLink>
            <NavLink to="/" className="btn-floating red">SS</NavLink> 
        </ul>
    );
}

export default SignedInLinks;