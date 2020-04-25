import config from "../../../../client-config";
import { Link } from '@reach/router';

const LatestPosts = ( props ) => {

	const { latestPostsSection } = props.data;

	return (
		latestPostsSection ? (
			<div className="latest-posts-section">
				<h2>{ latestPostsSection.latestPostHeading ? latestPostsSection.latestPostHeading : config.latestPostHeading }</h2>
				{ latestPostsSection.latestPosts ? (
					<div className="latest-posts-section__wrap">
						{ latestPostsSection.latestPosts.map( ( post, index ) => (
							<div key={ `${ post.id }-${ index }` } className="featured-post-section">
								{ post.attachment_image.img_src ?
									<div className="featured-post-section__img"><img src={ post.attachment_image.img_src[0] } srcSet={ post.attachment_image.img_srcset } alt={ post.title }/></div> :
									<div className="featured-post-section__img"><img src={ config.defaultPostImage } alt="default"/></div> }
								<div className="featured-post-section__content">
									{ post.excerpt ? <p>{ post.excerpt }</p>: '' }
								</div>

							</div>
						) ) }
					</div>
				): '' }
			</div>
		) : ''
	)
};

export default LatestPosts;
