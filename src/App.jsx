import NavBar from "./components/navbar-items/NavBar";
import {colors} from "./styles/Styles";
import HeroSection from "./components/HeroSection";
import CategorySelector from "./components/CategorySelector";
import ProjectsList from "./components/project-section/ProjectsList";

const styles = {
	root: {
		background: colors.background,
		color: colors.primary,
		fontFamily: "montserrat, lato, sans-serif"
	},
	section1: {
		height: "100vh",
	},
	section2: {
		paddingLeft: 200,
		paddingRight: 200,
		paddingBottom: 200,
	},
}

const App = () => (
	<div style={styles.root}>
		<div style={styles.section1}>
			<NavBar/>
			<HeroSection/>
		</div>
		<div style={styles.section2}>
			<CategorySelector/>
			<ProjectsList/>
		</div>
	</div>
);

export default App;
