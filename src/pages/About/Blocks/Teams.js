import React, { Component } from 'react';
import nelson from '../../../images/nelson.png';

import adam from '../../../images/adam.png'


import insta2 from '../../../images/insta2.png';
import facebook from '../../../images/facebook.png';
import lin from '../../../images/lin.png';



const Teams = () => {

    return(
        <>
       <div className="uk-text-center uk-margin-bottom">
       <div className="uk-margin-large-top uk-margin-large-bottom uk-text-center" style={{fontSize:42,fontFamily:'Dongle', fontWeight:'300'}}>
        Meet our <span style={{color:'#450ACC'}}>Team</span>
        </div>

      <div className="row">
       <div className="hidden-sm hidden-xs col-lg-4 col-md-4 col-xs-6 col-sm-6 " >
          <div>
              <img src={nelson} style={{width:333, height:333}} alt=""/>
              <div className="uk-margin-top" style={{fontSize:40, fontFamily:'Dongle', fontWeight:'300'}}>Uhembe Nelson</div>
              <div className="" style={{marginTop: -11, fontSize:22, fontFamily:'Dongle', fontWeight:'300'}}>CEO, Founder, Engineering Lead</div>
              <div>
                <img src={insta2} style={{width:52, height:52,}}  className="uk-margin-right" alt="" />                 
                <img src={facebook} style={{width:52, height:52,}} alt="" />
                <img src={lin} style={{width:52, height:52,}} className="uk-margin-left" alt="" />
              </div>
          </div>
        </div>

        <div className="hidden-lg hidden-md col-lg-4 col-md-4 col-xs-6 col-sm-6">
          <div>
              <img src={nelson} style={{width:160, height:160}} alt=""/>
              <div className="uk-margin-top" style={{fontSize:32, fontFamily:'Dongle', fontWeight:'300'}}>Uhembe Nelsonn</div>
              <div className="" style={{marginTop: -11, fontSize:18, fontFamily:'Dongle', fontWeight:'300'}}>CEO, Founder, Engineering Lead</div>
              <div>
                <img src={insta2} style={{width:32, height:32,}}  className="uk-margin-right" alt="" />                 
                <img src={facebook} style={{width:32, height:32,}} alt="" />
                <img src={lin} style={{width:32, height:32,}} className="uk-margin-left" alt="" />
              </div>
          </div>
        </div>
        


         <div className="hidden-sm hidden-xs col-lg-4 col-md-4 col-xs-6 col-sm-6 " >
          <div>
              <img src={adam} style={{width:333, height:333}} alt=""/>
              <div className="uk-margin-top" style={{fontSize:40, fontFamily:'Dongle', fontWeight:'300'}}>Khairat Adam</div>
              <div className="" style={{marginTop: -11, fontSize:22, fontFamily:'Dongle', fontWeight:'300'}}>Ui/Ux Intern</div>
              <div>
              <img src={insta2} style={{width:52, height:52,}}  className="uk-margin-right" alt="" />                 
            <img src={facebook} style={{width:52, height:52,}} alt="" />
            <img src={lin} style={{width:52, height:52,}} className="uk-margin-left" alt="" />
              </div>
          </div>
        </div>
        <div className="hidden-lg hidden-md col-lg-4 col-md-4 col-xs-6 col-sm-6">
          <div>
              <img src={adam} style={{width:160, height:160}} alt=""/>
              <div className="uk-margin-top" style={{fontSize:32, fontFamily:'Dongle', fontWeight:'300'}}>Khairat Adam</div>
              <div className="" style={{marginTop: -11, fontSize:18, fontFamily:'Dongle', fontWeight:'300'}}>Ui/Ux Intern</div>
              <div>
                <img src={insta2} style={{width:32, height:32,}}  className="uk-margin-right" alt="" />                 
                <img src={facebook} style={{width:32, height:32,}} alt="" />
                <img src={lin} style={{width:32, height:32,}} className="uk-margin-left" alt="" />
              </div>
          </div>
        </div>

        
        <div className=" hidden-sm hidden-xs col-lg-4 col-md-4 col-xs-6 col-sm-6 " >
          <div>
              <img src={nelson} style={{width:333, height:333}} alt=""/>
              <div className="uk-margin-top" style={{fontSize:40, fontFamily:'Dongle', fontWeight:'300'}}>John Doe</div>
              <div className="" style={{marginTop: -11, fontSize:22, fontFamily:'Dongle', fontWeight:'300'}}>Product Manager</div>
              <div>
                <img src={insta2} style={{width:52, height:52,}}  className="uk-margin-right" alt=""/>                 
                <img src={facebook} style={{width:52, height:52,}} alt=""  />
                <img src={lin} style={{width:52, height:52,}} className="uk-margin-left" alt=""  />
              </div>
          </div>
        </div>
        <div className="hidden-lg hidden-md col-lg-4 col-md-4 col-xs-6 col-sm-6">
          <div>
              <img src={nelson} style={{width:160, height:160}} alt=""/>
              <div className="uk-margin-top" style={{fontSize:32, fontFamily:'Dongle', fontWeight:'300'}}>John Doe</div>
              <div className="" style={{marginTop: -11, fontSize:18, fontFamily:'Dongle', fontWeight:'300'}}>Product Manager</div>
              <div>
                <img src={insta2} style={{width:32, height:32,}}  className="uk-margin-right" alt="" />                 
                <img src={facebook} style={{width:32, height:32,}} alt="" />
                <img src={lin} style={{width:32, height:32,}} className="uk-margin-left" alt="" />
              </div>
          </div>
        </div>


        </div>   
       </div>

        </>
    )
}
export default Teams;
