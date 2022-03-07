import {ActionTypes} from "../constants/action-types";
const intialstate={
   
  addedItem:[],
   
};


export const cartReducer =(state=intialstate, {type, payload})=>{
   const product= payload;
	switch(type){
		case ActionTypes.ADD_TO_CART:
                  const exist = state.addedItem.find((item)=>item.id===product.id)
                 // const existed_item= state.addedItem.find((item)=> product.id === item.id)
                 
                  if(exist)
                     {
                          return {...state,addedItem:[{...product,qty: exist.qty +1}]}
                      } 
                     else{
                        
                        return {...state, addedItem: [...state.addedItem, {...product,qty: 1}]}

                     }
                     break;
                      

               
           
   	
             case ActionTypes.REMOVE_FROM_CART:
                return {
                    ...state,
                    addedItem: state.addedItem.filter((c) => c.id !== product.id),
                  };
               
               break;

             case ActionTypes.CHANGE_CART_QTY:
               return {
                 ...state,
                 addedItem:[ ...state.addedItem, state.addedItem.filter((c) =>
                                    c.id === product.id ? (c.qty = product.qty) : c.qty
                                  )]
               };
             break;  
		case ActionTypes.DECREMENT:
         const exist1 = state.addedItem.find((item)=>item.id===product.id)
                 
                 
                  if(exist1)
                     {
                      return {...state,addedItem:[{...product,qty: product.qty -1}]}

                     }

               break;

      case ActionTypes.INCREMENT:
         const exist2 = state.addedItem.find((item)=>item.id===product.id)
                 
                 
                  if(exist2)
                     {
                      return {...state,addedItem:[{...product,qty: product.qty +1}]}

                     }

             break;        
		default:
		return state;
	}

};