import React from "react";
import './Header.css'
import twitterImg from './img/twitter.png'

const Header = (props) => {

    const handleSubmit = (e) =>{
      e.preventDefault();
      props.handleChange(e.target.value)
    }
  

  return <header>
    <ul className="header">
      <li className="logo"></li>      
      <li ><form id='inputSearch'><label><input className="inputSearch" placeholder="Busca tu articulo..." type="text" name='inputSearch' id='inputSearch' label='inputSearch' onChange={handleSubmit}/></label></form></li>
      <li className="socialNetwork"><img src={twitterImg} className="twitterImg"></img></li>
    </ul>
  </header>;
};

export default Header;
