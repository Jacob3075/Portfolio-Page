import React from 'react';
import EvenProjectCard from "./EvenProjectCard";
import OddProjectCard from "./OddProjectCard";

const ProjectComponent = ({ project }) => {
	return project.id % 2 === 0
	       ? (<EvenProjectCard { ...project }/>)
	       : (<OddProjectCard { ...project }/>);
};

export default ProjectComponent;
