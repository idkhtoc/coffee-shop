import styled from "styled-components";

import { default as OurCoffeeHeader } from "../header/header";
import { default as OurCoffeeMain } from "../main/main";
import { default as OurCoffeeFooter} from "../footer/footer";

const OurCoffeeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const OurCoffee = () => {
    const infoText = `
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions.
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.`;

    const infoImgSrc = "../../images/our-coffee3-main-info.png";

    const infoTitle = "About our beans"

    return (
        <OurCoffeeWrapper>
            <OurCoffeeHeader text="Our Coffee" imgSrc="../../images/our-coffee-header-bg.png" />
            <OurCoffeeMain filter infoText={infoText} infoImgSrc={infoImgSrc} infoTitle={infoTitle} />
            <OurCoffeeFooter/>
        </OurCoffeeWrapper>
    );
};

export default OurCoffee;