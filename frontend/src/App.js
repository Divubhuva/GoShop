import React from 'react';
//import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import SigninScreen from './Screens/signinScreen';
import RegisterScreen from './Screens/RegisterScreen'
import ProductsScreen from './Screens/ProductsScreen'
import {useSelector} from 'react-redux'

function App() {


    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo} = userSignin;


  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/" >GoShop</Link>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    {
                        userInfo ? (<Link to="/profile">{userInfo.name}</Link>) :
                       ( <Link to="/signin"> Sign In</Link>)
                    }

                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Office Dresses</a>
                    </li>
                    <li>
                        <a href="index.html">Summer Dresses</a>
                    </li>
                    <li>
                        <a href="index.html">Party Dresses</a>
                    </li>
                    <li>
                        <a href="index.html">Plus Size Dresses</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                </div>
            </main>
            <footer className="footer">
                All right reserved.
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default App;
