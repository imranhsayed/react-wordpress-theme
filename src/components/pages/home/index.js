import Layout from '../../layout';
import { useState, useEffect } from 'react';
import axios from "axios";
import config from "../../../../client-config";
import Hero from "./hero";
import Error from "../../error";

const Home = () => {
	const [ data, setData ] = useState( null );
	const [ loading, setLoading ] = useState( false );
	const [ errorMsg, setError ] = useState( null );

	const homePagePostType = config.homePagePostType ? config.homePagePostType : 'post';
	const homePageTaxonomy = config.homePageTaxonomy ? config.homePageTaxonomy : 'category';

	useEffect( () => {
		setLoading( true );

		axios
			.get(
				`${ config.siteURL }/wp-json/rae/v1/home?home?post_type=${ config.homePagePostType }&taxonomy=${ config.homePageTaxonomy }`
			)
			.then( ( response ) => {
				// Handle success.
				if ( 200 === response.data.status ) {
					setData( response.data.data );
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
	}, [] );

	return (
		<Layout>
			{ null !== data ? (
				<>
					<Hero data={ data }/>
				</>
			) : <Error message={ errorMsg }/> }
		</Layout>
	);
};

export default Home;
