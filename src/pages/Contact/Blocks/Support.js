import React from 'react';
import fb from '../../../images/fb.png';
import whatsapp from '../../../images/whatsapp.png';
import chevronsR from '../../../images/chevronsR.png';

const Support = () => {
  
    return (
      <div className="uk-container uk-text-center"> 
        <div className="uk-margin-top hidden-lg hidden-md " style={{textAlign:'left', fontSize:42, fontFamily:'Dongle' , fontWeight:'200'}}>Enjoy our <span style={{color:'#339900'}}>Customer Service</span> and have your issue 
            solved anytime, day and night
       </div>
        <div className="uk-margin-top hidden-sm hidden-xs " style={{textAlign:'center', fontSize:42, fontFamily:'Dongle' , fontWeight:'200'}}>Enjoy our <span style={{color:'#339900'}}>Customer Service</span> and have your issue<br/> 
            solved anytime, day and night
        </div>

        <div className="uk-margin-large-top  " style={{textAlign:'center', fontSize:42, fontFamily:'Dongle', fontWeight:'200'}}> <span style={{color:'#450ACC'}}>Support</span> Channels </div>

        <div className="  " style={{textAlign:'center', fontSize:25, fontFamily:'Dongle', fontWeight:'200'}}> Choose from our available support channels </div>

       <div className='uk-margin-large-top'>
         <div className="hidden-sm hidden-xs col-lg-6 col-md-6  col-sm-6 ">
            <div>

                <img src={fb} style={{width:333, height:333}} alt="" />

              <div className="uk-margin-top" style={{fontSize:40, fontFamily:'Dongle', fontWeight:'300'}}>Facebook</div>
              <div className="" style={{marginTop: -11, fontSize:32, fontFamily:'Dongle', fontWeight:'300'}}>chat now <span>
              <img src={chevronsR} style={{height:16, width:16}} alt="" />
              </span></div> 
            </div>

        </div>
        <div className="hidden-lg hidden-md col-lg-6 col-md-6  col-sm-6 ">
            <div>

                <img src={fb} style={{width:121, height:121}} alt="" />

              <div className="uk-margin-top" style={{fontSize:40, fontFamily:'Dongle', fontWeight:'300'}}>Facebook</div>
              <div className="" style={{marginTop: -11, fontSize:32, fontFamily:'Dongle', fontWeight:'300'}}>chat now <span>
              <img src={chevronsR} style={{height:16, width:16}} alt="" />
              </span></div> 
            </div>

        </div>

        <div className=" hidden-sm hidden-xs col-lg-6 col-md-6  col-sm-6 ">
            
            <img src={whatsapp} style={{width:333, height:333}} alt="" />

              <div className="uk-margin-top" style={{fontSize:40, fontFamily:'Dongle', fontWeight:'300'}}>Whatsapp</div>
              <div className="" style={{marginTop: -11, fontSize:32, fontFamily:'Dongle', fontWeight:'300'}}>Chat now <span> 
              <img src={chevronsR} style={{height:16, width:16}} alt="" />
              </span></div>
        </div>
       </div>

        <div className="hidden-lg hidden-md  col-lg-6 col-md-6  col-sm-6 ">
            
            <img src={whatsapp} style={{width:121, height:121}} alt="" />

              <div className="uk-margin-top" style={{fontSize:40, fontFamily:'Dongle', fontWeight:'300'}}>Whatsapp</div>
              <div className="" style={{marginTop: -11, fontSize:32, fontFamily:'Dongle', fontWeight:'300'}}>Chat now <span> 
              <img src={chevronsR} style={{height:16, width:16}} alt="" />
              </span></div>
        </div>
           
    </div>
    );
  
}




export default Support;
