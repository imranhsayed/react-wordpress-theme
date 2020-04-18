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
import Header from '../index';

describe( 'Test Header Component', () => {
	it( 'Should match Header snapshot and render correctly', () => {
		const component = renderer.create( <Header /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
