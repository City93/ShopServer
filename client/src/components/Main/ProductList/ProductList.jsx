import React from "react";
import Product from '../Product/Product'
import './ProductList.css'

const ProductList = (props) => {

  const paintProducts = () =>{
    if(props.productList){

      return props.productList.map((product,i)=><Product productInfo={product} key={i}/>)
    }
   }   
  return <div className="productList">
      {paintProducts()}
  </div>;
};

export default ProductList;
