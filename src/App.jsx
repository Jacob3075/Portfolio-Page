import './styles/tailwind.output.css';
import NavBar from "./components/NavBar";
import {colors} from "./styles/Styles";

const styles = {
	root: {
		background: colors.background,
		height: "100vh",
		margin: 0,
	},
}

const App = () => (
	<div style={styles.root}>
		<NavBar/>
	</div>
);

export default App;
