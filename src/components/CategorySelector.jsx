import React from 'react';
import {categorySelectorStyles} from "../styles/AppStyles";

const CategorySelector = ({category, setCategory}) => {
	return (
		<div style={categorySelectorStyles.root}>
			<p
				onClick={() => setCategory(1)}
				style={{...categorySelectorStyles.button, textDecoration: category === 1 ? "underline" : ""}}
			>
				Projects
			</p>
			<p
				onClick={() => setCategory(2)}
				style={{...categorySelectorStyles.button, textDecoration: category === 2 ? "underline" : ""}}>
				UI/UX Designs
			</p>
		</div>
	);
};

export default CategorySelector;
