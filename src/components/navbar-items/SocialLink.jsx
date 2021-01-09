import React from 'react';
import { socialLinkStyles } from "../../styles/NavBar";
import { mediaQuery, useWindowSize } from "../../Utils";

const SocialLink = ({ icon, title }) => {
		const [ width, height ] = useWindowSize();

		return (
			<>
				{ icon }
				{ width < mediaQuery.desktop
				  ? (<> </>)
				  : <div style={ socialLinkStyles }>
					  { title }
				  </div>
				}
			</>
		);
	}
;

export default SocialLink;
