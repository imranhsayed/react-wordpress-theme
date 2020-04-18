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
import Footer from '../index';

describe( 'Test Footer Component', () => {
	it( 'Should match Footer snapshot and render correctly', () => {
		const component = renderer.create( <Footer /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
