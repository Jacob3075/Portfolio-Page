import React from 'react';
import LanguageIcons from "./LanguageIcon";
import Links from "./Links";
import {colors} from "../../styles/Styles";

const styles = {
	root: {
		display: "flex",
		marginBottom: "70px",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		borderRadius: "50px",
		height: "300px",
		width: "1050px",
	},
	leftSide: {
		width: "550px",
	},
	rightSide: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "blue"
	},
	projectName: {
		position: "relative",
		fontSize: 48,
		fontWeight: "bold",
		textAlign: "center",
		left: "45px",
		top: "30px",
		paddingRight: "3em"
	},
	projectDescription: {
		color: colors.secondary,
		fontSize: 24,
		fontWeight: "regular",
		lineHeight: "29px",
		marginLeft: "45px",
		marginTop: "40px",
	},
};

const EvenProjectCard = ({name, description, projectStack, sourceCodeLink, webSiteLink}) => {
	const leftSideEven = (
		<>
			<div style={styles.projectName}>
				{name}
			</div>
			<div style={styles.projectDescription}>
				{description}
			</div>
		</>
	);

	const rightSideEven = (
		<>
			<LanguageIcons projectStack={projectStack}/>
			<Links sourceCodeLink={sourceCodeLink} webSiteLink={webSiteLink}/>
		</>
	);

	return (
		<div style={styles.root}>
			<div style={styles.leftSide}>
				{leftSideEven}
			</div>
			<div style={styles.rightSide}>
				{rightSideEven}
			</div>
		</div>
	);
};

export default EvenProjectCard;
