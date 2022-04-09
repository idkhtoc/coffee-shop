import styled from "styled-components";

import Links from "../links/links";
import Separator from "../separator/separator";

const FooterWrapper = styled.footer`
    padding: 30px 0 20px;
    flex: 0 0 auto;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Links color="black" margin="0 auto 30px" />
            <Separator color="black" margin="0 auto" />
        </FooterWrapper>
    );
};

export default Footer;