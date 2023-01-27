import React, { useState, useEffect } from "react";
// import axios from "axios";
import ProductComp from "../../components/productComp";
import type { Product } from "../../interfaces";
import { fetch } from '../../utils/fetch';

const Products: React.FC = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const query = `query {
      products {
        id
        name
        price
        description
        slug
      }
    }`
      setLoading(true);
      fetch<{products: Product[]}>(query).then((res) => {
        setProducts(res.products);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {products && products.map((product) => (
        <ProductComp key={product.id} product={product} />
      ))}
    </>
  )
}

export default Products;
