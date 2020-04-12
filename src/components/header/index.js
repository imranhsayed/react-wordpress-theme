/**
 * Header Component.
 *
 * @package react-wordpress-theme
 */

/**
 * Header
 */
const Header = ( props ) => {

	console.warn( 'props', props );
	
	return (
		<div className="header">
			<div className="logo-section"></div>
			<nav className="header-nav"></nav>
		</div>
	);
};

export default Header;
