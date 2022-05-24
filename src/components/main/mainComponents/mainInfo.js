import styled from "styled-components";

import Separator from "../../separator/separator";

const InfoWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 50%;
    justify-content: space-between;
`;

const InfoImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoImg = styled.img`
    width: fit-content;
    height: fit-content;
`;

const InfoTextWrapper = styled.div`
    width: 50%;
    padding: 8px 0 55px;
    text-align: center;
    color: #000;
    h2 {
        font-size: 1.5rem;
        line-height: 2.1875rem;
        font-weight: 400;
    }
`;

const MainInfo = ({infoTitle, infoText, infoImgSrc}) => {
    return (
        <section>
            <InfoWrapper>
                <InfoImgWrapper>
                    <InfoImg src={infoImgSrc} alt={infoTitle} />
                </InfoImgWrapper>
                <InfoTextWrapper>
                    <h2>{infoTitle}</h2>
                    <Separator color="black" margin="20px auto 25px" />
                    <p>{infoText}</p>
                </InfoTextWrapper>
            </InfoWrapper>
        </section>
    );
}

export default MainInfo;