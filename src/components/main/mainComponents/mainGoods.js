import { Component } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { Carousel } from 'react-bootstrap';

import MainGoodsFilter from './mainGoodsFilter';
import MainGoodsItem from './mainGoodsItem';

import { items } from '../../../db';

const MainGoodsWrapper = styled.section`
	margin: 0 auto;
`;

const GoodsWrapper = styled(Carousel)`
	margin: 0 auto;
	width: 55.5%;
	.carousel-inner {
		overflow: visible;
	}
	.carousel-item {
		opacity: 0;
		transition: opacity 0.5s ease-in-out !important;
		&.active {
			opacity: 1;
			transition: opacity 0.1s ease-in-out !important;
		}
	}
	.carousel-indicators {
		margin-bottom: -3rem;
	}
	.carousel-control-next,
	.carousel-control-prev {
		width: 5%;
	}
	.carousel-control-next {
		right: -15%;
	}
	.carousel-control-prev {
		left: -15%;
	}
`;

const GoodsItem = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: ${(props) =>
		'repeat(' + props.goodsLength + ', 220px)'};
	gap: 20px 70px;
	justify-content: center;
	justify-items: center;
`;

const Phrase = styled.p`
	margin-top: 50px;
	font-size: 2rem;
	text-align: center;
`;

class MainGoods extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			goods: [],
			error: false,
			value: '',
			filter: '',
			activeIndex: 0,
		};
	}

	searchedGoods = (goods, value) => {
		if (!value || !goods) return goods;

		return goods.filter((good) => good.props.name.indexOf(value) > -1);
	};

	filteredGoods = (goods, filter) => {
		if (!goods || !filter) return goods;

		return goods.filter(
			(good) => good.props.country.toLowerCase() === filter
		);
	};

	onSearchUpdate = (value) => {
		this.setState({ value, activeIndex: 0 });
	};

	onFilterUpdate = (filter) => {
		this.setState({ filter, activeIndex: 0 });
	};

	getGoods = () => {
		this.setState(
			{
				loading: true,
			},
			() => {
				// axios('http://localhost:3000/items')
				// 	.then((data) =>
				// 		this.setState({
				// 			loading: false,
				// 			goods: data.data
				// 				.filter((item) => !item.best)
				// 				.map((item) => (
				// 					<MainGoodsItem {...item} key={item.id} />
				// 				)),
				// 		})
				// 	)
				// 	.catch((error) =>
				// 		this.setState({
				// 			loading: false,
				// 			error: error,
				// 		})
				// 	);

				this.setState({
					loading: false,
					goods: items.map((item) => (
						<MainGoodsItem {...item} key={item.id} />
					)),
				});
			}
		);
	};

	renderedGoods = (goods) => {
		const elements = [],
			wrapperSize = document.documentElement.scrollWidth,
			wrapperLength = Math.floor((wrapperSize * 55.5) / 100 / 270);

		let temp = [];

		goods.forEach((good, index) => {
			temp.push(good);

			if (temp.length === wrapperLength * 2) {
				elements.push(
					<GoodsWrapper.Item key={index}>
						<GoodsItem goodsLength={wrapperLength}>
							{temp}
						</GoodsItem>
					</GoodsWrapper.Item>
				);
				temp = [];
			} else if (index === goods.length - 1) {
				elements.push(
					<GoodsWrapper.Item key={index}>
						<GoodsItem goodsLength={wrapperLength}>
							{temp}
						</GoodsItem>
					</GoodsWrapper.Item>
				);
			}
		});

		return elements;
	};

	onCarouselSelect = (activeIndex) => {
		this.setState({ activeIndex });
	};

	componentDidMount() {
		this.getGoods();
	}

	render() {
		const { loading, goods, error, value, filter, activeIndex } =
			this.state;

		const visibleGoods = this.filteredGoods(
			this.searchedGoods(goods, value),
			filter
		);

		return (
			<MainGoodsWrapper>
				{this.props.filter ? (
					<MainGoodsFilter
						onSearchUpdate={this.onSearchUpdate}
						onFilterUpdate={this.onFilterUpdate}
					/>
				) : (
					''
				)}
				{loading ? (
					<Phrase>Loading...</Phrase>
				) : error ? (
					<Phrase>Some problems you have</Phrase>
				) : !visibleGoods.join('') ? (
					<Phrase>We dont have any propositions, sorry</Phrase>
				) : (
					<GoodsWrapper
						variant='dark'
						fade
						interval={null}
						activeIndex={activeIndex}
						onSelect={this.onCarouselSelect}
					>
						{this.renderedGoods(visibleGoods)}
					</GoodsWrapper>
				)}
			</MainGoodsWrapper>
		);
	}
}

export default MainGoods;
