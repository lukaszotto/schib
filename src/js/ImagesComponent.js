import React from 'react';
import { StyledImagesList } from '../styles/styles'

const ImagesComponent = ({ images }) => {
    return (
        <StyledImagesList>
            {images.map((image) => {
                return (
                    <div key={image.id}>
                        <img alt={image.alt} src={image.url}></img>
                    </div>
                )
            })}
        </StyledImagesList>
    )

};
export default ImagesComponent;