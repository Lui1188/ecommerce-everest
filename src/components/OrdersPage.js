import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { db } from '../firebase';
import Layout from './Layout';
import { useStateValue } from '../StateProvider';
import Order from './Order';
import './OrdersPage.css';

function OrdersPage() {

    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }
    }, [user]);

    return (
        <div>
            <Layout>
                <div>
                    {
                        orders.length > 0 ?
                            <div>
                                {orders?.map(order => (
                                    <Order order={order} />
                                ))}
                            </div> :
                            <div className="order-empty">
                                <h3>Oh! No orders found!</h3>
                                <Link to="/">
                                    <button className="order-shop-now">SHOP NOW</button>
                                </Link>
                            </div>
                    }
                </div>
            </Layout>
        </div>
    )
}

export default OrdersPage;
