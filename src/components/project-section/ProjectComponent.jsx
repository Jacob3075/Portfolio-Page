import React from 'react';
import {colors} from "../../styles/Styles";
import LanguageIcons from "./LanguageIcon";
import ViewSourceCodeButton from "./ViewSourceCodeButton";

const styles = {
	even: {
		display: "flex",
		marginBottom: "70px",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		borderRadius: "50px",
		height: "300px",
		width: "1000px",
	},
	evenLeftSide: {
		display: "block"
	},
	evenRightSide: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "white"
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
		position: "relative",
		fontSize: 24,
		fontWeight: "regular",
		lineHeight: "29px",
		left: "45px",
		top: "30px",
		width: "520px"
	},
};

const ProjectComponent = ({id, name, description, image, projectStack, sourceCodeLink}) => {
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
				<ViewSourceCodeButton/>
			</div>
		</div>
	);
};

export default ProjectComponent;
