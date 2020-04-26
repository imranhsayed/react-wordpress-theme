import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import config from '../../../../client-config';
import Hero from './hero';
import Search from './search';
import FeaturedPosts from './featured-posts';
import LatestPosts from './latest-posts';
import Error from '../../error';

const Home = () => {
	/* eslint-disable no-unused-vars */
	const [ data, setData ] = useState( null );
	const [ loading, setLoading ] = useState( false );
	const [ errorMsg, setError ] = useState( null );
	const isMountedRef = useRef( null );
	/* eslint-enable */

	const getHomeData = () => {
		axios
			.get(
				`${ config.siteURL }/wp-json/rae/v1/home?post_type=${ config.homePagePostType }&taxonomy=${ config.homePageTaxonomy }`
			)
			.then( ( response ) => {
				// Handle success.
				if ( 200 === response.data.status ) {
					if ( isMountedRef.current ) {
						setData( response.data.data );
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
	}, [] );

	return (
		<>
			{ null !== data ? (
				<>
					<Hero data={ data } />
					<Search data={ data } />
					<FeaturedPosts data={ data } />
					<LatestPosts data={ data } />
				</>
			) : (
				<Error message={ errorMsg } />
			) }
		</>
	);
};

export default Home;
