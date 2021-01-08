import React from 'react';
import { designComponentStyles } from "../../styles/DesignSection";

const DesignComponent = ({ image, title, description }) => {
	return (
		<div style={ designComponentStyles.root }>
			<div style={ designComponentStyles.imageContainer }>
				{/*<img src={}/>*/ }
			</div>
			<div style={ designComponentStyles.title }>
				{ title }
			</div>
			<div style={ designComponentStyles.description }>
				{ description }
			</div>
		</div>
	);
};

export default DesignComponent;
