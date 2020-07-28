import React from 'react';
//import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import SigninScreen from './Screens/signinScreen';
import {useSelector} from 'react-redux'

function App() {


    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin


  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div class="grid-container">
            <header class="header">
                <div class="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/" >GoShop</Link>
                </div>
                <div class="header-links">
                    <a href="cart.html">Cart</a>
                    {
                        userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                        <Link to="/signin/"> Sign In</Link>
                    }

                </div>
            </header>
            <aside class="sidebar">
                <h3>Shopping Categories</h3>
                <button class="sidebar-close-button" onClick={closeMenu}>x</button>
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
            <main class="main">
                <div class="content">
                    <Route path="/signin/" component={SigninScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                </div>
            </main>
            <footer class="footer">
                All right reserved.
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default App;
