import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import TestScreen from './screens/TestScreen';
import {  useDispatch } from 'react-redux';
import { logout } from './actions/userActions';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  const dispatch = useDispatch();
  // const Logout=() =>
  // {
  //   dispatch(logout());
  // }; tại sao ko dùng được !!! 



  return (
    
    <BrowserRouter>
       <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Booksite</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <div>
              <Link to="/profile">{userInfo.name}</Link>
              <button onClick={() => dispatch(logout())}>Log out</button>
              {/* <button onclick="Logout()">Log out</button> */}{/*không dùng được */}
              {/* <button onclick={Logout}>Log out</button> */}{/*không dùng được */}
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>

                  </li>
                </ul>
              </div>
            )}
            {/* {
              userInfo && (
                <div className="dropdown">
                  <ul className="dropdown-content">
                  
                  <button onClick={() => dispatch(logout())}>Log out</button>
                  
                  </ul>
                </div>
              )
            } */}
            
          </div>
        </header>
        <aside className="sidebar">
          <h3>Book Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/SGK">SGK</Link>
            </li>

            <li>
              <Link to="/category/Truyen">Truyen</Link>
            </li>
          </ul>
        </aside>
            <main className="main">
                <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
