import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import './sec1.css'
import Img0 from '../../images/img0.jpg'
import Img1 from '../../images/img1.jpg'
import Img2 from '../../images/img2.jpg'
import Img3 from '../../images/img3.jpeg'
const Section1 = () => {
    return(
        <Carousel className="s1-container">
            
      <Carousel.Item className="s1-item">
        <img
          className="d-block w-100"
          src={Img0}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="s1-item">
        <img
          className="d-block w-100 "
          src={Img1}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item className="s1-item">
        <img
          className="d-block w-100"
          src={Img2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="s1-item">
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}

export default Section1