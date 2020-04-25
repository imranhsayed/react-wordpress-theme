import Layout from '../../layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../../client-config';

/**
 * Category page, displays the posts related to the given slug in URL.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Category = ( props ) => {
	// Category slug available in the URL.
	const { slug } = props;

	/* eslint-disable no-unused-vars */
	const [ data, setData ] = useState( null );
	const [ loading, setLoading ] = useState( false );
	const [ errorMsg, setError ] = useState( null );
	/* eslint-enable */

	useEffect( () => {
		setLoading( true );

		axios
			.get(
				`${ config.siteURL }/wp-json/wp/v2/pages?_embed&slug=${ slug }`
			)
			.then( ( response ) => {
				// Handle success.
				if ( 200 === response.status ) {
					setData( response.data[ 0 ] );
				}

				setLoading( false );
			} )
			.catch( ( error ) => {
				// Handle error.
				if ( 404 === error.response.data.data.status ) {
					setError( error.response.data.message );
				}

				setLoading( false );
			} );
	}, [ slug ] );

	return <Layout>{ props.uri }</Layout>;
};

export default Category;
