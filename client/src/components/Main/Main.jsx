import React from "react";
import ProductList from '../Main/ProductList/ProductList'
import './Main.css'
import arrow from './img/arrow.png'

const Main = (props) => {

  const handleClick = (sort) =>{
    if(sort=='name'){

      !props.infoProduct.nameSort || props.infoProduct.nameSort=='-1'?props.infoProduct.handleChangeSortName('1'):props.infoProduct.handleChangeSortName('-1')
    }
    else if (sort=='rating'){
      !props.infoProduct.ratingSort || props.infoProduct.ratingSort=='-1'?props.infoProduct.handleChangeSortRating('1'):props.infoProduct.handleChangeSortRating('-1')
    }
    else if (sort=='price'){
      !props.infoProduct.priceSort || props.infoProduct.priceSort=='-1'?props.infoProduct.handleChangeSortPrice('1'):props.infoProduct.handleChangeSortPrice('-1')
    }
  }
  const handleClickPage = (page) =>{
    if(page=='suma'){
      let pagesNumber = props.infoProduct.productList
      console.log(pagesNumber)
      let nextPage = ++props.infoProduct.page
      props.infoProduct.handlePagination(nextPage)
    }
    else if(page=='resta'){
      let nextPage = props.infoProduct.page !== 1  ? --props.infoProduct.page: props.infoProduct.page
      props.infoProduct.handlePagination(nextPage)
    }
  }

  return <main>
  <ul className="sort">
    <li className="nameSort"><button onClick={()=>handleClick('name')}>Nombre<img src={arrow} className="arrow"></img></button></li>
    <li className="ratingSort"><button onClick={()=>handleClick('rating')}>Relevancia<img src={arrow} className="arrow"></img></button></li>
    <li className="priceSort"><button onClick={()=>handleClick('price')}>Precio<img src={arrow} className="arrow"></img></button></li>
  </ul>
  <ProductList productList={props.infoProduct.productList} className='productList'/>
  <div className="pagination">
  <button onClick={()=>handleClickPage('resta')}>Anterior</button>
  <button onClick={()=>handleClickPage('suma')}>Siguiente</button>
  </div>
  </main>;
};

export default Main;
