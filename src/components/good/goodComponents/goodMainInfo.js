import { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Separator from "../../separator/separator";

const InfoWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 60%;
`;

const InfoImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoImg = styled.img`
    width: fit-content;
    height: fit-content;
`;

const InfoTextWrapper = styled.div`
    padding: 8px 0 55px;
    margin-left: 55px;
    color: #000;
    h2, span {
        font-size: 1.5rem;
        line-height: 2.1875rem;
        font-weight: 400;
    }
    p {
        max-width: 80%;
        word-break: break-all;
    }
`;

const InfoTextTitle = styled.h2`
    text-align: center;
`;

const Phrase = styled.p`
    margin-top: 50px;
    font-size: 2rem;
    text-align: center;
`;

class GoodMainInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        }, () => {
            axios("http://localhost:3000/items")
                .then(data => {
                    const location = window.location.pathname;

                    this.setState({
                        loading: false,
                        item: data.data.find(item => item.id === +location.slice(location.lastIndexOf('/') + 1))
                    });
                })
                .catch(error => this.setState({
                    loading: false,
                    error: error
                }));
        });
    }

    render() {
        console.log(this.state);
        const { presentSrc, price, description, country, name } = this.state.item,
            { loading, error } = this.state;

        return loading ? <Phrase>Loading...</Phrase> :
            error ? <Phrase>Some problems you have</Phrase> :
                (
                    <section>
                        <InfoWrapper>
                            <InfoImgWrapper>
                                <InfoImg src={presentSrc} alt={name} />
                            </InfoImgWrapper>
                            <InfoTextWrapper>
                                <InfoTextTitle>About it</InfoTextTitle>
                                <Separator color="black" margin="20px auto 25px" />
                                <p>
                                    <strong>Country:</strong> {country}
                                </p>
                                <p>
                                    <strong>Description:</strong> {description}
                                </p>
                                <p>
                                    <strong>Price: </strong> <span>{price}$</span>
                                </p>
                            </InfoTextWrapper>
                        </InfoWrapper>
                    </section>
                );
    }
}

export default GoodMainInfo;