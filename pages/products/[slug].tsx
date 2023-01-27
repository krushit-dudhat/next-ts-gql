import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import axios from "axios";
import ProductComp from "../../components/productComp";
import type { Product } from "../../interfaces";
import { fetch } from '../../utils/fetch';

const Product: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const query = `query getProduct($slug: String!){
      products (where: {slug: $slug}) {
        id
        name
        price
        description
        slug
        images {
          url
          fileName
        }
        categories {
          name
          slug
          description
        }
      }
    }`
      setLoading(true);
      fetch<{products: Product[]}>(query, { slug }).then((res) => {
        console.log(res.products[0]);
        if (res.products.length > 0) {
          setProduct(res.products[0]);
        }
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      })
  }, [slug]);

  return (
    <>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {product ? 
        <ProductComp key={product.id} product={product} /> :
        <p>Product not found</p>
      }
    </>
  )
}

export default Product;
