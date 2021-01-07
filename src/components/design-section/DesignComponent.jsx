import React from 'react';
import {colors} from "../../styles/Styles";

const styles = {
	root: {
		width: "700px",
		height: "800px",
		borderRadius: "50px",
		borderStyle: "solid",
		borderWidth: "1px",
		borderColor: colors.primary
	},
	imageContainer: {
		height: "500px",
		width: "100%",
		borderRadius: "50px 50px 0px 0px",
		borderStyle: "solid",
		borderWidth: "1px",
		backgroundColor: colors.secondary2,
	},
	title: {
		fontSize: 48,
		fontWeight: "bold",
		textTransform: "uppercase",
		marginTop: "0.5em",
		marginLeft: "1em"
	},
	description: {
		fontSize: 24,
		fontFamily: "lato",
		marginLeft: "2em",
		marginTop: "1em",
	},
};

const DesignComponent = ({id, image, title, description}) => {
	return (
		<div style={styles.root}>
			<div style={styles.imageContainer}>
				{/*<img src={}/>*/}
			</div>
			<div style={styles.title}>
				{title}
			</div>
			<div style={styles.description}>
				{description}
			</div>
		</div>
	);
};

export default DesignComponent;
