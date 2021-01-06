import './styles/tailwind.output.css';
import NavBar from "./components/navbar-items/NavBar";
import {colors} from "./styles/Styles";
import HeroSection from "./components/HeroSection";

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
		height: "100vh",
		paddingLeft: 200,
		paddingRight: 200
	},
}

const App = () => (
	<div style={styles.root}>
		<div style={styles.section1}>
			<NavBar/>
			<HeroSection/>
		</div>
		<div style={styles.section2}>
		</div>
	</div>
);

export default App;
