import React from 'react';
import {getIconByLanguage} from "../../UtilFunctions";

const styles = {
	root: {
		display: "flex",
		marginBottom: "50px"
	},
	icon: {
		paddingLeft: "35px",
		paddingRight: "35px",
	},
};

const LanguageIcon = ({projectStack}) => {

	const icons = projectStack.map((language, index) =>
		<div key={index} style={styles.icon}> {getIconByLanguage(language)} </div>
	);

	return (
		<div style={styles.root}>
			{icons}
		</div>
	);
};

export default LanguageIcon;
