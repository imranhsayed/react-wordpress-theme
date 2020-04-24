import '../../images/footer/footer-background.png';
import config from "../../../client-config";
import { Link } from "@reach/router";


/**
 * Footer
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */
const Footer = ( props ) => {

	const { data, loading, errorMsg } = props.footerData;
	const { copyrightText, footerMenuItems, socialLinks, sidebarOne, sidebarTwo } = data.footer;

	return (
		<div className="footer">

			<div className="wrapper">
				{/*Top section*/}
				<div className="footer__top">
					{ sidebarOne ? <div  dangerouslySetInnerHTML={ { __html: sidebarOne } } className="footer__sidebar-one"/> : '' }
					{ sidebarTwo ? <div  dangerouslySetInnerHTML={ { __html: sidebarTwo } } className="footer__sidebar-two"/> : '' }
					{
						footerMenuItems.length ? (
							<div className="footer-menu-items">
								{ config.footerMenuTitle ? <h6>{ config.footerMenuTitle }</h6> : '' }
								<ul>
									{ footerMenuItems.map( menu  => (
										<li key={ menu.ID }>
											<Link
												className="header-nav__menu-link"
												to={ `/${ menu.pageSlug }` }
											>
												<i className="fa fa-chevron-right"/>
												{ menu.title }
											</Link>
										</li>
									)) }
								</ul>
							</div>
						) : ''
					}
				</div>

				{/*	Bottom section*/}
				<div className="footer__bottom">
					{ copyrightText ? <div className="copyright-text">{ copyrightText }</div> : config.copyrightText }
					{
						socialLinks.length ?
							<ul className="social-links">
								{ socialLinks.map( socialLink => (
									<li key={ socialLink.iconName }>
										<a href={ socialLink.iconUrl } target="_blank">
											<i className={ `fa fa-${socialLink.iconName}` }/>
										</a>
									</li>
								) ) }
							</ul> :
							''
					}
				</div>
			</div>
		</div>
	);
};

export default Footer;
