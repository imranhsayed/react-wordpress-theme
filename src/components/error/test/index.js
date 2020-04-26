/**
 * Test for error component.
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
import Error from '../index';

describe( 'Test Error Component', () => {
	it( 'Should match Error snapshot and render correctly', () => {
		const component = renderer.create( <Error /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
