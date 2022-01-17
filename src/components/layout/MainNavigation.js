
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from  '../../images/logo.png';
import userImage from '../../images/user.png'

import './Index.css'
import { UserContext } from '../context/UserContext';



const  MainNavigation = (props)=> {
  const [showmenu, setShowmenu] = useState(false)
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const [showpop, setShowpop] = useState(false)

  const { user } = useContext(UserContext)



  return (
    <nav class="uk-navbar  container " uk-navbar>

    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav ">
            <li class=""><a href="#">
              <img src={logo}  width={100}/>
              </a></li>
            
            <li class="uk-margin-small-top uk-margin-large-left"><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>Home</a></li>
            <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>Borrow light</a></li>
            <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>Buy light</a></li>
        </ul>

    </div>

    <div class="uk-navbar-right">
        
        <ul class="uk-navbar-nav">
        <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>
          vendor
          </a>
          </li>
        <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>
          For developers
          </a>
          </li>
           {
             user !==  ''? (
              <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>
              <img class="uk-border-pill" src={userImage} width="50" height="50" alt="Border pill"/>
                </a></li>
             ):(
             <>
              <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>
              Login in
              </a>
              </li>
            <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>
              Sign up
              </a>
              </li>
             </>
             )
           }
        
           
          
        </ul>

    </div>

</nav>
  );
}


export default MainNavigation