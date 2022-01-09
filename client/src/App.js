import './App.css';

import React, {useEffect, useState} from 'react'

import axios from 'axios'

import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import Footer from '../src/components/Footer/Footer'

import { useDebounce } from "use-debounce";

const App = () => {
    const [inputSearch, changeInput] = useState('');
    const [productList, changeProductList] = useState([])
    const [nameSort, changeNameSort] = useState()
    const [ratingSort, changeRatingSort] = useState()
    const [priceSort, changePriceSort] = useState()
    const [page, changePage] = useState('1')
    const [valueSearch] = useDebounce(inputSearch, 1000)
    console.log({inputSearch})
    console.log({valueSearch})
     useEffect(() =>{
      const getProducts = async (searchValue) =>{
        try{
          console.log({inputSearch})
          console.log({valueSearch})
          let uri;
          if(searchValue){            
            if(nameSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&name=${parseInt(nameSort)}&page=${page}`
            }
            else if(ratingSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&rating=${parseInt(ratingSort)}&page=${page}`
            }
            else if(priceSort){
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&price=${parseInt(priceSort)}&page=${page}`
            }
            else{
              uri = `http://localhost:3000/search?search=${searchValue.toLowerCase()}&page=${page}`
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
              uri = `http://localhost:3000/?name=${parseInt(nameSort)}&page=${page}`
            }
            else if(ratingSort){
              uri = `http://localhost:3000/?rating=${parseInt(ratingSort)}&page=${page}`
            }
            else if(priceSort){
              uri = `http://localhost:3000/?price=${parseInt(priceSort)}&page=${page}`
            }
            else{
              uri = `http://localhost:3000/?page=${page}`
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
      getProducts(valueSearch);
   },[valueSearch,nameSort,ratingSort,priceSort, page])


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
const handlePagination = (page) =>{
  changePage(page)
}
// console.log([
//   {nameSort},
//   {priceSort},
//   {ratingSort}
// ])
   const infoProduct = {
     productList,
     handleChangeSortName,
     nameSort,
     handleChangeSortPrice,
     priceSort,
     handleChangeSortRating,
     ratingSort,
     handlePagination,
     page
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

