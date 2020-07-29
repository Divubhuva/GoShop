import { createStore, combineReducers, compose, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { productListReducer, productDetailsReducer } from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducers'
import { userSigninReducer, userRegisterReducer } from './reducer/userReducers'

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignin: {userInfo} }
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose; 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;