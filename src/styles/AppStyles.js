import {colors} from "./Styles";

export const appStyles = {
	root: {
		background: colors.background,
		color: colors.primary,
		fontFamily: "montserrat, lato, sans-serif"
	},
	section1: {
		height: "100vh",
	},
	section2: {
		paddingLeft: "12em",
		paddingRight: "12em",
		paddingBottom: "12em",
	},
}

export const categorySelectorStyles = {
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

