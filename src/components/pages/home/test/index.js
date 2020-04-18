/**
 * Test for header component.
 *
 * @package
 */

/**
 * External dependencies
 */
import renderer from 'react-test-renderer';

/**
 * Internal dependencies
 */
import Home from '../index';

describe( 'Test Home Component', () => {
	it( 'Should match Home snapshot and render correctly', () => {
		const component = renderer.create( <Home /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
