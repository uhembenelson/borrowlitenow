import * as React from 'react';
import MainNavigation from '../components/layout/MainNavigation';

const  Index = () => {
  return (
      <body class="container">
        <div class="row uk-margin-large-top">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">

            {/* mobile */}
            <div class="uk-hidden@s">
            <div class="" style={{color:'#339900', fontFamily:'Dongle', fontSize:60, fontWeight:'800', lineHeight:1}}>Borrow light now</div>
            <div class="" style={{color:'#450acc' , marginTop:-20, fontFamily:'Dongle', fontSize:60, fontWeight:'800'}}>pay back later</div>

            <div class="" style={{color:'gray' , lineHeight:'1', fontFamily:'Dongle', fontSize:25, fontWeight:'800'}}>
            Currently out of power? without money? let us help you meet that target..
               With borrowlite you can borrow electricity token now and pay later
              </div>
              <div class="uk-margin">
              <button style={{ backgroundColor:'#339900', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s ">Borrow light</button>
              <button style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s">Borrow light</button>
              </div>
            </div>


           <div class="visible-lg-block">
           <div class="" style={{color:'#339900', fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>Borrow light now</div>
            <div class="" style={{color:'#450acc' , marginTop:-70, fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>pay back later</div>
            <div class="" style={{color:'gray' , lineHeight:'1', fontFamily:'Dongle', fontSize:25, fontWeight:'800'}}>
            Currently out of power? without money? let us help you meet that target..
               With borrowlite you can borrow electricity token now and pay later
              </div>
              <div class="uk-margin">
              <button style={{ backgroundColor:'#339900', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s ">Borrow light</button>
              <button style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s">Borrow light</button>
              </div>
           </div>
            
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            this is two
          </div>
        </div>





           {/* mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 */}
          {/* <main class="grid grid-cols-2  max-w-7xl">
        <div class="sm:text-center lg:text-center ">
          <h1 class="text-6xl  font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline" style={{color:'#339900'}}>Borrow light now </span>  
            <span class="block xl:inline" style={{color:'#450acc'}}>pay back later</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-full">
          Currently out of power? without money? let us help you meet that target..
         With borrowlite you can borrow electricity token now and pay later
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Borrow light
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Buy light
              </a>
            </div>
          </div>
        </div>
        <div className=''>
          <p>image will go here</p>
        </div>
      </main> */}

      </body>


    
  );
}

export default Index;