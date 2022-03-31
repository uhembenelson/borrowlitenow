
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

  const handleToggle = () => {
    if (showmenu === false){
      console.log("its working")
    } else{
      console.log("its not working")
    }
  }

  const { user } = useContext(UserContext)
  const Logout = async() =>{
    localStorage.removeItem("userdata");
    window.location.reload()
  }
  return (
    <>
    {/* <button class="uk-hidden@s uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary">Primary Nav</button>
    <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">

            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                <li class="uk-active"><a href="#">Active</a></li>
                <li class="uk-parent">
                    <a href="#">Parent</a>
                    <ul class="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li class="uk-nav-header">Header</li>
                <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
            </ul>

        </div>
    </div> */}

    {/* navbar for small screens */}
    <nav class="uk-navbar uk-hidden@s container" uk-navbar>
      <div class="uk-navbar-left">
        <ul  class="uk-navbar-nav ">
        <li class=""><a href="/">
          <img src={logo}  width={70} alt=""/>
          </a>
        </li>

        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul  class="uk-navbar-nav ">
        <li class="">
        <a uk-toggle="target: #offcanvas-nav-primary" href="#/">
        <img src={menu}  width={30} alt=""/>
        </a>
        </li>
        </ul>

        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
          <div style={{background: 'white'}} class="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul class="uk-nav uk-nav-default uk-nav-center uk-margin-large-top">
        <li class=""><a href="/">
          <img src={logo}  width={70} alt=""/>
          </a>
        </li>
                    <li class="uk-margin-small-top "><Link to="#/"  style={{fontFamily:'Dongle', fontSize:25, color: '#222'}}>
                      Vendor
                    </Link>
                    </li>
                    <li class="uk-margin-small-top "><Link to="#/"  style={{fontFamily:'Dongle', fontSize:25, color: '#222'}}>
                      For Developers
                      </Link>
                    </li>
                    <li class="uk-margin-small-top "><Link to="/about"  style={{fontFamily:'Dongle', fontSize:25, color: '#222'}}>
                      About Us 
                      </Link>
                    </li>
                    <li class="uk-margin-small-top "><Link to="/signin"  style={{fontFamily:'Dongle', fontSize:25, color: '#222'}}>
                    <span style={{color: '#222'}} class="uk-margin-small-right" uk-icon="icon: sign-in"></span>Login in
                    </Link>
                    </li>
                    <li class="uk-margin-small-top "><Link to="/Signup" href="#" style={{fontFamily:'Dongle', fontSize:25, color: '#222'}}>
                    <span style={{color: '#222'}} class="uk-margin-small-right" uk-icon="icon: sign-out"></span>Sign up
                    </Link>
                    </li>
                  </ul>

              </div>
          </div>
      </div>
    </nav>
    {/* end of navabar for small screens */}
 
    {/* navbar for large screens */}
    <nav class="uk-navbar uk-visible@l container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav ">
          <li class="">
            <Link to="/" href="#">
            <img src={logo} alt=""  width={100}/>
            </Link>
          </li>
                
              
        </ul>
      </div>

      <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li class="uk-margin-small-top "><a href="#/" style={{fontFamily:'Dongle', fontSize:25}}>
              vendor
              </a>
            </li>
            <li class="uk-margin-small-top "><a href="#/" style={{fontFamily:'Dongle', fontSize:25}}>
              For developers
              </a>
              </li>
              <li class="uk-margin-small-top "><Link to="/About" style={{fontFamily:'Dongle', fontSize:25}}>
              about Us
              </Link>
            </li>

            {
              user !==  null? (
                <li class=" ">
                  <a onClick={()=>{Logout()}} href="#/" style={{marginTop:10 ,fontFamily:'Dongle', fontSize:25}}>
                {/* <img class="uk-border-pill" src={userImage} width="30" height="30" alt="Border pill"/> */}

                Logout
                  </a>
                  </li>
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