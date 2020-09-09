import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

function Navbar(){
	return (
		<nav className="nav-wrapper grey">
			<div className="container">
				<Link to="/" className="brand-logo">MarioPlan</Link>
			</div>
		</nav>
	);
}

export default Navbar;