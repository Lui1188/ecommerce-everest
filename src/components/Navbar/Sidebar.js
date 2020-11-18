import React from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
            <button
                className="close-btn"
                onClick={toggleSidebar}
            >
                <AiOutlineClose />
            </button>
            <div className="side-container">
                <div>
                    <span className="sidebar-user">
                        {user ? `Account: ${user.email}` : null}
                    </span>
                </div>
                <Link
                    className="sidebar-link"
                    to={!user ? "/signin" : "/"}
                    onClick={handleAuthentication}
                >
                    <li className="list-sidebar">{
                        user ? 'Sign Out' : 'Sign In'}</li>
                </Link>
                <Link
                    className="sidebar-link"
                    to="/home"
                >
                    <li className="list-sidebar">Home</li>
                </Link>
                <Link
                    className="sidebar-link"
                    to={!user ? "/signin" : "/orders"}
                >
                    <li className="list-sidebar">Orders List</li>
                </Link>
                <Link
                    className="sidebar-link"
                    to="/shoespage"
                >
                    <li className="list-sidebar">Shoes</li>
                </Link>
                <Link
                    className="sidebar-link"
                    to="/gearpage"
                >
                    <li className="list-sidebar">Gears</li>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar;