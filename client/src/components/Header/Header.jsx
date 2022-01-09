import React from "react";
import './Header.css'

const Header = (props) => {

    const handleSubmit = (e) =>{
      e.preventDefault();
      props.handleChange(e.target.value)
    }
  

  return <header>
    <ul className="header">
      <li className="logo"></li>      
      <li ><form id='inputSearch'><label><input className="inputSearch" placeholder="Busca tu articulo..." type="text" name='inputSearch' id='inputSearch' label='inputSearch' onChange={handleSubmit}/></label></form></li>
      <li className="socialNetwork">Redes sociales</li>
    </ul>
  </header>;
};

export default Header;
