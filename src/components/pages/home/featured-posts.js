import config from "../../../../client-config";
import { Link } from '@reach/router';
import '../../../images/default/default.jpg';

const FeaturedPosts = ( props ) => {

	const { featuredPostsSection } = props.data;

	return (
		featuredPostsSection ? (
			<div className="featured-posts-section">
				<div className="wrapper">
				<h2>{ featuredPostsSection.featuredPostHeading ? featuredPostsSection.featuredPostHeading : config.featuredPostHeading }</h2>
				{ featuredPostsSection.featuredPosts ? (
					<div className="featured-posts-section__wrap">
						{ featuredPostsSection.featuredPosts.map( ( post, index ) => (
							<div key={ `${ post.id }-${ index }` } className="featured-post-section">
								{ post.attachment_image.img_src ?
									<div className="featured-post-section__img"><img src={ post.attachment_image.img_src[0] } srcSet={ post.attachment_image.img_srcset } alt={ post.title }/></div> :
									<div className="featured-post-section__img">
										<img src={ config.defaultPostImage }  alt={ post.title }/>
									</div> }
									<div className="featured-post-section__content">
										{ post.title ? <h3>{ post.title }</h3>: '' }
										{ post.excerpt ? <p className="featured-post-section__content-paragraph">{ post.excerpt }</p>: '' }
										<div className="featured-post-section__meta">
											{ post.date ? <span className="featured-post-section__date">{ post.date }</span>: '' }
											<Link className="featured-post-section__read-more" to={ `/post/${ post.slug }` }>Read More</Link>
										</div>
									</div>

							</div>
						) ) }
					</div>
				): '' }
				</div>
			</div>
		) : ''
	)
};

export default FeaturedPosts;
