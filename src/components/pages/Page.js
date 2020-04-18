import Layout from '../layouts/layout';

const Page = ( props ) => {
	
	console.warn( 'uri', props );

	return <Layout>{ props.uri }</Layout>;
};

export default Page;
