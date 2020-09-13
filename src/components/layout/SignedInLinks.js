import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authAction'

function SignedInLinks(props){
    return(
        <ul className="right">
            <li><NavLink to="/create" activeClassName="toto">Create Project</NavLink></li> 
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn-floating light-red">{props.profile.initials}</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)