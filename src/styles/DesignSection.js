import { colors } from "./Styles";

export const designSectionStyles = {
	root: {
		display            : "grid",
		gridTemplateColumns: "auto auto",
		gridGap            : "120px 100px",
		marginTop          : "6em",
	},
};

export const designComponentStyles = {
	root          : {
		width       : "700px",
		height      : "800px",
		borderRadius: "50px",
		borderStyle : "solid",
		borderWidth : "1px",
		borderColor : colors.primary
	},
	imageContainer: {
		height         : "500px",
		width          : "100%",
		borderRadius   : "50px 50px 0px 0px",
		borderStyle    : "solid",
		borderWidth    : "1px",
		backgroundColor: colors.secondary2,
	},
	title         : {
		fontSize     : 48,
		fontWeight   : "bold",
		textTransform: "uppercase",
		marginTop    : "0.5em",
		marginLeft   : "1em"
	},
	description   : {
		fontSize  : 24,
		fontFamily: "lato",
		marginLeft: "2em",
		marginTop : "1em",
	},
};
