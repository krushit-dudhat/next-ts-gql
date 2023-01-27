import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const ProductLayout = ({ children }: Props) => (
  <>
    <h1>Products</h1>
    <div className='d-flex flex-wrap'>
      {children}
    </div>
  </>
)

export default ProductLayout
