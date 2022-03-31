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

        <div class="uk-margin">
        <div class="uk-inline uk-width-1-2">
            <span style={{color:'black', fontWeight:'600'}} class="uk-form-icon" uk-icon="icon: search;ratio: 1.5"></span>
            <input style={{borderRadius:5,height:66, fontFamily:'Dongle', fontSize:32, fontWeight:'300'}} class="uk-input" type="text"  placeholder="Search for articles"/>
        </div>
    </div>
        {/* <div className="uk-margin">
            <form className="uk-search uk-search-default" style={{width:'450px'}}>
                <span className="uk-search-icon-flip" uk-icon="search"></span>
                <input  style={{borderRadius:5,height:66, fontFamily:'Dongle', fontSize:32, fontWeight:'300'}} className="uk-search-input" type="text" placeholder="Search for articles" />
            </form>
        </div> */}


        
        <Blogpic/>
        
     </div>


    
    </>
    );
  
}






export default Blogg;