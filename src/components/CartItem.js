import React from 'react';

import { useStateValue } from '../StateProvider';
import "./CartItem.css";

function CartItem({ id, image, title, size, price, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="cartItem">
            <ul>
                <li className="cartItem-details">
                    <div className="item-img">
                        <img
                            className="cartItem-image"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className="item-info">
                        <h4 className="item-name">{title}</h4>
                        <p className="item-size">Size: <strong>{size}</strong></p>
                        <p>£{price}</p>
                    </div>
                </li>
            </ul>
            {!hideButton && (
                <button onClick={removeItem} className="remove-btn">REMOVE</button>
            )}
        </div>
    )
}

export default CartItem;
