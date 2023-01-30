import React, { useState } from "react";
import { Product, ImageInterface } from "../interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductComp = ({ product }: Props) => {
  const [selectedImage, setSelectedImage] = useState<ImageInterface>(product.images[0]);

  const handleImageChange = () => {
    if (product.images.length > 1) {
      setSelectedImage(product.images[1]);
    }
  };
  return (
    <>
      <div className='card border-0 border-bottom' style={{width: '18rem'}}>
        {product.images.length > 0 && ( <Link href={`/products/${product.slug}`}>
          <Image src={selectedImage.url} width={100} height={500}
            className="card-img-top products-img"
            onMouseOver={() => handleImageChange()}
            onMouseOut={() => setSelectedImage(product.images[0])}
            quality={100}
            alt={selectedImage.fileName} />
          </Link>)}
        <div className='card-body text-center p-1'>
          <p className='card-title'>
            <Link className='text-decoration-none text-dark' href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </p>
          <p className='card-text'> Rs. {product.price} </p>
        </div>
      </div>
    </>
  );
};

export default ProductComp;
