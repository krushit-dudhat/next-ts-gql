import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from "../interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductComp = ({ product }: Props) => {
  return (
    <>
      <div className='card' style={{width: '18rem'}}>
        {product.images.length > 0 && <img src={product.images[0].url} width={"100%"} height={'300'} className="card-img-top product-img" alt={product.images[0].fileName} /> }
        <div className='card-body'>
          { product.categories.length > 0 && <p className='card-text'><b> {product.categories.map((category) => category.name).join(', ')} </b></p> }
          <h5 className='card-title'><Link href={`/products/${product.slug}`}> {product.name} </Link></h5>
          {product.description && <p className='card-text'> Description: {product.description}</p>}
          <p className='card-text'>Price: {product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductComp;
