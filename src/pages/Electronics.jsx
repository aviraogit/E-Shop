import React, { useEffect } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import ElectricItem from '../component/ElectricItem'
import { fetchProduct } from '../features/product/productSlice'

const Electronics = () => {
 
   const {products , isLoading , isError ,isSuccess} = useSelector(state => state.product)
   
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


    if(isSuccess || products){
      return (
        <>
         <div className="container">
                <h1 className="all-products-title">All Products</h1>
           
              {
                
                  products.filter((item) =>{
                    console.log(item.category);
                    if(item.category === "electronics"){
                      return true
                    }
                  }).map((items) =>(
                    <ElectricItem key={items.id} items={items}/>
                  ))
              }
                   
                 
              </div>
        </>
        )
    }
}
 


export default Electronics