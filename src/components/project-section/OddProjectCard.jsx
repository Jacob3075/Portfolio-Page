import React from 'react';
import {colors} from "../../styles/Styles";
import LanguageIcons from "./LanguageIcon";
import Links from "./Links";

const styles = {
	root: {
		display: "flex",
		marginBottom: "70px",
		float: "right",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		borderRadius: "50px",
		height: "300px",
		width: "1050px",
	},
	rightSide: {
		width: "550px",
	},
	leftSide: {
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

const OddProjectCard = ({name, description, projectStack, sourceCodeLink, webSiteLink}) => {
	const rightSideOdd = (
		<>
			<div style={styles.projectName}>
				{name}
			</div>
			<div style={styles.projectDescription}>
				{description}
			</div>
		</>
	);

	const leftSideOdd = (
		<>
			<LanguageIcons projectStack={projectStack}/>
			<Links sourceCodeLink={sourceCodeLink} webSiteLink={webSiteLink}/>
		</>
	);


	return (
		<div style={styles.root}>
			<div style={styles.root}>
				<div style={styles.leftSide}>
					{leftSideOdd}
				</div>
				<div style={styles.rightSide}>
					{rightSideOdd}
				</div>
			</div>

		</div>
	);
};

export default OddProjectCard;
