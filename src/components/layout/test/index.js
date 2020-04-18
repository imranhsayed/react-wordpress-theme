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
import Layout from '../index';

describe( 'Test Layout Component', () => {
	it( 'Should match Layout snapshot and render correctly', () => {
		const component = renderer.create( <Layout /> );

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
