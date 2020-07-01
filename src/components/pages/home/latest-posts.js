import config from '../../../../client-config';

const LatestPosts = ( props ) => {
	const { latestPostsSection } = props.data;

	return latestPostsSection ? (
		<div className="latest-posts-section">
			<div className="wrapper">
				<h2>
					{ latestPostsSection.latestPostHeading
						? latestPostsSection.latestPostHeading
						: config.latestPostHeading }
				</h2>
				{ latestPostsSection.latestPosts ? (
					<div className="latest-posts-section__wrap">
						{ latestPostsSection.latestPosts.map(
							( post, index ) => (
								<div
									key={ `${ post.id }-${ index }` }
									className="latest-post-section"
								>
									{ post.attachment_image.img_src ? (
										<div className="latest-post-section__img">
											<img
												src={
													post.attachment_image
														.img_src[ 0 ]
												}
												srcSet={
													post.attachment_image
														.img_srcset
												}
												alt={ post.title }
											/>
										</div>
									) : (
										<div className="latest-post-section__img">
											<img
												src={ config.defaultPostImage }
												alt="default"
											/>
										</div>
									) }
									<div className="latest-post-section__content">
										{ post.excerpt ? (
											<p className="latest-post-section__title" dangerouslySetInnerHTML={{ __html: post.excerpt }}/>
										) : (
											''
										) }
									</div>
								</div>
							)
						) }
					</div>
				) : (
					''
				) }
			</div>
		</div>
	) : (
		''
	);
};

export default LatestPosts;
