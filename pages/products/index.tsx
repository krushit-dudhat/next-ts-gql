import React, { useState, useEffect } from "react";
// import axios from "axios";
import ProductComp from "../../components/productComp";
import ProductLayout from "../../components/ProductLayout";
import Layout from "../../components/Layout";
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
      <Layout title='Products'>
        <ProductLayout>
          {loading && <p>Loading...</p>}
          {products && products.map((product) => (
            <div className='p-3 d-flex justify-content-center flex-grow-1 flex-xxl-grow-0 flex-shrink-1'>
              <ProductComp key={product.id} product={product} />
            </div>
          ))}
        </ProductLayout>
      </Layout>
    </>
  )
}

export default Products;
