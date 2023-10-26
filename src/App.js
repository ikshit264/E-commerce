import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter.jsx"
import Categories from "./components/Category/Category"
import AppContext from "./utils/context"

function App(props) {
    return (
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/categories' element={<Categories />}/>
                <Route path='/products' element={<SingleProduct />}/>
                <Route path='/footer' element={<Footer/>}/>
            </Routes>
            <Footer/>
        {/* <Newsletter/> */} 
        </BrowserRouter>
    </div>);
}

export default App;
