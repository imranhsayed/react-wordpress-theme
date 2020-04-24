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
		const data = {
			footer: {
				copyrightText: '',
				footerMenuItems: '',
				socialLinks: [],
				sidebarTwo: '',
				sidebarOne: '',
			},
		};
		const loading = false;
		const errorMsg = true;

		const component = renderer.create(
			<Footer footerData={ { data, loading, errorMsg } } />
		);

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
