/**
 * Test for NotFound component.
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
import NotFound from '../index';

describe( 'Test NotFound Component', () => {
	it( 'Should match NotFound snapshot and render correctly', () => {
		const component = renderer.create( <NotFound /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
