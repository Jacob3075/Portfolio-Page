import { mediaQuery, windowDimensions } from "../Utils";

export const navBarStyles = {
	root      : (width, height) => {
		return {
			display       : "flex",
			justifyContent: "space-between",
			paddingLeft   : width > mediaQuery.desktop ? "10rem" : "5rem",
			paddingRight  : width > mediaQuery.desktop ? "10rem" : "5rem",
			paddingTop    : "1em",
		}
	},
	titleStyle: {
		fontSize  : 24,
		fontWeight: "600"
	}
}

export const socialLinksStyles = {
	root: {
		display       : "flex",
		alignItems    : "center",
		justifyContent: "center",
	}
}

export const socialLinkStyles = {
	fontSize   : 24,
	fontWeight : "600",
	paddingLeft: "0.5em",
};

export const dividerStyles = {
	paddingLeft : 15,
	paddingRight: 15,
	fontSize    : 20,
	fontWeight  : "600"
};
