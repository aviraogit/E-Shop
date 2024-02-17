import React, { useEffect } from 'react'
import ProductCart from './ProductCart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../features/product/productSlice'

const ProductContainer = () => {

  const { products, isLoading, isSuccess, isError } = useSelector((state) => state.product)
  
// products.map(product => console.log(product))

// console.log(products.products);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchProduct())
  }, [])


  if (isLoading) {
    return (
      <>
        <div className="container">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <h1 className="visually">Loading...</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
  if (isError) {
    return (
      <>
        <div className="container">
          <h1 className="all-products-title">SOMETHING IS WRONG...</h1>

        </div>
      </>
    )
  }


  if (isSuccess) {
    return (
      <>
        <div className="container">
          <h1 className="all-products-title">Features Products</h1>
          {
            products.map((product) =>(
              <ProductCart key={product.id} product={product}/>
            ))
          }

         
        </div>
      </>
    )
  }
}

export default ProductContainer