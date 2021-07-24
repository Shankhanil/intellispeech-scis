import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './Header.css';
import logo from '../assets/static/logo/uohyd-logo.jpg';

/*const refreshPage = () => {
    window.location.reload();
}*/

function Header(){
    return(
        <nav className = 'header'>
            <Router>
            <div className = 'header_pic'>
            <Link to = '/' onClick = {() => {window.location.href='/'}}>
                <img src = {logo}
                     alt = 'Header Logo'
                     className = 'header_logo'
                ></img>
            </Link>
            </div>
            <div className = 'header_options'>
                <Link to = '/'>
                    <div className = 'options'>Home</div>
                </Link>
                <Link to = '/about'>
                <div className = 'options'>About Us</div>
                </Link>
                <Link to = '/privacy'>
                <div className = 'options'>Privacy Policy</div>
                </Link>
                <Link to = '/readme'>
                <div className = 'options'>Readme</div>
                </Link>
                <Link to = '/purpose'>
                <div className = 'options'>Our Purpose</div>
                </Link>
            </div>
            </Router>
        </nav>
    );
}

export default Header;
   