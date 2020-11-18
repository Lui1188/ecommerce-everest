import React from 'react';
import { items } from './ListProduct';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import "./GearPage.css";

function GearPage() {
    return (
        <div>
            <Layout>
                <div className="gear-list">
                    {
                        items.filter(item => item.category.includes("Gear")).map(item =>
                            <li>
                                <Link to={'/product/' + item.id}>
                                    <div className="gear-info">
                                        <img
                                            className="gear-image"
                                            src={item.image}
                                            alt=""
                                        />
                                        <div className="gear-description">
                                            <h4>{item.title}</h4>
                                            <div className="gear-price">
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

export default GearPage;
