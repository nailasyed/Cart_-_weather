import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from "../Redux/actions/cartAction";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card, ListGroup, ListGroupItem, Col} from 'react-bootstrap';

toast.configure();
const ProductComponent = () => {
	const products = useSelector((state)=> state.allproducts.products);
	const notify = () => toast("Added to cart");
	const dispatch = useDispatch();
	//console.log(cart)

	const handleCart = (product)=>{
		// console.log(product);
		dispatch(addToCart(product));
		notify();
	};
	const handleRemoveCart= (product)=>{
		dispatch(removeFromCart(product))
	};
	
	const renderList = products.map((product) => {
	 const { id,img, title, desc, price } = product;
	 return(
	 	<Col key={id}>
		<Card >
		  <Card.Img variant="top" src={img} />
		  <Card.Body>
		    <Card.Title>{title}</Card.Title>
		    <Card.Text>
		      {desc}
		    </Card.Text>
		  </Card.Body>
		  
		  <Card.Body>

		    <Card.Link className="btn btn-secondary"  onClick={(e)=>handleCart(product)}>Add to cart</Card.Link>
		    {/* <Card.Link className="btn btn-secondary" onClick={(e)=>handleRemoveCart(product)}>Remove</Card.Link> */}
		   
		  </Card.Body>
		</Card>
		</Col>
	 	);

	});

	return <>{renderList}</>;
	
};
export default ProductComponent;