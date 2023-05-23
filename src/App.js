
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddProduct, Home, Magazin, Products } from "./Pages"
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userAction, useSelector } from './store/user/userslice';
import Login from './Pages/Login';
import NotFond from './Pages/NotFond';
import ProductCard from './components/ProductCard/ProductCard';
import axios from 'axios';

function App() {
  const { t, i18n } = useTranslation();
  const changeLang = (language) => {
    i18n.changeLanguage(language)
  }
  // let dispatch = useDispatch()
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then(res => res.json())
  //     .then((json) => {

  //       // dispatch(userAction.changeUser(json))
  //     })

  // }, [])

  const [userData, setData] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(json => {
        setData(json.data)
      });


  }, []);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/pruducts' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login' element={<Magazin />} />
      <Route path="*" element={<NotFond />} />
      <Route path='/user/:userId' element={<ProductCard userData={userData} />} />
    </Routes>
  );
}

export default App;
