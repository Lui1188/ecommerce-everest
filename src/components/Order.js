import React from 'react';

import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

import './Order.css';

function Order({ order }) {
    return (
        <div className="order">
            <h5>Order</h5>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>Order ID: {order.id}</small>
            </p>
            <div className="order-container">
                {
                    order.data.cart?.map(item => {
                        return <>
                            <div className="order-summary-img">
                                <img src={item.image} />
                            </div>
                            <div className="order-summary-info">
                                <p>{item.title}</p>
                                <p>{item.size ? `Size: ${item.size}` : null}</p>
                                <p>£{item.price}</p>
                            </div>
                        </>
                    })}
            </div>
            <CurrencyFormat
                renderText={(value) => (
                    <h5 className="order-total" ><strong>Order Total:</strong> {value}</h5>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />

        </div>
    )
}

export default Order;
