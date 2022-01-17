// import { NavLink, Link } from 'react-router-dom';

// import classes from './MainNavigation.module.css';
// import logo from '../../images/logo.png'


// const MainNavigation = () => {
//   return (
   
// //     <header className={classes.header}>
// //       <nav style={{ backgroundColor: "white"}} class="uk-navbar-container uk-margin" uk-navbar>
// //     <div class="uk-navbar-left uk-margin-small-right uk-container row">

      
// //        <a class="uk-navbar-item uk-logo" href="#">
// //           <img src={logo} alt="Borrowlite logo" width="100px"></img>
// //         </a>
// //         <Link to class="uk-navbar-item uk-logo" href="#">
// //           <div className='uk-margin-left' style={{fontSize:"18px", marginTop:'10px'}}>Borrow light</div>
// //         </Link>

// //         <Link to class="uk-navbar-item uk-logo" href="#">
// //           <div className='uk-margin-left' style={{fontSize:"18px", marginTop:'10px'}}>Buy light</div>
// //         </Link>

// //         <Link to class="uk-navbar-item uk-logo" href="#">
// //           <div className='uk-margin-left' style={{fontSize:"18px", marginTop:'10px'}}>Become a vendor</div>
// //         </Link>

// //         <Link to class="uk-navbar-item uk-logo" href="#">
// //           <div className='uk-margin-left' style={{fontSize:"18px", marginTop:'10px'}}>For developers</div>
// //         </Link>

// //         <Link to class="uk-navbar-item uk-logo" href="#">
// //           <div className='uk-margin-left' style={{fontSize:"18px", marginTop:'10px'}}>Login</div>
// //         </Link>

// //         <Link to class="uk-navbar-item uk-logo" href="#">
// //           <div className='uk-margin-left' style={{fontSize:"18px", marginTop:'10px'}}>Signup</div>
// //         </Link>
       

// //     </div>
// // </nav>



// //       {/* <div className={classes.logo}>Great Quotes</div>
// //       <nav className={classes.nav}>
// //         <ul>
// //           <li>
// //             <NavLink to='/quotes' className={navData => navData.isActive ? classes.active : '' }>
// //               All Quotes
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink to='/new-quote' className={navData => navData.isActive ? classes.active : '' }>
// //               Add a Quote
// //             </NavLink>
// //           </li>
// //         </ul>
// //       </nav> */}
// //     </header>



// <nav class="uk-navbar-container" uk-navbar>

// <div class="uk-navbar-left">

//     <ul class="uk-navbar-nav">
//         <li class="uk-active"><a href="#">Active</a></li>
//         <li>
//             <a href="#">Parent</a>
//             <div class="uk-navbar-dropdown">
//                 <ul class="uk-nav uk-navbar-dropdown-nav">
//                     <li class="uk-active"><a href="#">Active</a></li>
//                     <li><a href="#">Item</a></li>
//                     <li><a href="#">Item</a></li>
//                 </ul>
//             </div>
//         </li>
//         <li><a href="#">Item</a></li>
//     </ul>

// </div>

// <div class="uk-navbar-right">

//     <ul class="uk-navbar-nav">
//         <li class="uk-active"><a href="#">Active</a></li>
//         <li>
//             <a href="#">Parent</a>
//             <div class="uk-navbar-dropdown">
//                 <ul class="uk-nav uk-navbar-dropdown-nav">
//                     <li class="uk-active"><a href="#">Active</a></li>
//                     <li><a href="#">Item</a></li>
//                     <li><a href="#">Item</a></li>
//                 </ul>
//             </div>
//         </li>
//         <li><a href="#">Item</a></li>
//     </ul>

// </div>

// </nav>



    
//   );
// };

// export default MainNavigation;






import * as React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from  '../../images/logo.png'
//import './main.css';


const  MainNavigation = (props)=> {
  const [showmenu, setShowmenu] = useState(false)
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const [showpop, setShowpop] = useState(false)



  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <Link to="/">
          <span class="sr-only">Borrowlite logo</span>
          <img class="h-8 w-auto sm:h-10" src={logo} alt=""/>
        </Link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button onClick={()=> setShowmenu(true)} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          {/* <!-- Heroicon name: outline/menu --> */}
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        <div class="relative">
          {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
          {/* <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
            <span>Solutions</span>
           
            <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button> */}
{/* 
          <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          --> */}
          {/*  
          <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
             
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
             <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Analytics
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Get a better understanding of where your traffic is coming from.
                    </p>
                  </div>
                </a>

                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Engagement
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Speak directly to your customers in a more meaningful way.
                    </p>
                  </div>
                </a>

                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Security
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Your customers&#039; data will be safe and secure.
                    </p>
                  </div>
                </a>

                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Integrations
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Connect with third-party tools that you&#039;re already using.
                    </p>
                  </div>
                </a>

                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Automations
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Build strategic funnels that will drive your customers to convert
                    </p>
                  </div>
                </a>
              </div>
              <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                <div class="flow-root">
                  <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                   
                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="ml-3">Watch Demo</span>
                  </a>
                </div>

                <div class="flow-root">
                  <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  
                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="ml-3">Contact Sales</span>
                  </a>
                </div>
              </div> 



            </div>
         
          </div>
             */}
        </div> 
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Borrow light 
      
         
        </a>

        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Buy light
        </a>
        <Link to="/Signup" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Become a vendor
        </Link>
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          For Developers
        </a>
      
        <div class="relative">
          {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
          {/* <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
            <span>Services</span>
           
            <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button> */}

          {/* <!--
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          --> */}
           {/* 
          <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
            
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
             <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Help Center
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Get all of your questions answered in our forums or contact support.
                    </p>
                  </div>
                </a>

                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Guides
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Learn how to maximize our platform to get the most out of it.
                    </p>
                  </div>
                </a>

                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Events
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      See what meet-ups and other events we might be planning near you.
                    </p>
                  </div>
                </a>

                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      Security
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Understand how we take your privacy seriously.
                    </p>
                  </div>
                </a>
              </div>
              <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                <div>
                  <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">
                    Recent Posts
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li class="text-base truncate">
                      <a href="#" class="font-medium text-gray-900 hover:text-gray-700">
                        Boost your conversion rate
                      </a>
                    </li>

                    <li class="text-base truncate">
                      <a href="#" class="font-medium text-gray-900 hover:text-gray-700">
                        How to use search engine optimization to drive traffic to your site
                      </a>
                    </li>

                    <li class="text-base truncate">
                      <a href="#" class="font-medium text-gray-900 hover:text-gray-700">
                        Improve your customer experience
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-5 text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
             
             
             </div>
             
          </div>
           */}
        </div>
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          About us
        </a>
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      
        
        {
          userdata._id !== null ? (
            <div>
          
            <button onMouseOver={()=>{setShowpop(true)}}  type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>

           {
             showpop == true? (
              <div onMouseLeave={()=>{setShowpop(false)}} class="origin-top-right absolute right-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
           
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
            </div>
             ):(<></>)
           }
          </div>
          ):(
           <div>
              <Link to="/Signin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">

Sign in
</Link>
  <Link to="Signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
  Sign up
</Link>
             </div>
          )
        }
       
        

       
      </div>
    </div>
  </div>

  {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
      {
        showmenu == true ? (
          <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src={logo} alt="borrowlite logo"/>
                </div>
                <div class="-mr-2">
                  <button onClick={()=> setShowmenu(false)} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                  
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
      
              <div class="mt-6">
                
                {/* <nav class="grid gap-y-8">
                  <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                   
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Analytics
                    </span>
                  </a>
      
                  <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                 
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Engagement
                    </span>
                  </a>
      
                  <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Security
                    </span>
                  </a>
      
                  <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                   
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Integrations
                    </span>
                  </a>
      
                  <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                   
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Automations
                    </span>
                  </a>
                </nav> */}
      
      
      
              </div>
      
      
            </div>
      
      
      
            <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
      
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
      
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  Help Center
                </a>
      
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  Guides
                </a>
      
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  Events
                </a>
      
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  Security
                </a>
              </div>
              <div>
                <Link to="/signup" onClick={()=> setShowmenu(false)} class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </Link>
                <p  class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <Link to="/signin" onClick={()=> setShowmenu(false)} class="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link >
                </p>
              </div>
            </div>
       
      
          </div>
        </div>
        ): (<></>)
      }
</div>

     
     {/* <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />  */}
    </div>
  );
}


export default MainNavigation