import {React,  useEffect, useState, useContext} from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';



import './index.css'
//import Buy from './pages/Buys';
import Layout from './components/layout/Layout';

import Borrowlight from './pages/Borrowlight';
import Index from './pages/Home/Index';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/Index';
import Users from './pages/Dashboard/Users';
// import Footer from './components/blocks/Home/Footer';
// import Footer from '../src/components/blocks/Home/Footer'
// import { UserContext } from './components/context/UserContext';
import Buy from './pages/Buying';
import Borrow from './pages/Borrowing';
import Getpower from './pages/Borrowing/Blocks/Getpower';
import About from './pages/About';
import Contact from './pages/Contact';
import Conditions from './pages/Conditions';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';

import UIkit from 'uikit'

import Faq from './pages/Faq';



function App() {
  //const { authenticated } = useContext(UserContext)
  return (
      <Layout >
      <Routes>
      
        <Route path='/' element={<Index />} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Borrowlight' element={<Borrowlight/>} /> 
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Users' element={<Users/>} />
        <Route path='/Buy' element={<Buy/>} />
        <Route path='/Borrow' element={<Borrow/>}/>
        <Route path='/Getpower' element={<Getpower/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>

        <Route path='/Faq' element={<Faq/>}/>

        <Route path='/Conditions' element={<Conditions/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Blog' element={<Blog/>}/>

       

        {/* <Route path='/Footer' element={<Footer/>} /> */}
       
      </Routes>
    </Layout> 
   
 
  );
}

export default App;
