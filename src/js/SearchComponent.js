import React from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Search</button>
            </form>
        )
    }
};
export default SearchComponent;