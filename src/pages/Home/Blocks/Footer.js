import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import insta2 from '../../../images/insta2.png';
import facebook from '../../../images/facebook.png';
import twi from '../../../images/twi.png';
import lin from '../../../images/lin.png';


const Footer = () => {

    return(
        <div className="uk-margin-large-top" style={{backgroundColor:'#F8F5FF'}}>
          <div className="uk-container">
            <div className="col-lg-3 col-lg-12 uk-margin-top uk-margin-large-bottom uk-margin-left">
              <img src={logo} style={{width:120}} alt=""/>
              <div style={{fontSize:32,fontFamily:'Dongle', fontWeight:'300' }}>
              @2022 Borrowlite inc.
              </div>
              <div className="row">

              <img src={insta2} style={{width:52, height:52,}} className="uk-margin-right" alt="" />                 
              <img src={facebook} style={{width:52, height:52,}} className="uk-margin-right" alt="" />
              <img src={twi} style={{width:52, height:52,}} className="uk-margin-right" alt=""/>
              <img src={lin} style={{width:52, height:52,}} className="uk-margin-right" alt="" />
                  
            </div>
          </div>

          <div className="col-lg-9 col-lg-12 uk-margin-top uk-margin-large-bottom">
            <div className="row uk-margin-top">
              <div className="col-lg-3 col-xs-6 ">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Products</div>
                <Link to="/borrowlight" style={{textDecoration: 'none', color: '#333333'}}><div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Borrow Electricity</div></Link>
                <Link to="/buy" style={{textDecoration: 'none', color: '#333333'}}><div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Buy Electricity</div></Link>
              </div>

              <div className="col-lg-3 col-xs-6 ">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Legal</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Terms of Use</div>
                <div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Privacy Policy</div>
              </div>

              <div className="col-lg-3 col-xs-6 ">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Learn</div>
                <Link to="/faq" style={{textDecoration: 'none', color: '#333333'}}><div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>FAQ</div></Link>
              </div>

              <div className="col-lg-3 col-xs-6">
                <div className="uk-margin-left" style={{fontSize:32,fontFamily:'Dongle',}}>Company</div>
                <Link to="/contact" style={{textDecoration: 'none', color: '#333333'}}><div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Contact Us</div></Link>
                <Link to="/about" style={{textDecoration: 'none', color: '#333333'}}><div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>About Us</div></Link>
                <Link to="/blog" style={{textDecoration: 'none', color: '#333333'}}><div className="uk-margin-left" style={{fontSize:24,fontFamily:'Dongle', fontWeight:'300'}}>Blog</div></Link>
              </div>
            </div>
            </div>
        </div>
     </div>
    )
}
export default Footer;