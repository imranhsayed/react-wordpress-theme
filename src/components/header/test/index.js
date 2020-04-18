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
		const headerData = {
			data: {
				header: {
					siteLogoUrl: '',
					siteTitle: '',
					siteDescription: '',
					favicon: '',
					headerMenuItems: '',
				},
			},
			loading: false,
			errorMsg: '',
		};

		const component = renderer.create(
			<Header headerData={ headerData } />
		);

		const tree = component.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
