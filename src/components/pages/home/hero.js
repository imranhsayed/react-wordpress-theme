import config from "../../../../client-config";
import { Link } from '@reach/router';
import '../../../images/home/mountain-illustration.png';

const Hero = ( props ) => {

	const { heroSection } = props.data;

	return (
		heroSection ? (
			<div className="hero-section">
				<div className="hero-left">
					{ heroSection.heroTitle ? <h2>{ heroSection.heroTitle }</h2> : <h2>{ config.heroSection.heroTitle }</h2> }
					{ heroSection.heroDescription ? <p>{ heroSection.heroDescription }</p> : <p>{ config.heroSection.heroDescription }</p> }
					{ heroSection.heroBtnTxt ? <Link to="/blog"><button>{ heroSection.heroBtnTxt }</button></Link> : <Link to="/blog"><button>{ config.heroSection.heroBtnTxt }</button></Link> }
				</div>
				<div className="hero-right">
					{ heroSection.heroImgURL ? <img src={ heroSection.heroImgURL } alt="hero"/> : <img src={ config.heroSection.heroImgURL } alt="hero"/> }
				</div>
			</div>
		) : ''
	)
};

export default Hero;
