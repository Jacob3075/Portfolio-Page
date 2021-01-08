import React from 'react';
import LanguageIcons from "./LanguageIcon";
import Links from "./Links";
import { evenCardStyles } from "../../styles/ProjectSection";

const EvenProjectCard = ({ name, description, projectStack, sourceCodeLink, webSiteLink }) => {
	const leftSideEven = (
		<>
			<div style={ evenCardStyles.projectName }>
				{ name }
			</div>
			<div style={ evenCardStyles.projectDescription }>
				{ description }
			</div>
		</>
	);

	const rightSideEven = (
		<>
			<LanguageIcons projectStack={ projectStack }/>
			<Links sourceCodeLink={ sourceCodeLink } webSiteLink={ webSiteLink }/>
		</>
	);

	return (
		<div style={ evenCardStyles.root }>
			<div style={ evenCardStyles.leftSide }>
				{ leftSideEven }
			</div>
			<div style={ evenCardStyles.rightSide }>
				{ rightSideEven }
			</div>
		</div>
	);
};

export default EvenProjectCard;
