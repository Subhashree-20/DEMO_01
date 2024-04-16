import React from "react";
import data from "../data";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
export default function ProductScreen(props){
 
    const product=data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div>Product Not Found</div>;
    }
    return( 
    <div>
        <Link to="/">Back to Result</Link>
        <div class="row top">
            <div class="col-2">
<img class="large" src={product.image} alt={product.name}></img>
            </div>
            <div class="col-1">
<ul>
    <li>
       <h1>{product.name}</h1> 
    </li>
    <li>
        <Rating 
        rating={product.rating} 
        numReviews={product.numReviews}
        ></Rating>
    </li>
    <li>
        Price: ${product.price}
    </li>
    <li>
        Description:
        <p>{product.description}</p>
    </li>
</ul>
            </div>
            <div class="col-1">
<div class="card card-body">
<ul>
    <li>
        <div class="row">
            <div>Price</div>
            <div class="price">${product.price}</div>
        </div>
    </li>
    <li>
    <div class="row">
            <div>Status</div>
            <div >
                {product.countInStock > 0 ?(
            <span class="success">In Stock</span>):(
            <span class="error">Unavailable</span>)}
            </div>
        </div>
    </li>
    <li>
       <button class="primary block">Add to Cart</button> 
    </li>
</ul>
</div>
            </div>
        </div>
        </div>
        );
}
