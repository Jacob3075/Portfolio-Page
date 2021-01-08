import { colors } from "./Styles";

export const heroSectionStyles = {
	root         : {
		display       : 'flex',
		flexDirection : "column",
		alignItems    : 'center',
		justifyContent: 'center',
	},
	title        : {
		position  : "absolute",
		top       : "20%",
		fontSize  : 120,
		fontWeight: "bold",
	},
	subTitle     : {
		color     : colors.secondary,
		position  : "absolute",
		top       : "38%",
		fontSize  : 36,
		fontWeight: "600"
	},
	aboutMeStyles: {
		color     : colors.secondary,
		position  : "absolute",
		left      : "24.99%",
		right     : "25.43%",
		top       : "50%",
		bottom    : "33.38%",
		fontFamily: "lato",
		fontStyle : "normal",
		fontWeight: "normal",
		fontSize  : "24px",
		lineHeight: "29px",
		textAlign : "center",
	},
};
