import React from 'react';
import { socialLinkStyles } from "../../styles/NavBar";

const SocialLink = ({ icon, title }) => {
	return (
		<>
			{ icon }
			<div style={ socialLinkStyles }>
				{ title }
			</div>
		</>
	);
};

export default SocialLink;
