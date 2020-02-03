import React from 'react';


const ImagesComponent = ({ images }) => {
    return (
        <div>
            {images.map((image) => {
                return (
                    <img alt={image.alt} src={image.url} key={image.id}></img>
                )
            })}
        </div>
    )

};
export default ImagesComponent;