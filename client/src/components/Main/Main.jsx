import React from "react";
import ProductList from '../Main/ProductList/ProductList'
import './Main.css'

const Main = (props) => {
  return <main>
  <ProductList productList={props.productList}/>
  </main>;
};

export default Main;
