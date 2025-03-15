import React, { FC, useState } from 'react'
import Product from '../models/Product'
import ProductItem from './ProductItem'
import { useAppDispatch } from '../store'
import { addProduct } from '../store/productsSlice'
import { useAddProductMutation } from '../store/api'



const AddProductForm: FC = ({ }) => {
    const [inp1, setInp1] = useState<string>('')
    const [inp2, setInp2] = useState<string>('')
    const [addProduct]=useAddProductMutation()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addProduct({name:inp1,price:Number(inp2)})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={inp1} onInput={(e:React.ChangeEvent<HTMLInputElement>)=>setInp1(e.target.value)}></input>
                <input value={inp2} onInput={(e:React.ChangeEvent<HTMLInputElement>)=>setInp2(e.target.value)}></input>
                <button>ijij</button>
            </form>
        </div>
    )
}

export default AddProductForm