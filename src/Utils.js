import { ReactComponent as JavaIcon } from "./images/JavaIcon.svg";
import { ReactComponent as JavaScriptIcon } from "./images/JavaScriptIcon.svg";

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
