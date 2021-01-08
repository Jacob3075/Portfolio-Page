import React from 'react';
import LanguageIcons from "./LanguageIcon";
import Links from "./Links";
import {oddCardStyles} from "../../styles/ProjectSection";

const OddProjectCard = ({name, description, projectStack, sourceCodeLink, webSiteLink}) => {
	const rightSideOdd = (
		<>
			<div style={oddCardStyles.projectName}>
				{name}
			</div>
			<div style={oddCardStyles.projectDescription}>
				{description}
			</div>
		</>
	);

	const leftSideOdd = (
		<>
			<LanguageIcons projectStack={projectStack}/>
			<Links sourceCodeLink={sourceCodeLink} webSiteLink={webSiteLink}/>
		</>
	);

	return (
		<div style={oddCardStyles.root}>
			<div style={oddCardStyles.root}>
				<div style={oddCardStyles.leftSide}>
					{leftSideOdd}
				</div>
				<div style={oddCardStyles.rightSide}>
					{rightSideOdd}
				</div>
			</div>

		</div>
	);
};

export default OddProjectCard;
