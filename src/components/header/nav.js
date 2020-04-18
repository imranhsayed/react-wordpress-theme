import { useEffect, useState } from 'react';
import { Link } from '@reach/router';

const Nav = ( props ) => {
	const { headerMenuItems } = props;

	const [menuVisible, setMenuVisibility] = useState( false );
	const [menuState, setMenuState]        = useState( {} );

	useEffect( () => {
		if ( Object.keys( headerMenuItems ).length ) {
			const newMenuState = {};

			headerMenuItems.map( ( item ) => {
				newMenuState[ item.ID ] = { isOpen: false };
			} );

			setMenuState( newMenuState );
		}
	}, [] );

	const handleSubMenuOpen = ( event, parentMenuId ) => {
		event.stopPropagation();

		setMenuState( {
			...menuState,
			[ parentMenuId ]: { isOpen: !menuState[ parentMenuId ].isOpen },
		} );
	};

	console.warn( props );

	return (
		<>
			<nav
				className={ `header-nav ${
					menuVisible ? 'menu-visible' : 'menu-hidden'
				}` }
			>
				{ Object.keys( headerMenuItems ).length &&
				Object.keys( menuState ).length ? (
					<ul className="header-nav__wrap">
						{ headerMenuItems.map( ( menu ) => {

							console.warn( 'menutit', menu.title );

							return (
								<li
									key={ menu.ID }
									className={ `header-nav__menu-item ${
										menu.children.length
											? 'menu-has-children'
											: ''
									} ${
										menuState[ menu.ID ].isOpen
											? 'child-menu-open'
											: ''
									}` }
								>
									{ /* Parent Menu */ }
									<Link
										className="header-nav__menu-link"
										to={ `/${ menu.title.toLowerCase() }` }
									>
										{ menu.title }
									</Link>

									{ /* Open Menu Button */ }
									<span
										className="header-nav__toggle-menu-btn"
										onClick={ ( event ) =>
											handleSubMenuOpen( event, menu.ID )
										}
									></span>

									{ /* Child Menu */ }
									{ menu.children.length ? (
										<ul
											className={ `header-nav__submenu ${
												menuState[ menu.ID ].isOpen
													? 'child-menu-open'
													: ''
											}` }
										>
											{ menu.children.map(
												( subMenu ) => (
													<li
														className="header-nav__submenu-item"
														key={ subMenu.ID }
													>
														<Link
															className="header-nav__submenu-link"
															to={ `/${ subMenu.title.toLowerCase() }`}
														>
															{ subMenu.title }
														</Link>
													</li>
												)
											) }
										</ul>
									) : (
										''
									) }
								</li>
							);
						} ) }
					</ul>
				) : (
					''
				) }
			</nav>
			<span
				className="header-nav__menu-btn"
				onClick={ () => setMenuVisibility( !menuVisible ) }
			>
				☰
			</span>
		</>
	);
};

export default Nav;
