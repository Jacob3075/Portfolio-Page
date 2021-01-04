import './styles/tailwind.output.css';
import NavBar from "./components/NavBar";

const styles = {
	root: {
		backgroundColor: ""
	}
}

const App = () => (
	<div className={styles.root}>
		<NavBar/>
	</div>
);

export default App;
