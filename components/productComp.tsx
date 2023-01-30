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
        {product.images.length > 0 && ( <Link href={`/products/${product.slug}`}>
          <Image src={product.images[0].url} width={100} height={500}
            className="card-img-top products-img" alt={product.images[0].fileName} unoptimized />
          </Link>)}
        <div className='card-body text-center p-1'>
          <p className='card-title'><Link className='text-decoration-none text-dark' href={`/products/${product.slug}`}> {product.name} </Link></p>
          <p className='card-text'> Rs. {product.price} </p>
        </div>
      </div>
    </>
  );
};

export default ProductComp;
