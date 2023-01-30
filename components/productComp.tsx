import React from "react";
import { Product } from "../interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductComp = ({ product }: Props) => {
  return (
    <>
      <div className='card border-0 border-bottom' style={{width: '18rem'}}>
        {product.images.length > 0 && <Image src={product.images[0].url} width={100} height={500} className="card-img-top product-img" alt={product.images[0].fileName} /> }
        <div className='card-body text-center p-1'>
          {/* { product.categories.length > 0 && <p className='card-text'><b> {product.categories.map((category) => category.name).join(', ')} </b></p> } */}
          <p className='card-title'><Link className='text-decoration-none text-dark' href={`/products/${product.slug}`}> {product.name} </Link></p>
          {/* {product.description && <p className='card-text'> Description: {product.description}</p>} */}
          <p className='card-text'> Rs. {product.price} </p>
        </div>
      </div>
    </>
  );
};

export default ProductComp;
