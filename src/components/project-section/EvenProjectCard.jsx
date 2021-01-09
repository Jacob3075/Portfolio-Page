import React from 'react';
import { useWindowSize } from "../../Utils";
import LanguageIcons from "./LanguageIcon";
import Links from "./Links";
import { evenCardStyles } from "../../styles/ProjectSection";

const EvenProjectCard = ({ name, description, projectStack, sourceCodeLink, webSiteLink }) => {
	const [width, height] = useWindowSize();

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
		<div style={ evenCardStyles.root(width) }>
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
