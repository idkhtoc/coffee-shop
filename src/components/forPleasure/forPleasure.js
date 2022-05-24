import styled from 'styled-components';

import { default as ForPleasureHeader } from "../header/header";
import { default as ForPleasureMain } from "../main/main";
import { default as ForPleasureFooter} from "../footer/footer";

const ForPleasureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ForPleasure = () => {
    const infoText = `
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions.
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.`;

    const infoImgSrc = "../../images/for-pleasure-main-info.png";

    const infoTitle = "About our beans";

    return (
        <ForPleasureWrapper>
            <ForPleasureHeader text="For your pleasure" imgSrc="../../images/for-pleasure-header-bg.png" />
            <ForPleasureMain infoText={infoText} infoImgSrc={infoImgSrc} infoTitle={infoTitle} />
            <ForPleasureFooter/>
        </ForPleasureWrapper>
    );
};

export default ForPleasure;