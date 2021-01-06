import React from 'react';
import {colors} from "../styles/Styles";

const styles = {
	root: {
		display: 'flex',
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		position: "absolute",
		top: "20%",
		fontSize: 120,
		fontWeight: "bold",
	},
	subTitle: {
		color: colors.secondary,
		position: "absolute",
		top: "38%",
		fontSize: 36,
		fontWeight: "600"
	},
	aboutMeStyles: {
		color: colors.secondary,
		position: "absolute",
		left: "24.99%",
		right: "25.43%",
		top: "50%",
		bottom: "33.38%",
		fontFamily: "lato",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "29px",
		textAlign: "center",

	},
};
const HeroSection = () => {
	return (
		<div style={styles.root}>
			<div style={styles.title}>
				HERO SECTION TITLE
			</div>
			<div style={styles.subTitle}>
				HERO SECTION SUBTITLE
			</div>
			<div style={styles.aboutMeStyles}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida risus nisi facilisis urna. Arcu, in sed
				libero ut sed viverra. Eget et proin id nunc nibh non curabitur sagittis vestibulum. Hendrerit cursus
				purus nam purus sed ac. Ut purus facilisis phasellus sed imperdiet dictum rutrum amet. Nulla nunc ipsum
				quam a augue dui volutpat, volutpat vulputate. Nunc enim porttitor eu egestas. Lobortis id elit,
				malesuada ut lectus condimentum duis. Diam est suspendisse sit in dolor volutpat et euismod consectetur.
			</div>
		</div>
	);
};

export default HeroSection;
