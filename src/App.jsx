import { useState } from 'react';
import NavBar from "./components/navbar-items/NavBar";
import HeroSection from "./components/HeroSection";
import CategorySelector from "./components/CategorySelector";
import ProjectsList from "./components/project-section/ProjectsList";
import DesignsList from "./components/design-section/DesignsList";
import { appStyles } from "./styles/AppStyles";

const App = () => {
	const [ category, setCategory ] = useState(1);

	return (
		<div style={ appStyles.root }>
			<div style={ appStyles.section1 }>
				<NavBar/>
				<HeroSection/>
			</div>
			<div style={ appStyles.section2 }>
				<CategorySelector category={ category } setCategory={ setCategory }/>
				{ category === 1
				  ? <ProjectsList/>
				  : <DesignsList/> }
			</div>
		</div>
	);
};

export default App;
