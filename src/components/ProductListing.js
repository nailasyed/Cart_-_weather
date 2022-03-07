import React, { useEffect } from 'react';
import Axios from 'axios';
import {Container, Row} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../Redux/actions/productAction';
import ProductComponent from './ProductComponent';


const ProductListing = () => {
	const products = useSelector((state)=> state.allproducts.products);
	const dispatch =useDispatch();
	// console.log(products);
	
	
	const fetchProducts= async ()=>{
		const res =await Axios.get("http://localhost:3030/pizza")
		.catch((err) => {
					console.log("Err", err);
				});
		  dispatch(setProducts(res.data));
		
	};
	useEffect(()=>{
		fetchProducts();
	},[]);
	// console.log("products: ", products);
	return (
		<Container>
		<Row xs={1} md={4}>
			<ProductComponent/>
		</Row>
		</Container>
		)
};
export default ProductListing;