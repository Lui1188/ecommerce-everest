import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../StateProvider';

import Subtotal from './Subtotal';
import Layout from './Layout';
import CartItem from './CartItem';
import "./CartPage.css"

function CartPage() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <Layout>
            <div className="cart-container">
                <p>Account: {user ? user.email : null}</p>
                <div >
                    <p className="cart-title">My Basket</p>
                </div>
                {cart.length >= 1 ?
                    <>
                        <div className="cart-buttons">
                            <Link to="/">
                                <button className="cart-shop-btn">SHOP MORE</button>
                            </Link>
                        </div>
                        <div className="cart-details">
                            <div className="cart-header">
                                <div className="cart-header-order">
                                    <p>Your Order Details</p>
                                </div>
                            </div>
                            {cart.map(item => (
                                <CartItem
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    size={item.size}
                                    price={item.price}
                                />))}
                        </div>
                        <Subtotal />
                    </> : <div className="cart-empty">
                        <h3 >Oh! Your basket is empty!</h3>
                        <h3 >Start shopping now.</h3>
                        <Link to="/">
                            <button className="cart-shop-now">SHOP NOW</button>
                        </Link>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default CartPage;
