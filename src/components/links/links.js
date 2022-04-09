import styled from "styled-components";

import { Link } from "react-router-dom";

const LinksWrapper = styled.nav`
    width: fit-content;
    margin: ${props => props.margin};
`;

const LinksLink = styled(Link)`
    color: ${props => props.color};
    font-size: .75rem;
    line-height: 1.0625rem;
    text-decoration: none;
    &:not(:first-of-type) {
        margin-left: 40px;
    }
    &:hover {
        color: ${props => props.color};
    }
`;

const Links = ({color, margin}) => {
    return (
        <LinksWrapper margin={margin}>
            <img src={`./images/logo-${color}.svg`} alt="logo" /> 
            <LinksLink to="/" color={color}>Coffee house</LinksLink>
            <LinksLink to="/ourcoffee" color={color}>Our coffee</LinksLink>
            <LinksLink to="/forpleasure" color={color}>For your pleasure</LinksLink>
        </LinksWrapper>
    );
}

export default Links;