import React from 'react';
import {heroSectionStyles} from "../styles/HeroSection";

const HeroSection = () => {
	return (
		<div style={heroSectionStyles.root}>
			<div style={heroSectionStyles.title}>
				HERO SECTION TITLE
			</div>
			<div style={heroSectionStyles.subTitle}>
				HERO SECTION SUBTITLE
			</div>
			<div style={heroSectionStyles.aboutMeStyles}>
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
