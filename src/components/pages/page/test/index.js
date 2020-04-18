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
import Page from '../index';

describe( 'Test Page Component', () => {
	it( 'Should match Page snapshot and render correctly', () => {
		const component = renderer.create( <Page /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
