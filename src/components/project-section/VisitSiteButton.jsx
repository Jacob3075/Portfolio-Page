import React from 'react';
import {visitSiteButtonStyles} from "../../styles/ProjectSection";

const VisitSiteButton = ({webSiteLink}) => {
	return webSiteLink === null
		? (<></>)
		: (
			<div style={visitSiteButtonStyles.root}>
				View Source Code
			</div>
		);
};

export default VisitSiteButton;
