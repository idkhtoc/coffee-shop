import { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import axios from "axios";

import OurBestGoodsItem from "./ourBestGoodsItem";

const GoodsWrapper = styled(Carousel)`
    margin: 40px auto 0;
    .carousel-indicators {
        margin-bottom: -2rem;
    }
    .carousel-control-next,
    .carousel-control-prev {
        width: 5%;
    }
    .carousel-control-next {
        right: 15%;
    }
    .carousel-control-prev {
        left: 15%;
    }
`;

const GoodsItem = styled.div`
    display: flex;
    justify-content: center;
    width: 55.5%;
    margin: 20px auto;
`;

const Phrase = styled.p`
    margin-top: 50px;
    font-size: 2rem;
    text-align: center;
`;

class OurBestGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: [],
            error: null
        }
    }

    componentDidMount() {
        this.setState({
                loading: true
            }, () => {
                axios("http://localhost:3000/items")
                    .then(data => this.setState({
                        loading: false,
                        items: data.data.filter(item => item.best)
                                        .map(item => <OurBestGoodsItem {...item}/>)
                    }))
                    .catch(error => this.setState({
                        loading: false,
                        error: error
                    }));
            }
        );
    }

    renderItems = () => {
        const elements = [];

        let temp = [];

        this.state.items.forEach((item, index) => {
            temp.push(item);
            
            if ((index + 1) % 3 === 0 || index === this.state.items.length - 1) {
                elements.push(<GoodsWrapper.Item interval={3000}><GoodsItem>{temp}</GoodsItem></GoodsWrapper.Item>);
                temp = [];
            }
        });

        return elements;
    }

    onCarouselSelect = activeIndex => {
        this.setState({activeIndex});
    }

    render() {
        const {loading, error, activeIndex} = this.state;
        const goods = this.renderItems();

        return loading ? <Phrase>Loading...</Phrase> : 
               error ? <Phrase>Some problems you have</Phrase> : 
               !goods.join('') ? <Phrase>We dont have any propositions, sorry</Phrase> :
        (
            <GoodsWrapper variant="dark" fade interval={null} activeIndex={activeIndex} onSelect={this.onCarouselSelect}>
                {goods}
            </GoodsWrapper>
        );
    }
}

export default OurBestGoods;