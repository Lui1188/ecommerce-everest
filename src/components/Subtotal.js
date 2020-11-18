import React from 'react';

import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reducer';
import { useHistory } from 'react-router-dom';
import "./Subtotal.css";

function Subtotal() {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();
    console.log('my cart', cart)

    return (
        <div className="subtotal-container">
            <div>
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Total (<span>{cart.length}</span> items): <strong>{value}</strong>
                            </p>
                        </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                />
            </div>
            <div>
                <button onClick={e => history.push('/payment')} className="checkout-btn">CHECKOUT SECURELY</button>
            </div>
        </div>
    );
}

export default Subtotal;
