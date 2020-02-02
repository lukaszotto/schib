import React from 'react';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
        }
    }
    handleSubmit = () => {
        this.props.handleSubmit(this.state.searchQuery);
    }
    render() {
        return (
            <div>
                <input onChange={(event) => { this.state.searchQuery = event.currentTarget.value }}></input>
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }
};
export default SearchComponent;