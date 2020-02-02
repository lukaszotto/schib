import axios from 'axios';

const GIPHY_KEY = 'copy_your_giphy_key_here';
const PIXABAY_KEY = 'copy_your_pixabay_key_here';

export const fetchAll = (query) => {
    return axios.all([
        axios.get(`https://pixabay.com/api?key=${PIXABAY_KEY}&q=${query}&image_type=photo`),
        axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${query}`)
    ])
}