import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'/slider-1.jpg'}
          alt="MODERN, SMART, FLEXIBLE"
        />
        <Carousel.Caption>
          <h3>MODERN, SMART, FLEXIBLE</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'/slider-2.jpg'}
          alt="MODERN, SMART, FLEXIBLE"
        />
        <Carousel.Caption>
          <h3>FAST, TRACABLE, SECURE</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
