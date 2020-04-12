/**
 * Header Component.
 *
 * @package react-wordpress-theme
 */

import { Helmet } from 'react-helmet';
import config from "../../../client-config";

/**
 * Header
 */
const Header = ( props ) => {

	const { headerData: { data }, loading, error }                              = props;
	const { siteLogoUrl, siteTitle, siteDescription, favicon, headerMenuItems } = data.header;

	console.warn( headerMenuItems );


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
				{ siteLogoUrl ? <img src={ siteLogoUrl } alt="Site Logo URL"/> : '' }

				<div className="site-info">

					{/*Site title*/ }
					{ siteTitle ? <h1 className="site-title">{ siteTitle }</h1> :
						<h1 className="site-title">{ config.siteTitle }</h1> }

					{/*Site description*/ }
					{ siteDescription ? <p className="site-description">{ siteDescription }</p> :
						<p className="site-description">{ config.siteDescription }</p> }

				</div>

			</div>
			<nav className="header-nav">
				{ Object.keys( headerMenuItems ).length ? (
					<ul className="header-nav__wrap">
						{ headerMenuItems.map( ( menu ) => {
							return (
								<li key={ menu.ID } className="header-nav__menu-item">
									{ menu.title }
									{ menu.children.length ? (
										<ul className="header-nav__submenu">
											{ menu.children.map( subMenu => ( <li className="header-nav__submenu-item" key={ subMenu.ID }>{ subMenu.title }</li> ) ) }
										</ul>
									) : '' }
								</li>
							)
						} ) }
					</ul>
				) : '' }
			</nav>
		</div>
	);
};

export default Header;
