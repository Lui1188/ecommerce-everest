import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Spring } from 'react-spring/renderprops';

import './Background.css';

function Background({ children }) {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/jef-willemyns-mluUYXoTotY-unsplash.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/roya-ann-miller-AWJfZjHJwqc-unsplash.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/mike-kotsch-A9dNMBX9Zm4-unsplash.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div class="static-container ">
                <Spring from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => <div style={props}><div className="title-container">
                        <div className="carousel-title">
                            <h3>Everything you need</h3>
                            <p>Outdoor and Indoor Climbing.</p></div>
                    </div>
                    </div>}</Spring>
                {children}
            </div>
        </div>
    )
}

export default Background;
