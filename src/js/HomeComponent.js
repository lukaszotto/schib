import React from 'react';
import { fetchAll } from './api/fetch';
import axios from 'axios';
import SearchComponent from './SearchComponent';

class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    handleSubmit = (q) => {
        fetchAll(q).then(
            axios.spread((pixabay, giphy) => {
                console.log(giphy.data.data, pixabay.data.hits);
            }))
            .catch((resErr) => {
                console.log(resErr);
            })
    }
    render() {
        return (
            <section>
                <h3>Search</h3>
                <SearchComponent handleSubmit={this.handleSubmit}></SearchComponent>
            </section>
        )
    }
};
export default HomeComponent;