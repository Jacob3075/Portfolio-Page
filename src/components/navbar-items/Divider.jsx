import React from 'react';
import {colors} from "../../styles/Styles";

const styles = {
	color: colors.primary,
	paddingLeft: 15,
	paddingRight: 15,
	fontSize: 20,
	fontWeight: "600"
};

const Divider = () => {
	return (
		<div style={styles}>
			|
		</div>
	);
};

export default Divider;
