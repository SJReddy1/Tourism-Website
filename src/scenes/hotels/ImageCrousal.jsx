import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ImageCrousal({photos}) {
    return (
        <Carousel className='rounded-4 '>
        {photos.map((photo, index) => {
            return ( photo &&
                <Carousel.Item key={index}>
                    <img src={photo} alt={`image ${index}`} className='img-fluid shadow bg-body rounded-5 ' />
                </Carousel.Item>
            )
        })}
        </Carousel>
    )
}

export default ImageCrousal
