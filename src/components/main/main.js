import styled from "styled-components";

import MainInfo from "./mainComponents/mainInfo";
import SeparatorLine from "../separatorLine/separatorLine";
import MainGoods from "./mainComponents/mainGoods";

const MainWrapper = styled.main`
    flex: 1 0 auto;
    padding: 70px 0 30px;
`;

const Main = ({infoTitle, infoText, infoImgSrc, filter}) => {
    return (
        <MainWrapper>
            <MainInfo 
                infoTitle={infoTitle} 
                infoText={infoText} 
                infoImgSrc={infoImgSrc} 
            />
            <SeparatorLine color="black" margin="60px auto" />
            <MainGoods filter={filter} />
        </MainWrapper>
    );
};

export default Main;