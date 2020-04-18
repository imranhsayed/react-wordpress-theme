import { useEffect, useState } from "react";


const Nav = ( props ) => {

	const { headerMenuItems } = props;

	const [ menuVisible, setMenuVisibility] = useState( false );
	const [ menuState, setMenuState] = useState( {} );

	useEffect( () => {
		if ( Object.keys( headerMenuItems ).length ) {

			const newMenuState = {};

			headerMenuItems.map( ( item ) => {
				newMenuState[ item.ID ] = { isOpen: false }
			} );

			setMenuState( newMenuState );
		}
	}, [] );

	const handleSubMenuOpen = ( event, parentMenuId ) => {

		event.stopPropagation();

		setMenuState( {
			...menuState,
			[ parentMenuId ]: { isOpen: ! menuState[ parentMenuId ].isOpen }
		} );
	};

	return (
		<>
			<nav className={ `header-nav ${ menuVisible ? 'menu-visible' : 'menu-hidden' }` }>
				{ Object.keys( headerMenuItems ).length && Object.keys( menuState ).length ? (
					<ul className="header-nav__wrap">
						{ headerMenuItems.map( ( menu ) => {
							return (
								<li key={ menu.ID }
								    className={ `header-nav__menu-item ${ menu.children.length ? 'menu-has-children' : '' } ${ menuState[ menu.ID ].isOpen ? 'child-menu-open' : '' }` }
								>
									{/* Parent Menu */}
									<a className="header-nav__menu-link" href="#">{ menu.title }</a>

									{/* Open Menu Button */}
									<span className="header-nav__toggle-menu-btn" onClick={ ( event ) => handleSubMenuOpen( event, menu.ID ) }></span>

									{/* Child Menu */}
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
		</>
	)
};

export default Nav;
