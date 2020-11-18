import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import ProductPage from './components/ProductPage';
import ShoesPage from './components/ShoesPage';
import SigninPage from './components/SigninPage';
import GearPage from './components/GearPage';
import PaymentPage from './components/PaymentPage';
import OrdersPage from './components/OrdersPage';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51HlHTdGS5XnZvrFMoAFS9ISxZ6EAjKFsvNzdqXWNn7hCrzb1NhqfPtOwaSC2PA9qBcNP4NYocX5icTbsOz2BIv8C00Tot11Wt9");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shoespage" component={ShoesPage} />
          <Route path="/gearpage" component={GearPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/orders" component={OrdersPage} />
          <Route path="/payment">
              <Elements stripe={stripePromise}>
              <PaymentPage />
               </Elements>
            </Route>
          <Route path="/" component={HomePage} />        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
