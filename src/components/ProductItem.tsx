import React, { FC } from 'react'
import Product from '../models/Product'
import { useDiscountProductMutation, useRemoveProductMutation } from '../store/api'

interface ProductItemProps  {
    item: Product,
    // removeProduct : (id:number)=>void
}

const ProductItem:FC<ProductItemProps> = ({item} )=> {
  const [removeProduct]=useRemoveProductMutation()
 const [discountProduct]= useDiscountProductMutation()
  return (
    <div>
        <br></br>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={()=>removeProduct({id:item.id})}>d</button>
        <button onClick={()=>discountProduct({id:item.id})}>p</button>
        <br></br>
    </div>
  )
}
export default ProductItem