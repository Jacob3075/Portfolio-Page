import React from 'react';
import {colors} from "../styles/Styles";

const SocialLink = ({icon, title}) => {
	return (
		<div style={{color: colors.primary}}>
			{title}
		</div>
	);
};

export default SocialLink;
