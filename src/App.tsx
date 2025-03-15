import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';
import Product from './models/Product';
import AddProductForm from './components/AddProductForm';
import { TestComp } from './components/TestComp';
import TestComp2 from './components/TestComp2';
const App:FC =() =>{
  const [products,setProducts] = useState<Product[]>()

  return (
    <div className="App">
      <AddProductForm ></AddProductForm>
      <ProductsList></ProductsList>
      <TestComp a={10} b={"hello"}></TestComp>
      <TestComp2 a={10} b={"hello"}></TestComp2>
    </div>
  );
}

export default App;
