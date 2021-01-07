import React from 'react';

const styles = {
	root: {
		display: "flex",
		justifyContent: "space-around",
		fontSize: 48,
		fontWeight: "bold",
		fontFamily: "montserrat"
	},
	button: {
		cursor: "pointer",
	},
	selected: {},
}
const CategorySelector = ({category, setCategory}) => {
	return (
		<div style={styles.root}>
			<p
				onClick={() => setCategory(1)}
				style={{...styles.button, textDecoration: category === 1 ? "underline" : ""}}
			>
				Projects
			</p>
			<p
				onClick={() => setCategory(2)}
				style={{...styles.button, textDecoration: category === 2 ? "underline" : ""}}			>
				UI/UX Designs
			</p>
		</div>
	);
};

export default CategorySelector;
