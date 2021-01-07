import React from 'react';
import ProjectComponent from "./ProjectComponent";
import {projects} from "../../ProjectService";

const styles = {
	paddingTop: 100,
};

const ProjectsList = () => {

	const projectComponents = projects.map(project =>
		<ProjectComponent key={project.id} project={project}/>
	);

	return (
		<div style={styles}>
			{projectComponents}
		</div>
	);
};

export default ProjectsList;
