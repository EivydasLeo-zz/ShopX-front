import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import 'font-awesome/css/font-awesome.css';
import Footer from './components/footer';

class App extends Component {
  state = {
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
    ],
    shop: {
      shopCategories: [
        { _id: 1, title: 'Accessories' },
        { _id: 2, title: 'Denim' },
        { _id: 3, title: 'Footwear' },
        { _id: 4, title: 'Jeans' },
        { _id: 5, title: 'T-Shirts' },
      ],
      socialLinksData: [
        { to: 'https://www.facebook.com', icon: 'fa fa-facebook', title: 'share' },
        { to: 'https://www.twitter.com', icon: 'fa fa-twitter', title: 'tweet' },
        { to: 'https://www.instagram.com', icon: 'fa fa-instagram', title: 'pin it' },
      ],
      items: [
        {
          _id: 1,
          title: 'Green hat',
          price: 99.99,
          image: 'acc_hat_01_',
          color: 'green',
          size: 'normal',
          images: [1, 2, 3, 4, 5],
          sku: 'hat_01',
        },
        {
          _id: 2,
          title: 'Stealth Bomber Jacket',
          price: 1599.95,
          image: 'acc_jacket_01_',
          color: 'navy',
          size: 'normal',
          images: [1, 2, 3],
        },
        {
          _id: 3,
          title: 'Feather Slim Fit Denim Jeans',
          price: 1299.95,
          image: 'denim_01_',
          color: 'indigo',
          size: 'normal',
          images: [1, 2, 3],
        },
      ],
    },
  };
  render() {
    return (
      <div className="App">
        <HeaderX navLinks={this.state.navLinks} />
        <div className="container">
          <Switch>
            {/* kai reikia perduoti props i route  mes tai darom su sekancia sintaxe */}
            <Route path="/shop" render={(props) => <Shop shop={this.state.shop} {...props} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
