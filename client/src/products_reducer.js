import {LOAD_PRODUCTS} from './actions/product_actions'



function products_reducer(state,action){
    if(action.type === LOAD_PRODUCTS){
    return{...state, products = state.products}
}
    return state;
    }
   

export default products_reducer;