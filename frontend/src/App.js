import React, { lazy, Suspense } from 'react';
//import data from './data'
import {useSelector} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
// import HomeScreen from './Screens/HomeScreen'
// import ProductScreen from './Screens/ProductScreen'
// import CartScreen from './Screens/CartScreen'
// import SigninScreen from './Screens/signinScreen';
// import RegisterScreen from './Screens/RegisterScreen'
// import ProductsScreen from './Screens/ProductsScreen'
// import ShippingScreen from './Screens/ShippingScreen'
// import PaymentScreen from './Screens/PaymentScreen'
// import placeOrderScreen from './Screens/PlaceOrderScreen'
// import OrderScreen from './Screens/OrderScreen'
// import ProfileScreen from './Screens/ProfileScreen'
// import AboutScreen from './Screens/AboutScreen'
// import OrdersScreen from './Screens/OrdersScreen'

const HomeScreen =lazy(()=>import('./Screens/HomeScreen'));
const ProductScreen =lazy(()=>import('./Screens/ProductScreen'));
const CartScreen =lazy(()=>import('./Screens/CartScreen'));
const SigninScreen =lazy(()=>import('./Screens/signinScreen'));
const RegisterScreen =lazy(()=>import('./Screens/RegisterScreen'));
const ProductsScreen =lazy(()=>import('./Screens/ProductsScreen'));
const ShippingScreen =lazy(()=>import('./Screens/ShippingScreen'));
const PaymentScreen =lazy(()=>import('./Screens/PaymentScreen'));
const placeOrderScreen =lazy(()=>import('./Screens/PlaceOrderScreen'));
const OrderScreen =lazy(()=>import('./Screens/OrderScreen'));
const ProfileScreen =lazy(()=>import('./Screens/ProfileScreen'));
const AboutScreen =lazy(()=>import('./Screens/AboutScreen'));
const OrdersScreen =lazy(()=>import('./Screens/OrdersScreen'));


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
                <div className="dropdown1">
                        <a href="#"  >Contact Us</a>
                        <ul className="dropdown1-content">
                            <li>
                              <h2>Phone: +1(123)456-7890 </h2>
                              <h2>Email: mygoshop@gmail.com </h2>
                            </li>
                        </ul>
                        </div>
                 <Link to="/about"> About </Link>
                 <Link to="/cart"> <i className="fa fa-shopping-cart"></i>  </Link>
                    {
                        userInfo ? <Link to="/profile"><i className='fa fa-user'></i></Link> :
                        <Link to="/signin"> Sign In</Link>
                    }
                    {userInfo && userInfo.isAdmin && (
                        <div className="dropdown">
                        <a href="#"  >Admin</a>
                        <ul className="dropdown-content">
                            <li>
                                <Link to="/orders">Orders</Link>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                        </div>
                    )}
                </div>
            </header>
           
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul className="categories">
                    <li>
                        <Link to="/category/Office">Office Dresses</Link>
                    </li>
                    <li>
                        <Link to="/category/Summer">Summer Dresses</Link>
                    </li>
                    <li>
                        <Link to="/category/Party">Party Dresses</Link>
                    </li>
                    <li>
                        <Link to="/category/Plus">Plus Size Dresses</Link>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <Suspense fallback = {<div  className="loader"></div>}>
                <div className="content">
                    <Route path="/orders" component={OrdersScreen} />
                    <Route path="/profile" component={ProfileScreen} />       
                    <Route path="/order/:id" component={OrderScreen} />
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/placeorder" component={placeOrderScreen} />
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/category/:id" component={HomeScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                </div>
                </Suspense>
            </main>  
            <footer className="footer">
                All right reserved.
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default App;
