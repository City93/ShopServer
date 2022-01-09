import React from "react";
import ProductList from '../Main/ProductList/ProductList'
import './Main.css'
import arrow from './img/arrow.png'

const Main = (props) => {

  const handleClick = (cambio) =>{
    console.log(cambio)
  }

  return <main>
  <ul className="sort">
    <li className="nameSort"><button onClick={()=>handleClick('name')}>Nombre<img src={arrow} className="arrow"></img></button></li>
    <li className="ratingSort"><button onClick={()=>handleClick('rating')}>Relevancia<img src={arrow} className="arrow"></img></button></li>
    <li className="priceSort"><button onClick={()=>handleClick('price')}>Precio<img src={arrow} className="arrow"></img></button></li>
  </ul>
  <ProductList productList={props.productList} className='productList'/>
  </main>;
};

export default Main;
