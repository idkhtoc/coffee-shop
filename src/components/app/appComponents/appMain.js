import styled from "styled-components";

import AppMainAboutUs from "./appMainAboutUs";
import AppMainOurBest from "./appMainOurBest";

const MainWrapper = styled.main`
    flex: 1 0 auto;
`;

const AppMain = () => {
    return (
        <MainWrapper>
            <AppMainAboutUs/>
            <AppMainOurBest/>
        </MainWrapper>
    );
};

export default AppMain;