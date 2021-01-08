import React from 'react';
import SocialLinks from "./SocialLinks";
import {navBarStyles} from "../../styles/NavBar";

const NavBar = () => {
	return (
		<div style={navBarStyles.root}>
			<h2 style={navBarStyles.titleStyle}>Jacob Bosco</h2>
			<SocialLinks/>
		</div>
	);
};

export default NavBar;
