import React from 'react'
import { Card } from 'react-bootstrap';

import Rating from './Rating';
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      {/*<a href={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
       </a>*/}

       <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
       </Link>

       <Card.Body>
         <Link to={`/product/${product._id}`}>
           <Card.Title as ="div">
             <strong>{product.name}</strong>
           </Card.Title>
         </Link>
         <Card.Text>
           <div className="my-3">
             {/*{product.rating} from {product.numReviews} reviews */}

             <Rating value={product.rating} text= {`${product.numReviews} reviews`} color={`#f8e825`}/>

           </div>
         </Card.Text>

         <Card.Text as="h3">
         <i className="fa fa-rupee-sign"></i>{product.price}
         </Card.Text>
       </Card.Body>
      
    </Card>
  )
}

export default Product
