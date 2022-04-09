import styled from "styled-components";

import AppHeader from "./appComponents/appHeader";
import AppMain from "./appComponents/appMain";
import Footer from "../footer/footer";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const App = () => {
    return (
        <AppWrapper>
            <AppHeader/>
            <AppMain/>
            <Footer/>
        </AppWrapper>
    );
}

export default App;