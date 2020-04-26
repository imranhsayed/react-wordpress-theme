import config from "../../../../client-config";
import { Link } from '@reach/router';
import '../../../images/home/search-background.png';

const Search = ( props ) => {

	const { searchSection } = props.data;
	const backgroundURL = searchSection.searchBackURL ? searchSection.searchBackURL : config.searchSection.searchBackURL;
	const placeholderText = searchSection.searchPlaceholderTxt ? searchSection.searchPlaceholderTxt : config.searchSection.searchPlaceholderTxt;

	return (
		searchSection ? (
			<div className="search-section" style={{ background: `url( ${ backgroundURL } )`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<form>
					<input type="search" placeholder={ placeholderText }/>
				</form>
				{ searchSection.terms ? (
					<div className="search-section__categories">
						{ searchSection.terms.map( ( term, index ) => (
							<div key={ term.termId } className="search-section__category">
								{
									term.image.img_srcset ?
										<div className="search-section__category-icon"><img src={ term.image.img_src[0] } alt={ term.name } srcSet={ term.image.img_srcset }/></div>
										: <div className="search-section__category-icon"><img src={ config.searchSection.images[ index ] }/></div>
								}
								{ term.name ? <Link to={ `/category/${term.slug}` }>{ term.name }</Link>: '' }
							</div>
						) ) }
					</div>
				): '' }
			</div>
		) : ''
	)
};

export default Search;
