import styled from 'styled-components';

const SeparatorWrapper = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: ${props => props.margin};
`;

const SeparatorLine = styled.hr`
    color: #000;
    width: 60px;
    color: ${props => props.color};
`;

const SeparatorLogo = styled.img`
    display: block;
    margin: 0 25px;
`;

const Separator = ({color, margin}) => {
    return (
        <SeparatorWrapper margin={margin}>
            <SeparatorLine color={color} />
            <SeparatorLogo src={`./images/separator-logo-${color}.svg`} alt="logo" />
            <SeparatorLine color={color} />
        </SeparatorWrapper>
    );
};

export default Separator;