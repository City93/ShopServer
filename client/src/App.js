import './App.css';

import React, {useEffect, useState} from 'react'

import axios from 'axios'

import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import Footer from '../src/components/Footer/Footer'

import { useDebounce } from "use-debounce";

const App = () => {
    const [input, changeInput] = useState('');
    const [productList, changeProductList] = useState([])
    const [nameSort, changeNameSort] = useState(1)
    const [ratingSort, changeRatingSort] = useState()
    const [priceSort, changePriceSort] = useState()
    const [value] = useDebounce(input, 1000)

     useEffect(() =>{
      const getProducts = async (searchValue) =>{
        try{
          let uri;
          console.log(value)
          if(searchValue){            
            if(nameSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&name=${nameSort}`
            }
            else if(ratingSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&rating=${ratingSort}`
            }
            else if(priceSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&price=${nameSort}`
            }
            else{
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}`
            }
            // console.log({searchValue})
            console.log({uri})
            const data = await axios.get(uri)
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
          //console.log(productInfo)
          changeProductList(productInfo)
          }
          else{
              console.log({uri})
              const data = await axios.get('http://localhost:3000/')
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
            //console.log({productInfo})
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

