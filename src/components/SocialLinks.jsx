import React from 'react';
import SocialLink from "./SocialLink";
import Divider from "./Divider";

const styles = {
	root: {
		display: "flex"
	}
}

const SocialLinks = () => {
	return (
		<div style={styles.root}>
			<SocialLink title="Email"/>
			<Divider />
			<SocialLink title="LinkedIn"/>
			<Divider />
			<SocialLink title="Github"/>
		</div>
	);
};

export default SocialLinks;
