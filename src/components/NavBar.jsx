import React from 'react';
import SocialLinks from "./SocialLinks";
import {colors} from "../styles/Styles";

const styles = {
	root: {
		display: "flex",
		justifyContent: "space-between",
		paddingLeft: 100,
		paddingRight: 100,
		paddingTop: 25,
	},
}


const NavBar = () => {
	return (
		<div style={styles.root}>
			<h2 style={{color: colors.primary}}>Jacob Bosco</h2>
			<SocialLinks/>
		</div>
	);
};

export default NavBar;
