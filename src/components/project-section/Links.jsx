import React from 'react';
import ViewSourceCodeButton from "./ViewSourceCodeButton";
import VisitSiteButton from "./VisitSiteButton";
import { linkStyles } from "../../styles/ProjectSection";

const Links = ({ sourceCodeLink, webSiteLink }) => {
	return (
		<div style={ linkStyles.root }>
			<ViewSourceCodeButton sourceCodeLink={ sourceCodeLink } fullWidth={ webSiteLink === null }/>
			<VisitSiteButton webSiteLink={ webSiteLink }/>
		</div>
	);
};

export default Links;
