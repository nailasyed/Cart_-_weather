import {combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers =combineReducers({
	allproducts: productReducer,
	cartitems: cartReducer,
});

export default reducers;