import React, { FC } from 'react'
import Product from '../models/Product'
import ProductItem from './ProductItem'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../store'
import { allProductsSelector } from '../store/productsSlice'
import { useGetProductsQuery } from '../store/api'

// interface ProductsListProps {
//   products: Product[],
//   removeProduct : (id:number)=>void
// }

const ProductsList: FC = ({  }) => {
  //const products = useAppSelector(allProductsSelector)
  const {data} = useGetProductsQuery()
  console.log(data);
  
  return (
    <div>{
      data&&data.products.map((item) =>
        <ProductItem item={item}></ProductItem>
      )
    }</div>
  )
}

export default ProductsList