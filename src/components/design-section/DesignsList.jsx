import React from 'react';
import {designs} from "../../DesignService";
import DesignComponent from "./DesignComponent";
import {designSectionStyles} from "../../styles/DesignSection";

const DesignsList = () => {

	const designsComponents = designs.map((design, index) => (
		<DesignComponent key={index} {...design} />
	));

	return (
		<div style={designSectionStyles.root}>
			{designsComponents}
		</div>
	);
};

export default DesignsList;
