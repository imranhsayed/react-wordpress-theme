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
import Category from "./components/pages/category";
import Post from "./components/pages/post";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/" />
				<Page path="/:pageSlug" />
				<Category path="category/:slug"/>
				<Post path="category/:slug"/>
			</Router>
		);
	}
}

export default App;
