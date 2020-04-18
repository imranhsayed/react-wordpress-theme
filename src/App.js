/**
 * App Component.
 *
 * @package
 */

/**
 * Internal Dependencies.
 */
import './style.scss';
import Home from './components/pages/home';
import { Router } from '@reach/router';
import Page from './components/pages/page';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/" />
				<Page path="/:pageSlug" />
			</Router>
		);
	}
}

export default App;
