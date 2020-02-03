import React from 'react';
import { fetchAll } from './api/fetch';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import ImagesComponent from './ImagesComponent';

class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    getImagesArray = (pixabay, giphy) => {
        var imagesArr = [];
        if (pixabay.data) {
            pixabay.data.hits.forEach((image) => {
                imagesArr.push({
                    id: image.id,
                    alt: image.tags,
                    url: image.webformatURL
                })
            });
        }
        if (giphy.data) {
            giphy.data.data.forEach((image) => {
                imagesArr.push({
                    id: image.id,
                    alt: image.title,
                    url: image.images.downsized.url
                })
            });
        }
        return imagesArr;
    }
    handleSubmit = (searchQuery) => {
        fetchAll(searchQuery).then(
            axios.spread((pixabay, giphy) => {
                this.setState({
                    images: this.getImagesArray(pixabay, giphy)
                });
            }))
            .catch((resErr) => {
                console.log(resErr);
            })
    }
    render() {
        return (
            <section>
                <h2>Search</h2>
                <SearchComponent handleSubmit={this.handleSubmit}></SearchComponent>
                <ImagesComponent images={this.state.images}></ImagesComponent>
            </section>
        )
    }
};
export default HomeComponent;