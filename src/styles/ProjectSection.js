import {colors} from "./Styles";

export const projectSectionStyles = {
	paddingTop: 100,
};

export const evenCardStyles = {
	root: {
		display: "flex",
		marginBottom: "4.5em",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		borderRadius: "3.125em",
		height: "18.75em",
		width: "65.625em",
	},
	leftSide: {
		width: "34.375em",
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
		left: "2em",
		top: "0.5em",
		paddingRight: "3em"
	},
	projectDescription: {
		position: "relative",
		color: colors.secondary,
		fontSize: 24,
		fontWeight: "regular",
		lineHeight: "29px",
		left: "2em",
		top: "1.5em",
	},
};

export const oddCardStyles = {
	root: {
		display: "flex",
		marginBottom: "4.5em",
		float: "right",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		borderRadius: "3.125em",
		height: "18.75em",
		width: "65.625em",
	},
	rightSide: {
		width: "34.375em",
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
		left: "2em",
		top: "0.5em",
		paddingRight: "3em"
	},
	projectDescription: {
		color: colors.secondary,
		fontSize: 24,
		fontWeight: "regular",
		lineHeight: "29px",
		marginLeft: "2em",
		marginTop: "1.5em",
	},
};

export const linkStyles = {
	root: {
		display: "flex",
		width: "100%",
		justifyContent: "space-around",
	}
}

export const visitSiteButtonStyles = {
	root: {
		backgroundColor: "#5E5E5E",
		height: "60px",
		width: "200px",
		borderRadius: "30px",
		fontSize: "18px",
		fontWeight: "bold",
		textAlign: "center",
		verticalAlign: "middle",
		lineHeight: "60px",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
	},
}

export const viewSourceCodeButton = {
	root: {
		backgroundColor: "#5E5E5E",
		height: "60px",
		borderRadius: "30px",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: colors.primary,
		fontSize: "18px",
		fontWeight: "bold",
		textAlign: "center",
		verticalAlign: "middle",
		lineHeight: "60px",
	},
}

export 	const languageIconStyles = {
	root: {
		display: "flex",
		marginBottom: "50px"
	},
	icon: (projectStackLength) => {
		return {
			paddingLeft: projectStackLength > 1 ? "25px" : "",
			paddingRight: projectStackLength > 1 ? "25px" : "",
		}
	},
};

