import styled from 'styled-components';

import { Link } from 'react-router-dom';

import good1 from '../../../assets/goods/good1.png';
import good2 from '../../../assets/goods/good2.png';
import good3 from '../../../assets/goods/good3.png';

const Item = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 22px;
	height: 240px;
	width: 27.5%;
	background: rgba(255, 255, 255, 0.65);
	border-radius: 8px;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: #000;
	text-decoration: none;
	transition: opacity 0.15s ease;
	&:hover {
		color: #000;
		opacity: 0.7;
	}
`;

const ItemName = styled.p`
	margin: 10px 0;
`;

const ItemPrice = styled.p`
	text-align: end;
	font-weight: 700;
	margin: 0;
`;

const ItemImg = styled.div`
	text-align: center;
`;

const images = { good1, good2, good3 };

const OurBestGoodsItem = ({ name, imgName, price, weight, id }) => {
	return (
		<Item to={`/ourcoffee/${id}`}>
			<ItemImg>
				<img src={images[imgName]} alt='Product' />
			</ItemImg>
			<div>
				<ItemName>{name + ' ' + weight} kg</ItemName>
				<ItemPrice>{price}$</ItemPrice>
			</div>
		</Item>
	);
};

export default OurBestGoodsItem;
