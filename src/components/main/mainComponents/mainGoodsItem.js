import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    max-width: 220px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 8px;
    font-size: .875rem;
    line-height: 1.25rem;
    color: #000;
    text-decoration: none;
    transition: opacity .15s ease;
    &:hover {
        color: #000;
        opacity: .7;
    }
`;

const ItemName = styled.p`
    margin: 15px 0;
`;

const ItemCountry = styled.p`
    margin: 0;
    text-align: end;
`;

const ItemPrice = styled.p`
    text-align: end;
    font-weight: 700;
    margin: 14px 0 0;
`;

const ItemImg = styled.div`
    text-align: center;
`;


const MainGoodsItem = ({ name, src, price, weight, country, id }) => {
    return (
        <Item to={`../ourcoffee/good/${id}`}>
            <ItemImg>
                <img src={src} alt="Product" />
            </ItemImg>
            <div>
                <ItemName>
                    {name + ' ' + weight} kg
                </ItemName>
                <ItemCountry>
                    {country}
                </ItemCountry>
                <ItemPrice>
                    {price}$
                </ItemPrice>
            </div>
        </Item>
    );
};

export default MainGoodsItem;