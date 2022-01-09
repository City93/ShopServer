import React from "react";
import './Product.css';
import threeStars from './img/3_stars.png'
import twoStars from './img/2_stars.png'
import oneStar from './img/1_star.png'

const Product = (props) => {

  const paintRating = () =>{
    if(props.productInfo.rating == 3)
      return <img src={threeStars} className="rating"></img>
      else if (props.productInfo.rating == 2){
      return <img src={twoStars} className="rating"></img>
    } else {
      return <img src={oneStar} className="rating"></img>
    }
  }

  return <div className="product">
    <img src={props.productInfo.image} className="productImg"></img>
    {paintRating()}
    <p className="nameProduct">{props.productInfo.name.split(' ').slice(0,1) + ' ' +  props.productInfo.name.split(' ').slice(1,2)}</p>
    <p className="providerProduct">{props.productInfo.provider}</p>
    <div className="priceArea">
    {props.productInfo.price} €
    </div>
  </div>;
};

export default Product;
