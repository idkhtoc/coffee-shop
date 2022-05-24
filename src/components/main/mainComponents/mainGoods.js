import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Carousel } from "react-bootstrap";

import MainGoodsFilter from "./mainGoodsFilter";
import MainGoodsItem from "./mainGoodsItem";

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
        transition: opacity .5s ease-in-out !important;
        &.active {
            opacity: 1;
            transition: opacity .1s ease-in-out !important;
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
    justify-items: center;
    grid-template-columns: ${props => '1fr '.repeat(props.count > 2 ? 3 : props.count)};
    grid-template-rows: 1fr 1fr;
    row-gap: 60px;
    column-gap: 70px;
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
            activeIndex: 0
        };
    }

    searchedGoods = (goods, value) => {
        if (!value || !goods) return goods;

        return goods.filter(good => good.props.name.indexOf(value) > -1);
    }

    filteredGoods = (goods, filter) => {
        if (!goods || !filter) return goods;

        return goods.filter(good => good.props.country.toLowerCase() === filter);
    }

    onSearchUpdate = value => {
        this.setState({value, activeIndex: 0});
    }

    onFilterUpdate = filter => {
        this.setState({filter, activeIndex: 0});
    }

    getGoods = () => {
        this.setState({
                loading: true
            }, () => {
                axios("http://localhost:3000/items")
                    .then(data => this.setState({
                        loading: false,
                        goods: data.data.filter(item => !item.best)
                                        .map(item => <MainGoodsItem {...item} key={item.id} />)
                    }))
                    .catch(error => this.setState({
                        loading: false,
                        error: error
                    }));
            }
        );
    }

    renderedGoods = goods => {
        const elements = [];

        let temp = [];

        goods.forEach((good, index) => {
            temp.push(good);
            
            if ((index + 1) % 6 === 0 || index === goods.length - 1) {
                elements.push(
                    <GoodsWrapper.Item key={index}>
                        <GoodsItem count={temp.length}>
                            {temp}
                        </GoodsItem>
                    </GoodsWrapper.Item>
                );
                temp = [];
            }
        });

        return elements;
    }
    
    onCarouselSelect = activeIndex => {
        this.setState({activeIndex});
    }

    componentDidMount() {
        this.getGoods();
    }

    render() {
        const {loading, goods, error, value, filter, activeIndex} = this.state;
        
        const visibleGoods = this.filteredGoods((this.searchedGoods(goods, value)), filter);

        return (
            <MainGoodsWrapper>
                {
                    this.props.filter ? (
                        <MainGoodsFilter 
                            onSearchUpdate={this.onSearchUpdate}
                            onFilterUpdate={this.onFilterUpdate}
                        />
                    ) : ''
                }
                {
                    loading ? <Phrase>Loading...</Phrase> : 
                    error ? <Phrase>Some problems you have</Phrase> : 
                    !visibleGoods.join('') ? <Phrase>We dont have any propositions, sorry</Phrase> :
                    (
                        <GoodsWrapper variant="dark" fade interval={null} activeIndex={activeIndex} onSelect={this.onCarouselSelect}>
                            {this.renderedGoods(visibleGoods)}
                        </GoodsWrapper>
                    )
                }
            </MainGoodsWrapper>
        );
    }
}

export default MainGoods;