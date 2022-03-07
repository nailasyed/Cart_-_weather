import React from 'react';
import {Link} from 'react-router-dom'
import 'react-bootstrap'
 import './stylehead.css'
import {CgShoppingCart} from "react-icons/cg";
import {useSelector} from "react-redux";
const Header = () =>{
	const cart = useSelector((state)=>state.cartitems.addedItem); 
return (
	<div>
		
		<nav className="mt-5 shadow headmain">
			<ul className="nav nav-bar">
	  		<li className="nav-item ">
		    <Link className="nav-link navbtn active" aria-current="page" to="/climate">Weather</Link>
		  </li>
		  <li className="nav-item">
		    <Link className="nav-link navbtn" to='/'>Pizza Store</Link>
		  </li>
		  <li className="nav-item">
		    <Link className="nav-link navbtn" to='/cart'>Cart<CgShoppingCart/><span className="ttl">{cart.qty}</span></Link>
		  </li>
	</ul>
	
	</nav>
	
	</div>
	)
};
export default Header;
