import React from 'react';

import Products from './Products';
import Background from './Background';
import Layout from './Layout';

function HomePage() {
    return (
        <div>
            <Layout>
                <Background />
                <Products />
            </Layout>
        </div>

    )
}

export default HomePage;
