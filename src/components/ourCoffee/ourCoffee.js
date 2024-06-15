import styled from 'styled-components';

import { default as OurCoffeeHeader } from '../header/header';
import { default as OurCoffeeMain } from '../main/main';
import { default as OurCoffeeFooter } from '../footer/footer';

import OurCoffeeMainInfo from '../../assets/our-coffee-main-info.png';
import OurCoffeeHeaderBg from '../../assets/our-coffee-header-bg.png';

const OurCoffeeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const OurCoffee = () => {
	const infoText = `
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions.
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.`;

	const infoTitle = 'About our beans';

	return (
		<OurCoffeeWrapper>
			<OurCoffeeHeader text='Our Coffee' imgSrc={OurCoffeeHeaderBg} />
			<OurCoffeeMain
				filter
				infoText={infoText}
				infoImgSrc={OurCoffeeMainInfo}
				infoTitle={infoTitle}
			/>
			<OurCoffeeFooter />
		</OurCoffeeWrapper>
	);
};

export default OurCoffee;
