import React from 'react';
import {colors} from "../../styles/Styles";
import LanguageIcons from "./LanguageIcon";
import Links from "./Links";

const styles = {
	even: {
		display: "flex",
		marginBottom: "70px",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		borderRadius: "50px",
		height: "300px",
		width: "1050px",
	},
	evenLeftSide: {
		width: "550px",
	},
	evenRightSide: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "blue"
	},
	evenProjectName: {
		position: "relative",
		fontSize: 48,
		fontWeight: "bold",
		left: "45px",
		top: "30px"
	},
	evenProjectDescription: {
		color: colors.secondary,
		fontSize: 24,
		fontWeight: "regular",
		lineHeight: "29px",
		marginLeft: "45px",
		marginTop: "40px",
	},
};

const ProjectComponent = ({id, name, description, image, projectStack, sourceCodeLink, webSiteLink}) => {
	return (
		<div style={styles.even}>
			<div style={styles.evenLeftSide}>
				<div style={styles.evenProjectName}>
					{name}
				</div>
				<div style={styles.evenProjectDescription}>
					{description}
				</div>
			</div>
			<div style={styles.evenRightSide}>
				<LanguageIcons projectStack={projectStack}/>
				<Links sourceCodeLink={sourceCodeLink} webSiteLink={webSiteLink}/>
			</div>
		</div>
	);
};

export default ProjectComponent;
