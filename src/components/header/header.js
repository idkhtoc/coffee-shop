import styled from 'styled-components';

import Links from '../links/links';

const HeaderWrapper = styled.header`
	flex: 0 0 auto;
	width: 100%;
	padding: 30px 150px 85px;
	margin: 0 auto;
	background: url(${(props) => props.imgSrc}) fixed no-repeat;
	background-size: 100%;
`;

const HeaderTitle = styled.h1`
	color: #fff;
	margin-top: 60px;
	text-align: center;
	font-size: 2.5rem;
	line-height: 3.625rem;
`;

const Header = ({ text, imgSrc }) => {
	return (
		<HeaderWrapper imgSrc={imgSrc}>
			<Links color='white' />
			<HeaderTitle>{text}</HeaderTitle>
		</HeaderWrapper>
	);
};

export default Header;
