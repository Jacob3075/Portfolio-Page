import React from 'react';
import {colors} from "../../styles/Styles";

const styles = {
	root: {
		backgroundColor: "#5E5E5E",
		height: "60px",
		borderRadius: "30px",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		fontSize: "18px",
		fontWeight: "bold",
		textAlign: "center",
		verticalAlign: "middle",
		lineHeight: "60px",
	},
}

const ViewSourceCodeButton = ({sourceCodeLink, fullWidth}) => {
	return (
		<div style={{...styles.root, width: fullWidth ? "300px" : "200px"}}>
			View Source Code
		</div>
	);
};

export default ViewSourceCodeButton;
