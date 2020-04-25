import config from "../../../../client-config";
import { Link } from '@reach/router';
import '../../../images/default/post-default.png'

const FeaturedPosts = ( props ) => {

	const { featuredPostsSection } = props.data;

	return (
		featuredPostsSection ? (
			<div className="featured-posts-section">
				<h2>{ featuredPostsSection.featuredPostHeading ? featuredPostsSection.featuredPostHeading : config.featuredPostHeading }</h2>
				{ featuredPostsSection.featuredPosts ? (
					<div className="featured-posts-section__wrap">
						{ featuredPostsSection.featuredPosts.map( ( post, index ) => (
							<div key={ `${ post.id }-${ index }` } className="featured-post-section">
								{ post.attachment_image.img_src ?
									<div className="featured-post-section__img"><img src={ post.attachment_image.img_src[0] } srcSet={ post.attachment_image.img_srcset } alt={ post.title }/></div> :
									<div className="featured-post-section__img"><img src="/images/post-default.png" alt="default"/></div> }
									<div className="featured-post-section__content">
										{ post.title ? <h3>{ post.title }</h3>: '' }
										{ post.excerpt ? <p>{ post.excerpt }</p>: '' }
										<div className="featured-post-section__meta">
											{ post.date ? <span>{ post.date }</span>: '' }
											<Link to={ `post/${ post.slug }` }>Read More..</Link>
										</div>
									</div>

							</div>
						) ) }
					</div>
				): '' }
			</div>
		) : ''
	)
};

export default FeaturedPosts;
