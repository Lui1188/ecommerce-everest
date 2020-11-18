import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <h6>copyright&copy;{new Date().getFullYear()}
                    <span className="footer-title"> Everest</span> all rights reserved
             </h6>
            </div>
        </footer>
    )
}

export default Footer;