import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../Home/Blocks/Footer';


const Comingsoon = ()=>{

    return(
        <>
        <div className="uk-container uk-height-large  uk-flex uk-flex-center   uk-flex-middle uk-flex-column uk-margin-large-top ">
           <div className=" hidden-sm hidden-xs" style={{fontSize:150, fontFamily:'Dongle', color:'#450ACC'}}>Coming <span style={{color:'#339900'}}>Soon</span></div>
           <div className="hidden-lg hidden-md " style={{fontSize:80, fontFamily:'Dongle', color:'#450ACC'}}>Coming <span style={{color:'#339900'}}>Soon</span></div>
           <div className="uk-text-center" style={{fontFamily:'Dongle', fontSize:30, fontWeight:'300', marginTop:-30}}>
               This functionality is coming soon, signup to be the first to know when we drop this update
           </div>
           <Link to="/signup">
                  <button
                  style={{
                    backgroundColor: "#450acc",
                    color: "white",
                    fontFamily: "Dongle",
                    fontSize: 20,
                    borderRadius: 5,
                  }}
                  class=" uk-button uk-button-default uk-button-large uk-margin-small-top  uk-width-1-1@l uk-width-1-1@s"
                >
                  Sign up
                </button>
                </Link>
        </div>
        <Footer/>
        </>
    )

}
export default Comingsoon;