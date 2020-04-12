import Header from "../header";
import Footer from "../footer/footer";
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../client-config';

const Layout = ( props ) => {

	const [ data, setData ] = useState( null );
	const [ loading, setLoading ] = useState( false );
	const [ error, setError ] = useState( null );

	useEffect( () => {

		setLoading( true );

		axios.get( `${ config.siteURL }/wp-json/rae/v1/header-footer?header_location_id=${ config.headerMenuLocation }&footer_location_id=${ config.footerMenuLocation }` )
			.then( function ( response ) {

				// Handle success.
				if ( 200 === response.data.status ) {
					setData( response.data.data );
				}

				setLoading( false );

			} )
			.catch( function ( error ) {

				// Handle error.
				if ( 404 === error.response.data.data.status ) {
					setError( error.response.data.message );
				}

				setLoading( false );

			} )
	}, [] );

	return (
		<div>
			{ null !== data ? <Header headerData={ { data, loading, error } }/> : '' }
			{ props.children }
			{ null !== data ? <Footer footerData={ { data, loading, error } }/> : '' }
		</div>
	)

};

export default Layout;
