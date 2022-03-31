import React, { Component } from 'react';
import happy from '../../../images/happy.png';
import About from '../../Home/Blocks/Aboutus';
import Teams from './Teams';
import Footer from '../../Home/Blocks/Footer';
import Toggle from '../../Toggle/index';

const Mission = () => {


    return(
        <>
       <div className="uk-container">
     
           <div className="uk-margin-top hidden-lg hidden-md " style={{textAlign:'left', fontSize:42, fontFamily:'Dongle'}}><span style={{color:'#339900'}}>Convenience</span> from your comfort zone</div>
           <div className="uk-margin-top hidden-sm hidden-xs " style={{textAlign:'center', fontSize:42, fontFamily:'Dongle'}}><span style={{color:'#339900'}}>Convenience</span> from your comfort zone</div>
           <div className="uk-margin-top hidden-lg hidden-md " style={{textAlign:'left', fontSize:22, fontFamily:'Dongle', fontWeight:'300'}}>
           Currently out of power? without money? Let us help you meet that target... With borrowlite, you can borrow electricity token now<br/>
            and pay late. learn more about borrowlite and the services we offer 
           </div>

        <Toggle/>


           <div className="uk-margin-top hidden-sm hidden-xs" style={{textAlign:'center', fontSize:22, fontFamily:'Dongle', fontWeight:'300'}}>
           Currently out of power? without money? Let us help you meet that target... With borrowlite, you can borrow electricity token now<br/>
            and pay late. learn more about borrowlite and the services we offer 
           </div>


           <div className="row uk-text-center uk-margin-large-top">

           <div className=" hidden-lg hidden-md col-lg-6 col-sm-12 col-xs-12 uk-margin-small-top">
                   <img src={happy}/>
                </div>


               <div className="col-lg-6 col-sm-12 col-xs-12 hidden-lg hidden-md">
                    <div className="" style={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
                    <div className="uk-margin-top" style={{fontSize:42,fontFamily:'Dongle', fontWeight:'200',}}>Our <span style={{color:'#450ACC'}}>Mission</span></div>
                    


                    <div className="" style={{fontSize:22, fontWeight:'200', fontFamily:'Dongle'}}>
                    Currently out of power? without money? Let us help you meet that target... With borrowlite, you can borrow electricity token now and pay late. learn more about borrowlite and the services we offer 
                    </div>


                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-xs-12 hidden-xs hidden-sm uk-margin-large-top">
                    <div className="uk-margin-large-top" style={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
                    <div className="" style={{fontSize:42,fontFamily:'Dongle', fontWeight:'200',}}>Our <span style={{color:'#450ACC'}}>Mission</span></div>
                    


                    <div className="" style={{fontSize:22, fontWeight:'200', fontFamily:'Dongle'}}>
                    Currently out of power? without money? Let us help you meet that target... With borrowlite, you can borrow electricity token now and pay late. learn more about borrowlite and the services we offer 
                    </div>


                    </div>
                </div>

                <div className=" hidden-sm hidden-xs col-lg-6 col-sm-12 col-xs-12 uk-margin-small-top">
                   <img src={happy}/>
                </div>
           </div>
           <Teams/>
        

       </div>

       <Footer/>
       </>
    )
}
export default Mission 
