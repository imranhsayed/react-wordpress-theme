/**
 * App Component.
 *
 * @package
 */

/**
 * Internal Dependencies.
 */
import './style.scss';
import Home from './components/pages/Home';
import { Router } from '@reach/router';
import Page from "./components/pages/Page";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/" />
				<Page path="/:userId" />
			</Router>
		);
	}
}

export default App;
