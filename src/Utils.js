import { ReactComponent as JavaIcon } from "./images/JavaIcon.svg";
import { ReactComponent as JavaScriptIcon } from "./images/JavaScriptIcon.svg";

import React, { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
};

export const getIconByLanguage = (language) => {
	language = language.toLowerCase();
	switch (language) {
		case "java":
			return (<JavaIcon/>);
		case "javascript":
			return (<JavaScriptIcon/>);
		default:
			return (<div/>);
	}
};

export const mediaQuery = {
	desktop: 1200,
	tablet : 768,
	phone  : 576,
};
