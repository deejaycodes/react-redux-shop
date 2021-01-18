import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  COUNT_CART_TOTALS,
  ADD_TO_CART,
} from "./actions/cartactions";

const localStorageCartItems = JSON.parse(
  localStorage.getItem("cartItemsInStorage")
);

let cartItemsInStorage =
  localStorage.getItem("cartItemsInStorage") !== null
    ? localStorageCartItems
    : [];

function reducer(state, action) {
  if (action.type === ADD_TO_CART) {
    const { id, amount, price, details, img } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          console.log(newAmount);
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: details,
        amount,
        price: price,
        img: img,
      };
      cartItemsInStorage.push(newItem);
      updateLocalStorage();
      console.log(cartItemsInStorage);
      const total_items = cartItemsInStorage.length;
      //localStorage.setItem("cart", JSON.stringify(newItem));

      console.log({ newItem });

      return { ...state, cart: [...state.cart, newItem], total_items };
    }
  }

  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      console.log("hey 1");
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    const removeItem = state.cart.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, cart: removeItem };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
}
function updateLocalStorage() {
  localStorage.setItem(
    "cartItemsInStorage",
    JSON.stringify(cartItemsInStorage)
  );
}
export default reducer;
