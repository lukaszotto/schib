import React from 'react';
import { StyledImagesList } from '../styles/styles'

const ImagesComponent = ({ images }) => {
    return (
        <StyledImagesList>
            {images.map((image) => {
                return (
                    <img alt={image.alt} src={image.url} key={image.id}></img>
                )
            })}
        </StyledImagesList>
    )

};
export default ImagesComponent;