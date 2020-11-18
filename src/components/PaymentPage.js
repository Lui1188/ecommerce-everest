import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

import './PaymentPage.css';
import Layout from './Layout';
import ControlledAddressInput from './AddressForm';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reducer';
import axios from '../axios';
import { db } from '../firebase';

function PaymentPage() {
    const [{ cart, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the client secret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${Math.round(getCartTotal(cart) * 100)}` //100 currency subunit
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart]);
    console.log('The secret is >>>', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => { //paymentIntent = payment confirmation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_CART',
            })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty); //if event is empty
        setError(event.error ? event.error.message : "");
    }
    return (
        <div>
            <Layout>
                <div className="payment-container">
                    <h1>PaymentPage </h1>
                    <h4>Checkout (
                    <Link to="/cart">{cart?.length} items</Link>)</h4>
                    <div className="payment-section">
                        <div className="delivery-title">
                            <h2>Delivery Address</h2>
                        </div>
                        <div className="delivey-content">
                            <p>{user ? user.email : <button onClick={e => history.push('/signin')} >Sign In</button>}</p>
                            <ControlledAddressInput onChange={handleChange} />
                            <p>delivery address</p>
                        </div>
                    </div>
                    <div className="payment-section">
                        <div className="order-title">
                            <h2>Order Summary</h2>
                        </div>
                        <div className="order-summary">
                            <div className="order-summary-container">
                                {cart.map(item => {
                                    return (
                                        <li className="order-summary-details">
                                            <div className="order-summary-img">
                                                <img src={item.image} />
                                            </div>
                                            <div className="order-summary-info">
                                                <p>{item.title}</p>
                                                <p>{item.size ? `Size: ${item.size}` : null}</p>
                                                <p>£{item.price}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="payment-section">
                        <div className="payment-title" >
                            <h2>Payment Method</h2>
                        </div>
                        <div className="payment-details">
                            <form onSubmit={handleSubmit} >
                                <CardElement onChange={handleChange} />
                                <div className="payment-priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <h4>Order Total: {value}</h4>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getCartTotal(cart)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"£"}
                                    />
                                    <button disabled={processing || disabled || succeded}>
                                        <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default PaymentPage;
