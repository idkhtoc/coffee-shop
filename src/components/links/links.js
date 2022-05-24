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
    transition: opacity .15s ease;
    &:not(:first-of-type) {
        margin-left: 40px;
    }
    &:hover, &.active {
        color: ${props => props.color};
        opacity: .5;
    }
`;

const Links = ({margin, color}) => {
    const activeLink = window.location.pathname;
    
    const links = [
        {to: '/', text: 'Coffee house'},
        {to: '/ourcoffee', text: 'Our coffee'},
        {to: '/forpleasure', text: 'For your pleasure'}
    ];

    return (
        <LinksWrapper margin={margin}>
            <img src={`../../images/logo-${color}.svg`} alt="logo" /> 
            {
                links.map(link => (
                    <LinksLink 
                        to={link.to} 
                        color={color}
                        className={activeLink === link.to ? 'active' : ''}
                        key={link.to}
                        onClick={() => {document.documentElement.getBoundingClientRect().top = 0}}
                    >
                        {link.text}
                    </LinksLink>
                ))
            }
        </LinksWrapper>
    );
}

export default Links;