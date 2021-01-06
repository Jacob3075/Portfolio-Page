import React from 'react';

const styles = {
	fontSize: 24,
	fontWeight: "600"
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
