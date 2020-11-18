import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import Sidebar from './Sidebar';
import { items } from '../ListProduct';
import './Navbar.css';

function Navbar() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("EVENT VALUE", event.target.value)
  }

  useEffect(() => {
    const results = items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results)

  }, [searchTerm])



  return (
    <div className="navbar" >
      <div className="nav-belt">
        <div className="nav-left" >
          <div className="nav-logo">
            <NavLink
              className="nav-logo-link"
              to="/home"
            ><span style={{ color: "rgba(236, 133, 36, 0.959)" }}>E</span>
              <span style={{ color: "#FFFAFA" }}>verest</span>
            </NavLink>
          </div>
        </div>
        <div className="nav-fill">
          <div className="nav-search-container">
            <div className="nav-search">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
              <div className="search-icon" >
                <SearchIcon className="search" />
              </div>
            </div>
            {searchTerm ?
              <div className="search-result">
                {searchResults.map(item => {
                  return <Link to={`/product/${item.id}`} ><li>
                    <div className="card-left">
                      <img src={item.image} alt="" className="card-img" />
                    </div>
                    <div className="card-right">
                      <strong><p>{item.title}</p></strong>
                      <p>£{item.price}</p>
                    </div>
                  </li>
                  </Link>
                })}
              </div> : null
            }
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-tools">
            <NavLink
              className="nav-signin-link"
              to={!user ? "/signin" : "/"}
            >
              <div onClick={handleAuthentication} className="nav-line-1-container">
                <span className="nav-line-1">Hello, {user ? user.email : 'Guest'}</span>
                <span className="nav-line-2">{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </NavLink>
            <NavLink
              className="nav-order-link"
              to={!user ? "/signin" : "/orders"}
            >
              <span className="nav-line-1">Check</span>
              <span className="nav-line-2"> Orders List</span>
            </NavLink>
            <div className="nav-cart">
              <NavLink
                className="nav-cart-link"
                to="/cart"
              >
                <span className="nav-cart-counter">{cart?.length}</span>
                <ShoppingCartIcon className="cart" > </ShoppingCartIcon>
              </NavLink>
            </div>
            <button
              type="button"
              className="nav-btn"
              onClick={toggleSidebar}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>
      <div className="nav-under">
        <ul className="under-list">
          <Link to="/shoespage" className="link-list-page"><li className="list-page">Shoes</li></Link>
          <Link to="/gearpage" className="link-list-page"><li className="list-page">Gears</li></Link>
        </ul>
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Navbar;

