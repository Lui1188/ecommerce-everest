import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

import './Products.css';

import { items } from './ListProduct';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

function Products() {
    return (
        <div className="products-shoes">
            <div className="shoes-container">
                <div className="products-title">
                    <Link to="/shoespage" className="link-products">
                        <h2>Shoes</h2>
                        <p>View All</p>
                    </Link>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="products-info">
                        <Link to="/product/1">
                            <img
                                className="products-image d-block"
                                src={items[0].image}
                                alt="First slide"
                            />
                        </Link>
                        <div className="products-price">
                            <h4>Price £ <strong>{items[0].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info">
                        <Link to="/product/2">
                            <img
                                className="products-image d-block"
                                src={items[1].image}
                                alt="Second slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[1].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info">
                        <Link to="/product/3">
                            <img
                                className="products-image d-block"
                                src={items[2].image}
                                alt="Third slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[2].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info">
                        <Link to="/product/4">
                            <img
                                className="products-image d-block"
                                src={items[3].image}
                                alt="Fourth slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[3].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info">
                        <Link to="/product/5">
                            <img
                                className="products-image d-block"
                                src={items[4].image}
                                alt="Fifth slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[4].price}</strong></h4>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="gear-container">
                <div className="products-title">
                    <Link to="/gearpage" className="link-products">
                        <h2>Gears</h2>
                        <p>View All</p>
                    </Link>

                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="products-info-gear">
                        <Link to="/product/6">
                            <img
                                className="products-image-gear d-block"
                                src={items[5].image}
                                alt="Fifth slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[5].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info-gear">
                        <Link to="/product/7">
                            <img
                                className="products-image-gear d-block"
                                src={items[6].image}
                                alt="First slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[6].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info-gear">
                        <Link to="/product/8">
                            <img
                                className="products-image-gear d-block"
                                src={items[7].image}
                                alt="Second slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[7].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info-gear">
                        <Link to="/product/8">
                            <img
                                className="products-image-gear d-block"
                                src={items[8].image}
                                alt="Third slide"
                            />
                        </Link>

                        <div className="products-price">
                            <h4>Price £ <strong>{items[8].price}</strong></h4>
                        </div>
                    </div>
                    <div className="products-info-gear">
                        <Link to="/product/9">
                            <img
                                className="products-image-gear d-block"
                                src={items[9].image}
                                alt="Fourth slide"
                            />
                        </Link>
                        <div className="products-price">
                            <h4>Price £ <strong>{items[9].price}</strong></h4>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Products;
