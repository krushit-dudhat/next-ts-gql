import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Product } from "../interfaces";

type Props = {
  product: Product;
};

const ProductComp = ({ product }: Props) => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          {product.description && <p className='card-text'>{product.description}</p>}
          <p className='card-text'>Price: {product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductComp;
