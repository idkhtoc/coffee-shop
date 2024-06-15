import styled from 'styled-components';

import AppMainOurBestBg from '../../../assets/app-main-ourbest-bg.png';

import OurBestGoods from './ourBestGoods';

const OurBestWrapper = styled.section`
	padding: 80px 0 110px;
	text-align: center;
	background: url('${AppMainOurBestBg}') no-repeat;
	background-size: 100%;
	width: 100%;
`;

const OurBestTitle = styled.h2`
	font-size: 1.5rem;
	color: #000;
	line-height: 2.1875rem;
`;

const AppMainOurBest = () => {
	return (
		<OurBestWrapper>
			<OurBestTitle>Our best</OurBestTitle>
			<OurBestGoods />
		</OurBestWrapper>
	);
};

export default AppMainOurBest;
