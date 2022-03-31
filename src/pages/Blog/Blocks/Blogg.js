import React, { Component } from 'react';
import Footer from '../../Home/Blocks/Footer';
import Blogpic from './Blogpic';

const Blogg = () => {
  
    return (
    <>
    
        
        <div className="uk-text-center"> 
        <div className="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-sm hidden-xs" style={{fontSize:62,fontFamily:'Dongle', fontWeight:'300' , color:'#339900'}}>
        Blog
        </div>

        
        <div className="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-lg hidden-md" style={{fontSize:32,fontFamily:'Dongle', fontWeight:'300' , color:'#339900'}}>
        Blog
        </div>

        <div className="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-sm hidden-xs" style={{fontSize:32,fontFamily:'Dongle', fontWeight:'300' }}>
        We just don't design and develop. Sometimes we alse write down words. Here we share <br/>
        <span style={{marginRight:'272px'}}>our insights and findings from our daily work at borrowlite</span>
        </div>

        <div className="uk-margin-small-top uk-margin-small-bottom uk-text-center  uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-lg hidden-md" style={{fontSize:32,fontFamily:'Dongle', fontWeight:'300' }}>
        
        </div>


        <div className="uk-margin">
            <form className="uk-search uk-search-default" style={{width:'450px'}}>
                <span className="uk-search-icon-flip" uk-search-icon></span>
                <input className="uk-search-input" type="search" placeholder="Search" />
            </form>
        </div>
        <Blogpic/>
        
     </div>


     <Footer/>
    </>
    );
  
}






export default Blogg;