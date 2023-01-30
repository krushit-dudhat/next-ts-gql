import React, {useState} from "react";
import { Product, ImageInterface } from "../interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const [selectedImage, setSelectedImage] = useState<ImageInterface>(product.images[0]);

  const handleImageClick = (image: ImageInterface) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className='row d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-6 row d-flex flex-column-reverse flex-md-row'>
          <div className='col-12 col-md-3 d-flex flex-row flex-md-column justify-content-left product-thumb-container'>
            {product.images.length > 0 && product.images.map((image, index) => (
              <Image key={index} src={image.url} width={100} height={100}
                onClick={() => handleImageClick(image)}
              className="product-thumb p-3 border-bottom" alt={image.fileName} />
            ))}
          </div>
          <div className='col-md-9 col-12'>
              {product.images.length > 0 && <Image src={selectedImage.url} width={100} height={700} className="card-img-top product-img" alt={selectedImage.fileName} unoptimized /> }
          </div>
        </div>

        <div className='col-12 col-md-6'>
          <div className='card border-0 border-bottom'>
            <div className='card-body'>
              { product.categories.length > 0 && <p className='card-text'><b> {product.categories.map((category) => category.name).join(', ')} </b></p> }
              <h4 className='card-title'> {product.name}</h4>
              <h4 className='card-text'> Rs. {product.price} </h4>
              {product.description && <p className='card-text product-description'> {product.description}</p>}
              
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className='btn btn-lg border border-rounded m-2 buy-btn'>Add to Cart</button>
            <button className='btn btn-lg border border-rounded m-2 buy-btn'>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
