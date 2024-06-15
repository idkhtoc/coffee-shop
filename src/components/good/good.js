import styled from 'styled-components';

import { default as GoodHeader } from '../header/header';
import GoodMain from './goodComponents/goodMain';
import { default as GoodFooter } from '../footer/footer';

import OurCoffeeHeaderBg from '../../assets/our-coffee-header-bg.png';

const GoodWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Good = () => {
	return (
		<GoodWrapper>
			<GoodHeader text='Our Coffee' imgSrc={OurCoffeeHeaderBg} />
			<GoodMain />
			<GoodFooter />
		</GoodWrapper>
	);
};

export default Good;
