import React from "react";
// components
import Navbar from "./components/Navbar";
import reducer from "./reducer";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { Provider } from "react-redux";

import { createStore } from "redux";

const initialStore = {
  cart: cartItems,
  total: 780,
  amount: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
