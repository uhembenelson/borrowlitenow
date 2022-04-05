import React, { Component } from 'react';



const Blogg = () => {
  
    return (
    <>
    
        
        <div className="uk-text-center"> 
        <div className="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-sm hidden-xs" 
        style={{
        fontSize:62,
        fontFamily:'Dongle',
        fontWeight:300 ,
        color:'#339900'
        }}>
        Blog
        </div>

        <div className="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-lg hidden-md"
         style={{
        fontSize:42,
        fontFamily:'Dongle',
        fontWeight:300 , 
        color:'#339900'
        }}>
        Blog
        </div>

        <div className="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-sm hidden-xs  " 
        style={{
        fontSize:32,
        fontFamily:'Dongle', 
        fontWeight:300.5 , 
        letterSpacing:0.05,
        letter:5
        
        }}>
            <span style={{marginRight:85}} > We just don't design and develop. Sometimes we alse write down words. Here we share </span> <br/>
        <span style={{marginRight:350}}>our insights and findings from our daily work at borrowlite</span>
        </div>
       


        {/* <div className="uk-margin">
            <form className="uk-search uk-search-default" style={{width:'450px'}}>
                <span className="uk-search-icon-flip" uk-search-icon></span>
                <input className="uk-search-input" type="search" placeholder="Search" />
            </form>
        </div> */}


        <form>
            <div class="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-sm hidden-xs" >
                <div class="uk-inline ">
                    <span style={{color:'#000000', top:5, marginTop:22}} class="uk-form-icon " uk-icon="icon: search"></span>
                    <input
                    style={{
                    fontFamily:'Dongle',
                    fontWeight:300,
                    fontSize:32,
                    color:'#BDBDBD',
                    borderRadius:5,
                    height:66,
                    width:582,
                    marginTop:30
                    
                    
                    
                    
                    

                    }}
                    class="uk-input uk-form-width-medium uk-form-large uk-form-width-large" 
                    type="text" placeholder='Search for articles'/>
                </div>
            </div>
            
            <div class="uk-margin-small-top uk-margin-small-bottom uk-text-center uk-margin-bottom uk-margin-top hidden-lg hidden-md">
                <div class="uk-inline">
                    <span style={{color:'#22292E'}} class="uk-form-icon" uk-icon="icon: search"></span>
                    <input 
                    style={{
                    fontFamily:'Dongle',
                    fontWeight:300,
                    fontSize:32,
                    color:'#BDBDBD',
                    borderRadius:5,
                    height:66,
                    width:382    
                    }}
                    class="uk-input" type="text" placeholder='search for articles'/>
                </div>
            </div>


        </form>







        
        
     </div>


    </>
    );
  
}






export default Blogg;