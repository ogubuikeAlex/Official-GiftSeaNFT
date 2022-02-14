import React from 'react';
import {Carousel} from 'react-bootstrap';
import image from '../img/unsplashed3.png';
import image2 from '../img/unsplashed5.png';
import image3 from '../img/unsplashcolor.png';
import image4 from '../img/unsplashed4.png';
import Card from './Card';
import '../App.css';

const Slider = () => {
  return (
    <div className='carousel'>
        <Carousel>
        <Carousel.Item>
        <img
      className="d-flex w-100 imgUser"
      src={image}
      alt="First slide"
    />
    <Card/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgUser"
      src={image2}
      alt="First slide"
    />
    <Card/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgUser"
      src={image3}
      alt="Second slide"
    />
    <Card/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgUser"
      src={image4}
      alt="Third slide"
    />
    <Card/>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Slider