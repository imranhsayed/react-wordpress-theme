/**
 * App Component.
 *
 * @package react-wordpress-theme
 */

/**
 * Internal Dependencies.
 */
import Header from './components/header';
import './style.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default App;
