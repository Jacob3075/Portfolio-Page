import React from 'react';
import {getIconByLanguage} from "../../UtilFunctions";


const LanguageIcon = ({projectStack}) => {
	const styles = {
		root: {
			display: "flex",
			marginBottom: "50px"
		},
		icon: {
			paddingLeft: projectStack.length > 1 ? "25px" : "",
			paddingRight: projectStack.length > 1 ? "25px" : "",
		},
	};

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
