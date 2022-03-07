import {ActionTypes} from "../constants/action-types";

export const addToCart = (product) => {
	return{
		type: ActionTypes.ADD_TO_CART,
		payload: product
	}
};

export const removeFromCart = (product) => {
	return{
		type: ActionTypes.REMOVE_FROM_CART,
		payload: product
	}
};
export const changeQtyCart = (product) => {
	return{
		type: ActionTypes.CHANGE_CART_QTY,
		payload: product
	}
};
export const decreaseQtyCart = (product) => {
	return{
		type: ActionTypes.DECREMENT,
		payload: product
	}
};
export const increaseQtyCart = (product) => {
	return{
		type: ActionTypes.INCREMENT,
		payload: product
	}
};

