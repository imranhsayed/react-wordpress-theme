/**
 * App Component.
 *
 * @package react-wordpress-theme
 */

/**
 * Internal Dependencies.
 */
import './style.scss';
import Home from "./components/pages/Home";

class App extends React.Component {
	render() {
		return (
			<div>
				<Home/>
			</div>
		);
	}
}

export default App;
