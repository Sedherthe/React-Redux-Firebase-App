import React from 'react';
import { NavLink } from 'react-router-dom'

function SignedInLinks(){
    return(
        <ul className="right">
            <li><NavLink to="/create" activeClassName="toto">Create Project</NavLink></li> 
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn-floating light-red">SS</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;