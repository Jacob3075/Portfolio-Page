import React from 'react';
import {viewSourceCodeButton} from "../../styles/ProjectSection";

const ViewSourceCodeButton = ({sourceCodeLink, fullWidth}) => {
	return (
		<div style={{...viewSourceCodeButton.root, width: fullWidth ? "300px" : "200px"}}>
			View Source Code
		</div>
	);
};

export default ViewSourceCodeButton;
