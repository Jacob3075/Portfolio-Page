import React from 'react';
import {getIconByLanguage} from "../../Utils";
import {languageIconStyles} from "../../styles/ProjectSection";

const LanguageIcon = ({projectStack}) => {

	const icons = projectStack.map((language, index) =>
		<div
			key={index}
			style={languageIconStyles.icon(projectStack.length)}
		>
			{getIconByLanguage(language)}
		</div>
	);

	return (
		<div style={languageIconStyles.root}>
			{icons}
		</div>
	);
};

export default LanguageIcon;
