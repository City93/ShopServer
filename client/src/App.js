import './App.css';

import React, {useEffect, useState} from 'react'

import axios from 'axios'

import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import Footer from '../src/components/Footer/Footer'

import { useDebounce } from "use-debounce";

const App = () => {
    const [input, changeInput] = useState('');
    const [productList, changeProductList] = useState('')
    const [value] = useDebounce(input, 1000)

     useEffect(() =>{
      const getProducts = async (searchValue) =>{
        try{
          if(searchValue){            
            //console.log({searchValue})
            const data = await axios.get(`http://localhost:3000/search?search=${searchValue.toLowerCase() || ''}`)
            const products = data.data.docs
            const productInfo = products.map((el,i) =>{return {
              name: el.name,
              rating: el.rating,
              price: el.price,
              image: el.image,
              provider: el.provider,
              CIF_provider: el.id_provider.CIF,
              address_provider: el.id_provider.address
            }
          })
          console.log(productInfo)
          changeProductList(productInfo)
          }
          else{
              const data = await axios.get(`http://localhost:3000/`)
              const products = data.data.docs
              const productInfo = products.map((el,i) =>{return {
                name: el.name,
                rating: el.rating,
                price: el.price,
                image: el.image,
                provider: el.provider,
                CIF_provider: el.id_provider.CIF,
                address_provider: el.id_provider.address,
                from: 'esto viene de todo'
              }
            })
            console.log({productInfo})
            changeProductList(productInfo)
          }

        } catch (err){
          console.error(err)
        }

      }
      getProducts(value);
   },[value])


   const handleChange = (search) =>{
     changeInput(search)
   }


  return (
    <div className="App">
      <Header handleChange = {handleChange} />
      <Main productList = {productList}/>
      <Footer/>
    </div>
  );
}

export default App;

