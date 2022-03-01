
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from  '../../images/logo.png';
import userImage from '../../images/user.png';
import menu from '../../images/menu.png'

import './Index.css'
import { UserContext } from '../context/UserContext';



const  MainNavigation = (props)=> {
  const [showmenu, setShowmenu] = useState(false)
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const [showpop, setShowpop] = useState(false)

  const { user } = useContext(UserContext)



  return (
    <>


    <nav class="uk-navbar uk-hidden@s  container" uk-navbar>
    <div class="uk-navbar-left">
      <ul  class="uk-navbar-nav ">
      <li class=""><a href="#">
              <img src={logo}  width={70}/>
              </a></li>

      </ul>
    </div>


    








    <div class="uk-navbar-right">
      <ul  class="uk-navbar-nav ">
      <li class=""><a href="#">
              <img src={menu}  width={40}/>
              </a></li>


      </ul>
    </div>

    </nav>


    
    <nav class="uk-navbar uk-visible@l container" uk-navbar>

    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav ">
            <li class=""><a href="#">
              <img src={logo}  width={100}/>
              </a></li>
            
            {/* <li class="uk-margin-small-top uk-margin-large-left">
              <Link to="/" style={{fontFamily:'Dongle', fontSize:25}}>Home</Link>
              </li>
            <li class="uk-margin-small-top ">
              <Link to="/borrowlight" style={{fontFamily:'Dongle', fontSize:25}}>Borrow light</Link>
              </li>
            <li class="uk-margin-small-top ">
              <Link to="/buy" style={{fontFamily:'Dongle', fontSize:25}}>Buy light</Link>
              </li>  */}
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
          <li class="uk-margin-small-top "><a href="#" style={{fontFamily:'Dongle', fontSize:25}}>
          about Us
          </a>
          </li>
           {
             user !==  null? (
              <li class=" "><a href="#" style={{marginTop:5 ,fontFamily:'Dongle', fontSize:25}}>
              <img class="uk-border-pill" src={userImage} width="30" height="30" alt="Border pill"/>
                </a></li>
             ):(
             <>
              <li class="uk-margin-small-top "><Link to="/Signin"  style={{fontFamily:'Dongle', fontSize:25}}>
              Login in
              </Link>
              </li>
            <li class="uk-margin-small-top "><Link to="/Signup" href="#" style={{fontFamily:'Dongle', fontSize:25}}>
              Sign up
              </Link>
              </li>
             </>
             )
           }
        
           
          
        </ul>

    </div>

</nav>
    </>
  


  );
}


export default MainNavigation