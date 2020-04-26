/**
 * Test for category component.
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
import Category from '../index';

describe( 'Test Category Component', () => {
	it( 'Should match Category snapshot and render correctly', () => {
		const component = renderer.create( <Category /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
