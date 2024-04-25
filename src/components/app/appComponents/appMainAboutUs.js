import styled from 'styled-components';
import Separator from '../../separator/separator';

const AboutUsWrapper = styled.section`
	padding: 80px 0 100px;
	text-align: center;
`;

const AboutUsTitle = styled.h2`
	color: #000;
	font-size: 1.5rem;
	line-height: 2.1875rem;
`;

const AboutUsText = styled.p`
	margin: 0 auto;
	width: 41%;
	text-align: center;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: #000;
`;

const AppMainAboutUs = () => {
	return (
		<AboutUsWrapper>
			<AboutUsTitle>About Us</AboutUsTitle>
			<Separator color='black' margin='20px auto 40px' />
			<AboutUsText>
				Extremity sweetness difficult behaviour he of. On disposal of as
				landlord horrible. Afraid at highly months do things on at.
				Situation recommend objection do intention so questions. As
				greatly removed calling pleased improve an. Last ask him cold
				feel met spot shy want. Children me laughing we prospect
				answered followed. At it went is song that held help face.
				<br />
				<br />
				Now residence dashwoods she excellent you. Shade being under his
				bed her, Much read on as draw. Blessing for ignorant exercise
				any yourself unpacked. Pleasant horrible but confined day end
				marriage. Eagerness furniture set preserved far recommend. Did
				even but nor are most gave hope. Secure active living depend son
				repair day ladies now.
			</AboutUsText>
		</AboutUsWrapper>
	);
};

export default AppMainAboutUs;
