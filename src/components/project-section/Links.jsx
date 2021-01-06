import React from 'react';
import ViewSourceCodeButton from "./ViewSourceCodeButton";
import VisitSiteButton from "./VisitSiteButton";

const styles = {
	root: {
		display: "flex",
		width: "100%",
		justifyContent: "space-around",
	}
}

const Links = ({sourceCodeLink, webSiteLink}) => {
	return (
		<div style={styles.root}>
			<ViewSourceCodeButton sourceCodeLink={sourceCodeLink} fullWidth={!!webSiteLink}/>
			<VisitSiteButton webSiteLink={webSiteLink}/>
		</div>
	);
};

export default Links;
