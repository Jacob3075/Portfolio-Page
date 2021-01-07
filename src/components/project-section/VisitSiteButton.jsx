import React from 'react';
import {colors} from "../../styles/Styles";

const styles = {
	root: {
		backgroundColor: "#5E5E5E",
		height: "60px",
		width: "200px",
		borderRadius: "30px",
		fontSize: "18px",
		fontWeight: "bold",
		textAlign: "center",
		verticalAlign: "middle",
		lineHeight: "60px",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
	},
}

const VisitSiteButton = ({webSiteLink}) => {
	return webSiteLink === null
		? (<></>)
		: (
			<div style={styles.root}>
				View Source Code
			</div>
		);
};

export default VisitSiteButton;
