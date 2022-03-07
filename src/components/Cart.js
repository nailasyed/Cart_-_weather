import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {useSelector, useDispatch} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import {addToCart, removeFromCart,changeQtyCart,decreaseQtyCart,increaseQtyCart} from "../Redux/actions/cartAction";
import {BiPlus} from 'react-icons/bi';
import {BiMinus} from 'react-icons/bi';
import './stylehead.css'

const Cart =()=>{
  const cart = useSelector((state)=>state.cartitems.addedItem);  
  const dispatch = useDispatch();
  const [total, setTotal] = useState();
    // console.log(cart);
    const cartEmpty = Object.keys(cart).length;
    const handleAdd=(e)=>{
      dispatch(addToCart(e));
    }
    const handleSub=(e)=>{
      if(e.qty===1){
        
        dispatch(removeFromCart(e))
      }
      
      else{
        dispatch(decreaseQtyCart(e));
      }
    }
    const handleQty=(e)=>{
      dispatch(changeQtyCart(e));
    }
  useEffect(()=>{
     setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  },[cart])
   
    
    
    return <>
    {        
        <div className="site-blocks-table w-75 shadow">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                
                   {(cartEmpty!==0 )? (<tbody>{cart.map((item)=><tr key={item.id}><td className="product-thumbnail">
                    <img src={item.img} alt="Image" className="img-fluid"/></td>
                    <td className="product-name">
                            <h2 className="h5 text-black">{item.title}</h2>
                          </td>
                          <td>Rs.{item.price}</td>
                          <td>
                            <div className="input-group mb-3 qtt">
                              <div className="input-group-prepend ">
                                <button className="btn btn-outline-primary js-btn-minus" onClick={e=>handleSub(item)} type="button"><BiMinus/></button>
                              </div>
                              <input type="text" className="form-control text-center" value={item.qty} aria-label="Example text with button addon" onChange={(e)=>handleQty(item)} aria-describedby="button-addon1"/>
                              <div className="input-group-append">
                                <button className="btn btn-outline-primary js-btn-plus" onClick={e=>handleAdd(item)} type="button"><BiPlus/></button>
                              </div>
                            </div>
                          </td>
                          <td><a className="btn btn-primary btn-sm" onClick={(e)=>handleSub(item)}>X</a></td>
                    </tr>)}</tbody>)
                    :(<tbody><tr><td>Oops...Cart is Empty...Lets Shop</td></tr></tbody>)}
                  {/* { cart.map((item)=>{<tr><td>{item.title}</td></tr>})} */}
              </table>
              <div>
              <button className="btn btn-lg btn-outline-primary">Checkout</button>
              <p className="ttl">Total:{total}</p>
              </div>
              
        </div>         
    }
  </>
};
export default Cart;