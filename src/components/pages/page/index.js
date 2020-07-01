import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import config from '../../../../client-config';
import './../../../images/default/default.jpg';

const Page = ( props ) => {
	// Page slug available in the URL.
	const { pageSlug } = props;

	/* eslint-disable no-unused-vars */
	const [ data, setData ] = useState( null );
	const [ loading, setLoading ] = useState( false );
	const [ errorMsg, setError ] = useState( null );
	const isMountedRef = useRef( null );
	/* eslint-enable */

	const getHomeData = () => {
		axios
			.get(
				`${ config.siteURL }/wp-json/wp/v2/pages?_embed&slug=${ pageSlug }`
			)
			.then( ( response ) => {
				// Handle success.
				if ( 200 === response.status ) {
					if ( isMountedRef.current ) {
						setData( response.data[ 0 ] );
					}
				}
			} )
			.catch( ( error ) => {
				// Handle error.
				if ( 404 === error.response.data.data.status ) {
					setError( error.response.data.message );
					setLoading( false );
				}
			} );
	};

	useEffect( () => {
		isMountedRef.current = true;
		setLoading( true );
		getHomeData();
		return () => ( isMountedRef.current = false );
	}, [ pageSlug ] );

	return (
		<>
			{ null !== data ? (
				<>
					<section className="page-content">
						{ data.title.rendered ? (
							<h2 dangerouslySetInnerHTML={{ __html: data.title.rendered  }}/>
						) : (
							''
						) }
						{ data._embedded[ 'wp:featuredmedia' ] ? (
							<img
								src={
									data._embedded[ 'wp:featuredmedia' ][ 0 ]
										.source_url
								}
								alt={ data.title.rendered }
							/>
						) : (
							<img
								src={ config.defaultPostImage }
								alt={ data.title.rendered }
							/>
						) }
						{ data.content.rendered ? (
							<div
								dangerouslySetInnerHTML={ {
									__html: data.content.rendered,
								} }
							/>
						) : (
							''
						) }
					</section>
					<aside className="aside"></aside>
				</>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Page;
