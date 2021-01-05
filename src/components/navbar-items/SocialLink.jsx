import React from 'react';
import {colors} from "../../styles/Styles";

const styles = {
	color: colors.primary,
	fontSize: 24,
	fontWeight: "600"
};

const SocialLink = ({icon, title}) => {
	return (
		<div style={styles}>
			{title}
		</div>
	);
};

export default SocialLink;
