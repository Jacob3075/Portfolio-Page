import React from 'react';
import {designs} from "../../DesignService";
import DesignComponent from "./DesignComponent";

const styles = {
	root: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "120px 100px",
		marginTop: "6em",
	},
};

const DesignsList = () => {

	const designsComponents = designs.map((design, index) => (
		<DesignComponent key={index} {...design} />
	));

	return (
		<div style={styles.root}>
			{designsComponents}
		</div>
	);
};

export default DesignsList;
