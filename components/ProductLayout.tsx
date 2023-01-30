import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const ProductLayout = ({ children }: Props) => (
  <>
    <div className='container p-3'>
      <h1>Products</h1>
    </div>
    <div className='container d-flex flex-wrap'>
      {children}
    </div>
  </>
)

export default ProductLayout
