import { colors } from "./Styles";

const getTitleFontSize = (width) => {
	if (width > 1500) {
		return 100;
	} else if (width > 1200) {
		return 70;
	} else if (width > 1000) {
		return 80;
	} else if (width > 800) {
		return 60;
	} else if (width > 500) {
		return 40;
	} else {
		return 30;
	}
};

const getSubTitleFontSize = (width) => {
	if (width > 1500) {
		return 36;
	} else if (width > 1200) {
		return 30;
	} else if (width > 1000) {
		return 30;
	} else if (width > 800) {
		return 26;
	} else {
		return 20;
	}
};

export const heroSectionStyles = {
	root         : {
		display       : 'flex',
		flexDirection : "column",
		alignItems    : 'center',
		justifyContent: 'center',
	},
	title        : (width) => {
		return {
			position  : "absolute",
			top       : "20%",
			fontSize  : getTitleFontSize(width),
			fontWeight: "bold",
		}
	},
	subTitle     : (width) => {
		return {
			color     : colors.secondary,
			position  : "absolute",
			top       : width > 800 ? "38%" : "30%",
			fontSize  : getSubTitleFontSize(width),
			fontWeight: "600"
		}
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
