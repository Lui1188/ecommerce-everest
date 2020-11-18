import React from 'react';

import { Link } from 'react-router-dom';

import Layout from './Layout';
import { items } from './ListProduct';
import { useStateValue } from '../StateProvider';
import "./ProductPage.css";

function ProductPage({ match }) {

    // console.log(match.params.id)
    const size = ["3", "4", "5", "6", "7", "8", "9", "10", "11"];

    const product = items.find(item => item.id === match.params.id);
    // console.log('Original product', product);

    const [{ cart, user }, dispatch] = useStateValue();
    // console.log('Cart content >>>', cart);

    const addSize = (e) => {
        product.sizeItem = e.target.innerHTML;
        // console.log('product>>>>>', product)
    }

    const addToCart = () => {

        product.category === "Gear" || product.sizeItem ?
            dispatch({
                type: 'ADD_TO_CART',
                item: {
                    id: product.id,
                    category: product.category,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    size: product.sizeItem,
                }
            }) : alert("Select a size");
    }

    return (
        <Layout>
            <div className="product-container">

                <div className="product-left">
                    <img
                        className="product-image"
                        src={product.image}
                        alt=""
                    />
                </div>
                <div className="product-right">
                    <div className="product-info">
                        <div className="product-data">
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">£ {product.price}</p>
                        </div>

                        {
                            product.category === "Shoes" &&
                            <div className="product-size">
                                <div className="size-title">
                                    <h3>Choose size in stock</h3>
                                </div>

                                <div className="size">
                                    {size.map(number => {
                                        return <button onClick={(e) => addSize(e)} className="size-btn">{number}</button>
                                    })}
                                </div>
                            </div>
                        }
                        {
                            !user ?
                                <span><Link to='/signin'>Sign in</Link> to add it to the Basket. </span>
                                : <button onClick={addToCart} className="cart-btn"> Add to basket</button>
                        }
                    </div>
                </div>
            </div >
        </Layout>
    )

}

export default ProductPage;

