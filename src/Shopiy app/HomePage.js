import React from 'react'
import {NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage2 from './HomePage2'
import Male from './Male';
import BoyCloth from './BoyCloth';
import Navbar from './Navbar';
import Girl from './Girl';
import Kids from './Kids';
import ShoesFootwear from './ShoesFootwear';
import BeautyHealth from './BeautyHealth';
import Bags from './Bags';
import StartShoping from './StartShoping';
import HomeKitchen from './HomeKitchen';
import Footer from './Footer';
import AllProductLink from './AllProductLink';
import './media.css'

 


function HomePage() {
    
  return (
    <div className='bg-warning-subtle overflow-x-auto'>
        {/* navbar */}
     
<Navbar/>

<hr/>

<AllProductLink/>
    <hr/>
        

    <Routes>
        <Route path='/' element={<>
           
         
      <div >
     
    <div className="media-container mx-auto m-2  d-flex ">
        <h1 className='text-black p-9 '>Lowest Prices Best Quality Shopping</h1>
        {/* <h1 className='text-black  mt-5 mb-auto'>Best Quality Shopping</h1> */}

    <h1 className='fw-bold text-danger fst-italic'> )-:) Holi Specel Offer<span className=" text-decoration-line-through"> 49%</span> 70% off</h1>

     <img src='https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=826&t=st=1710500371~exp=1710500971~hmac=8a65e305e881ca809817336ff6830c73df7034ae7315677aa5fb7d9d7f1f31b5'className='img1'/>
     
    </div>
     <h1 className='position-absolute top-50 start-50 fw-bold text-warning-emphasis fst-italic text-decoration-underline'>Best Quality Shopping</h1>
     <h1 className='position-absolute bottom-50 start-50 fw-bold text-warning-emphasis fst-italic text-decoration-underline'>Lowest Prices</h1>
    
    <NavLink  to="img"><img src='https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?size=626&ext=jpg&ga=GA1.1.1044209914.1697609143&semt=sph'alt='img' id='photo' className='img2' /></NavLink>
  
  
    </div>
    <HomePage2/>
        </>}></Route>

    
    <Route path='/allProduct' element={<StartShoping/>}></Route>
 
    

        <Route path='/male' element={<Male/>}/>
        <Route path='/boy' element={<BoyCloth/>}/>
        <Route path='/girl' element={<Girl/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/footwearshoes and' element={<ShoesFootwear/>}/>
        <Route path='/beauty & health' element={<BeautyHealth/>}/>
        <Route path='/homekitchen' element={<HomeKitchen/>}/>
        <Route path='/bags' element={<Bags/>}/>
     
    </Routes>
<Footer/>
    </div>
  )
}

export default HomePage