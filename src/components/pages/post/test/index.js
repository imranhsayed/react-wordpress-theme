/**
 * Test for post component.
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
import Post from '../index';

describe( 'Test Post Component', () => {
	it( 'Should match Post snapshot and render correctly', () => {
		const component = renderer.create( <Post /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
