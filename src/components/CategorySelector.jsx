import React from 'react';

const styles = {
	display: "flex",
	justifyContent: "space-around",
	fontSize: 48,
	fontWeight: "bold",
	fontFamily: "montserrat"
}

const CategorySelector = () => {
	return (
		<div style={styles}>
			<p>Projects</p>
			<p>UI/UX Designs</p>
		</div>
	);
};

export default CategorySelector;
