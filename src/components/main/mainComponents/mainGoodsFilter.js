import { Component } from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto 60px;
    width: 49.3%;
    height: 30px;
`;

const FilterText = styled.span`
    font-size: .875rem;
    line-height: 1.25rem;
`;

const FilterSearch = styled.input`
    background: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 11.25rem;
    height: 100%;
    margin-left: 1.25rem;
    border: none;
    text-align: center;
    font-size: .75rem;
    line-height: 1.0625rem;
    outline: none;
    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`;

const FilterButtons = styled.div`
    float: right;
    margin-left: 2.1875rem;
    height: 100%;
`;

const FilterButton = styled.button`
    background: #fff;
    color: #000;
    cursor: pointer;
    width: 4.6875rem;
    height: 100%;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px 0px 0px 4px;
    font-size: .75rem;
    line-height: 1.0625rem;
    &:not(:first-of-type) {
        margin-left: 5px;
    }
    &:hover, &.active {
        opacity: .5;
        box-shadow: none;
    }
`;

class MainGoodsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            filter: ''
        };
    }

    onSearchUpdate = event => {
        const value = event.target.value;
        this.setState({value});
        this.props.onSearchUpdate(value);
    }

    onFilterUpdate = filter => {
        this.setState({filter: (filter !== this.state.filter) ? filter : ""}, 
                      () => this.props.onFilterUpdate(this.state.filter));
    }

    render() {
        const buttonsData = ['Brazil', 'Kenya', 'Columbia'];

        const buttons = buttonsData.map(country => (
            <FilterButton 
                type="button"
                key={country.toLowerCase()} 
                onClick={() => this.onFilterUpdate(country.toLowerCase())}
                className={this.state.filter === country.toLowerCase() ? 'active' : ''}
            >
                {country}
            </FilterButton>
        ));

        return (
            <FilterWrapper>
                <div>
                    <FilterText>Looking for</FilterText>
                    <FilterSearch 
                            name="search"
                            value={this.state.value}
                            placeholder="start typing here..."
                            onChange={this.onSearchUpdate}
                    />
                </div>
                <div>
                    <FilterText>Or filter</FilterText>
                    <FilterButtons>
                        {buttons}
                    </FilterButtons>
                </div>
            </FilterWrapper>
        );
    }
}
export default MainGoodsFilter;