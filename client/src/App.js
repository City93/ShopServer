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
    const [nameSort, changeNameSort] = useState()
    const [ratingSort, changeRatingSort] = useState()
    const [priceSort, changePriceSort] = useState()
    const [value] = useDebounce(input, 1000)

     useEffect(() =>{
      const getProducts = async (searchValue) =>{
        try{
          let uri;
          if(searchValue){            
            if(nameSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&name=${parseInt(nameSort)}`
            }
            else if(ratingSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&rating=${parseInt(ratingSort)}`
            }
            else if(priceSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&price=${parseInt(priceSort)}`
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
            if(nameSort){
              uri = `http://localhost:3000/?name=${parseInt(nameSort)}`
            }
            else if(ratingSort){
              uri = `http://localhost:3000/?rating=${parseInt(ratingSort)}`
            }
            else if(priceSort){
              uri = `http://localhost:3000/?price=${parseInt(priceSort)}`
            }
            else{
              uri = `http://localhost:3000/`
            }
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
   },[value,nameSort,ratingSort,priceSort])


   const handleChange = (search) =>{
     changeInput(search)
   }
   const handleChangeSortName = (sort) => {
      changeNameSort(sort)
      changeRatingSort()
      changePriceSort()
   }
   const handleChangeSortRating = (sort) => {
    changeRatingSort(sort)
    changeNameSort()
    changePriceSort()
 }
 const handleChangeSortPrice = (sort) => {
  changePriceSort(sort)
  changeRatingSort()
  changeNameSort()
}
console.log([
  {nameSort},
  {priceSort},
  {ratingSort}
])
   const infoProduct = {
     productList,
     handleChangeSortName,
     nameSort,
     handleChangeSortPrice,
     priceSort,
     handleChangeSortRating,
     ratingSort
   }


  return (
    <div className="App">
      <Header handleChange = {handleChange} />
      <Main infoProduct = {infoProduct}/>
      <Footer/>
    </div>
  );
}

export default App;

