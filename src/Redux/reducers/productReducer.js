import {ActionTypes} from "../constants/action-types";
const intialstate={
	products: [],
};

export const productReducer =(state=intialstate, {type,payload})=>{
	switch(type){
		case ActionTypes.SET_PRODUCTS:
		return {...state, products: payload};
		default:
		return state;
	}
};