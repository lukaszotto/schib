import React from 'react';
import { StyledForm } from '../styles/styles'

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.searchQuery);
    }
    handleChange = (event) => {
        this.setState({
            searchQuery: event.currentTarget.value
        });
    }
    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Search</button>
            </StyledForm>
        )
    }
};
export default SearchComponent;