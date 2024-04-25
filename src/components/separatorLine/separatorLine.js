import styled from 'styled-components';

const LineHr = styled.hr`
	color: ${(props) => props.color};
	width: 240px;
	margin: ${(props) => props.margin};
`;

const SeparatorLine = ({ color, margin }) => {
	return <LineHr color={color} margin={margin} />;
};

export default SeparatorLine;
