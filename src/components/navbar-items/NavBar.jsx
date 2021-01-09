import React from 'react';
import { useWindowSize } from "../../Utils";
import SocialLinks from "./SocialLinks";
import { navBarStyles } from "../../styles/NavBar";

const NavBar = () => {
	const [width, height] = useWindowSize();

	return (
		<div style={ navBarStyles.root(width, height) }>
			<h2 style={ navBarStyles.titleStyle }>Jacob Bosco</h2>
			<SocialLinks/>
		</div>
	);
};

export default NavBar;
