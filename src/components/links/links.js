import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LogoWhite from '../../assets/logo-white.svg';
import LogoBlack from '../../assets/logo-black.svg';

const LinksWrapper = styled.nav`
	width: fit-content;
	margin: ${(props) => props.margin};
`;

const LinksLink = styled(Link)`
	color: ${(props) => props.color};
	font-size: 0.75rem;
	line-height: 1.0625rem;
	text-decoration: none;
	transition: opacity 0.15s ease;
	&:not(:first-of-type) {
		margin-left: 40px;
	}
	&:hover,
	&.active {
		color: ${(props) => props.color};
		opacity: 0.5;
	}
`;

const Links = ({ margin, color }) => {
	const activeLink = useLocation().pathname;

	const links = [
		{ to: '/', text: 'Coffee house' },
		{ to: '/ourcoffee', text: 'Our coffee' },
		{ to: '/forpleasure', text: 'For your pleasure' },
	];

	return (
		<LinksWrapper margin={margin}>
			<img src={color === 'white' ? LogoWhite : LogoBlack} alt='logo' />
			{links.map((link) => (
				<LinksLink
					to={link.to}
					color={color}
					className={activeLink === link.to ? 'active' : ''}
					key={link.to}
					onClick={() => window.scrollTo(0, 0)}
				>
					{link.text}
				</LinksLink>
			))}
		</LinksWrapper>
	);
};

export default Links;
