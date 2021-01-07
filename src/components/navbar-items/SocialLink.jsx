import React from 'react';

const styles = {
	fontSize: 24,
	fontWeight: "600",
	paddingLeft: "0.5em",
};

const SocialLink = ({icon, title}) => {
	return (
		<>
			{icon}
			<div style={styles}>
				{title}
			</div>
		</>
	);
};

export default SocialLink;
