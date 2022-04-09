import styled from "styled-components";
import { Link } from "react-router-dom";

import Links from "../../links/links";
import Separator from "../../separator/separator";

const AppHeaderWrapper = styled.header`
    flex: 0 0 auto;
    width: 100%;
    padding: 30px 150px 200px;
    margin: 0 auto;
    background: url("./images/app-header-bg.png") fixed no-repeat;
    background-size: 100%;
`;

const InfoWrapper = styled.div`
    margin: 110px auto 0;
    text-align: center;
    width: fit-content;
    font-weight: 700;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InfoTitle = styled.h1`
    font-size: 2.5rem;
    line-height: 3.625rem;
`;

const InfoText = styled.p`
    font-size: 1.5rem;
    line-height: 2.1875rem;
    margin-bottom: 20px;
`;

const InfoButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 1px solid #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    width: 120px;
    height: 30px;
    font-size: .875rem;
    line-height: 1.25rem;
    color: #fff;
    text-decoration: none;
    &:hover {
        color: #fff; 
    }
`;

const AppHeader = () => {
    return (
        <AppHeaderWrapper>
            <Links color="white" />
            <InfoWrapper>
                <InfoTitle>Everything You Love About Coffee</InfoTitle>
                <Separator color="white" margin="20px auto 35px" />
                <div>
                    <InfoText>We makes every day full of energy and taste</InfoText>
                    <InfoText>Want to try our beans?</InfoText>
                </div>
                <InfoButton to="/ourcoffee">More</InfoButton>
            </InfoWrapper>
        </AppHeaderWrapper>
    );
};

export default AppHeader;