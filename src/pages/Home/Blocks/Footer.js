import React, { Component } from 'react';
import logo from '../../../images/logo.png';
import insta2 from '../../../images/insta2.png';
import facebook from '../../../images/facebook.png';
import twi from '../../../images/twi.png';
import lin from '../../../images/lin.png';


const Footer = () => {

    return(
        <div className="uk-margin-large-top" style={{backgroundColor:'#F8F5FF'}}>
        <div className="uk-container">
          <div className="  col-lg-3 col-lg-12 uk-margin-top uk-margin-large-bottom">
            <img src={logo} style={{width:120}}/>
            <div style={{fontSize:32,fontFamily:'Dongle', fontWeight:'300' }}>
            @2022 Borrowlite inc.
            </div>
            <div className="row">

            <img src={insta2} style={{width:52, height:52,}} className="uk-margin-right" />                 
            <img src={facebook} style={{width:52, height:52,}} className="uk-margin-right" />
            <img src={twi} style={{width:52, height:52,}} className="uk-margin-right" />
            <img src={lin} style={{width:52, height:52,}} className="uk-margin-right" />
                
            </div>
            </div>
          <div className="col-lg-9 col-lg-12 uk-margin-top uk-margin-large-bottom">
            <div className="row uk-margin-top">
              <div className="col-lg-3 col-xs-6 ">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Products</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Borrow Electricity</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Buy Electricity</div>
              </div>

              <div className="col-lg-3 col-xs-6 ">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Legal</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Terms of Use</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Privacy Policy</div>
              </div>

              <div className="col-lg-3 col-xs-6 ">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Learn</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>FAQ</div>
              </div>

              <div className="col-lg-3 col-xs-6">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Company</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Contact Us</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>About Us</div>
              </div>
            </div>
            </div>
        </div>
     </div>
    )
}
export default Footer;