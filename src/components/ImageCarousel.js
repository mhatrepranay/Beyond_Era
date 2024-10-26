import React from 'react';
import Slider from 'react-slick';
import './cusor.css'; // Custom styles for the slider

const images = [
    {
        url: '../../public/Screenshot 2024-10-26 022431.png',
        title: 'Mask of Tutankhamun',
    },
    {
        url: '../../public/Screenshot 2024-10-26 022431.png',
        title: 'Another Artifact',
    },
    {
        url: 'path-to-image3.jpg',
        title: 'Ancient Mask',
    },
    {
        url: 'path-to-image4.jpg',
        title: 'Historical Artifact',
    },
];

const ImageCardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="card">
                        <img src={image.url} alt={image.title} />
                        <h3>{image.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCardSlider;
