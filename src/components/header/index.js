/**
 * Header Component.
 *
 * @package react-wordpress-theme
 */

import { Helmet } from 'react-helmet';
import config from "../../../client-config";
import { useState, useEffect } from 'react';

/**
 * Header
 */
const Header = ( props ) => {

	const { headerData: { data }, loading, error } = props;
	const { siteLogoUrl, siteTitle, siteDescription, favicon, headerMenuItems } = data.header;
	const [menuVisible, setMenuVisibility] = useState( false );
	const [menuState, setMenuState] = useState( {} );

	useEffect( () => {
		if ( Object.keys( headerMenuItems ).length ) {

			const newMenuState = {};

			headerMenuItems.map( ( item ) => {
				newMenuState[ item.ID ] = { isOpen: false }
			} );

			setMenuState( newMenuState );
		}
	}, [] );

	console.warn( 'menu', menuState );

	return (
		<div className="header wrapper">
			<Helmet>
				<title>
					{ siteTitle ? siteTitle : config.siteTitle }
					-
					{ siteDescription ? siteDescription : config.siteDescription }
				</title>
				<link rel="icon" type="image/png" href={ favicon }/>
			</Helmet>
			<div className="logo-section">

				{/*Site logo*/ }
				{ siteLogoUrl ?
					<img className="site-logo" width="50" height="50" src={ siteLogoUrl } alt="Site Logo URL"/> : '' }

				<div className="site-info">

					{/*Site title*/ }
					{ siteTitle ? <h1 className="site-title">{ siteTitle }</h1> :
						<h1 className="site-title">{ config.siteTitle }</h1> }

					{/*Site description*/ }
					{ siteDescription ? <p className="site-description">{ siteDescription }</p> :
						<p className="site-description">{ config.siteDescription }</p> }

				</div>

			</div>
			<nav className={ `header-nav ${ menuVisible ? 'menu-visible' : 'menu-hidden' }` }>
				{ Object.keys( headerMenuItems ).length && Object.keys( menuState ).length ? (
					<ul className="header-nav__wrap">
						{ headerMenuItems.map( ( menu ) => {
							return (
								<li key={ menu.ID }
								    className={ `header-nav__menu-item ${ menu.children.length ? 'menu-has-children' : '' } ${ menuState[ menu.ID ].isOpen ? 'child-menu-open' : '' }` }
								    onClick={ () => setMenuState( {
									    ...menuState,
									    [ menu.ID ]: { isOpen: !menuState[ menu.ID ].isOpen }
								    } ) }
								>
									<a className="header-nav__menu-link" href="#">{ menu.title }</a>
									{ menu.children.length ? (
										<ul className={ `header-nav__submenu ${ menuState[ menu.ID ].isOpen ? 'child-menu-open' : '' }` }>
											{ menu.children.map( subMenu => (
												<li className="header-nav__submenu-item" key={ subMenu.ID }>
													<a className="header-nav__submenu-link"
													   href="#">{ subMenu.title }</a>
												</li> ) )
											}
										</ul>
									) : '' }
								</li>
							)
						} ) }
					</ul>
				) : '' }
			</nav>
			<span className="header-nav__menu-btn" onClick={ () => setMenuVisibility( !menuVisible ) }>☰</span>
		</div>
	);
};

export default Header;
