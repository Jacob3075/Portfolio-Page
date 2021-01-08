import React from 'react';
import ProjectComponent from "./ProjectComponent";
import {projects} from "../../ProjectService";
import {projectSectionStyles} from "../../styles/ProjectSection";

const ProjectsList = () => {

	const projectComponents = projects.map(project =>
		<ProjectComponent key={project.id} project={project}/>
	);

	return (
		<div style={projectSectionStyles}>
			{projectComponents}
		</div>
	);
};

export default ProjectsList;
