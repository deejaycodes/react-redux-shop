import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Social from "./components/Social";
import ProductsList from "./components/ProductsList";
import Subscribe from "./components/SubscribeSection";
import Footer from "./components/Footer";
import products from "./data";
import { Provider } from "react-redux";
import reducer from "./reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import CartContent from "./components/CartContent";
//import { Cart } from "./pages/CartPage";
import Cart from "./pages/CartPage";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cartItemsInStorage");
  if (cart) {
    return JSON.parse(localStorage.getItem("cartItemsInStorage"));
  } else {
    return [];
  }
};

const initialState = {
  products: products,
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
};

const store = createStore(reducer, initialState);
console.log(store.getState());

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />

        <HeroSection />
        <Social />
        <Switch>
          <Route exact path="/">
            <ProductsList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Subscribe />
        </Switch>

        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
