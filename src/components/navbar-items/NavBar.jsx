import React from 'react';
import SocialLinks from "./SocialLinks";
import {colors} from "../../styles/Styles";

const styles = {
	root: {
		display: "flex",
		justifyContent: "space-between",
		paddingLeft: 200,
		paddingRight: 200,
		paddingTop: 25,
	},
	titleStyle: {
		color: colors.primary,
		fontSize: 24,
		fontWeight: "600"
	}
}

const NavBar = () => {
	return (
		<div style={styles.root}>
			<h2 style={styles.titleStyle}>Jacob Bosco</h2>
			<SocialLinks/>
		</div>
	);
};

export default NavBar;