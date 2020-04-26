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
import Category from './components/pages/category';
import Post from './components/pages/post';
import NotFound from './components/not-found';
import Layout from './components/layout';

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Layout path="/">
						<Home path="/" />
						<Page path="/:pageSlug" />
						<Post path="/post/:slug" />
						<Category path="/category/:slug" />
						<NotFound default />
					</Layout>
				</Router>
			</>
		);
	}
}

export default App;
