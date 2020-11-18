import React from 'react';
import { items } from './ListProduct';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import "./ShoesPage.css";

function ShoesPage() {
    return (
        <div>
            <Layout>
                <div className="shoes-list">
                    {
                        items.filter(item => item.category.includes("Shoes")).map(item =>
                            <li>
                                <Link to={'/product/' + item.id}>
                                    <div className="shoes-info">
                                        <img
                                            className="shoes-image"
                                            src={item.image}
                                            alt=""
                                        />
                                        <div className="shoes-description">
                                            <h4>{item.title}</h4>
                                            <div className="shoes-price">
                                                <h4>£{item.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                </div>
            </Layout>
        </div>
    )
}

export default ShoesPage;
