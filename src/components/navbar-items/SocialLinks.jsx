import React from 'react';
import SocialLink from "./SocialLink";
import Divider from "./Divider";
import {colors} from "../../styles/Styles";
import {ReactComponent as LinkedInIcon} from "../../images/Linkedin.svg"
import {ReactComponent as GitHubIcon} from "../../images/GitHub.svg"
import {ReactComponent as EmailIcon} from "../../images/At Symbol.svg"

const styles = {
	root: {
		display: "flex"
	}
}

const SocialLinks = () => {
	return (
		<div style={styles.root}>
			<SocialLink title="Email" icon={<EmailIcon fill={colors.primary} stroke={colors.primary}/>}/>
			<Divider/>
			<SocialLink title="LinkedIn" icon={<LinkedInIcon fill={colors.primary} stroke={colors.primary}/>}/>
			<Divider/>
			<SocialLink title="Github" icon={<GitHubIcon fill={colors.primary} stroke={colors.primary}/>}/>
		</div>
	);
};

export default SocialLinks;
