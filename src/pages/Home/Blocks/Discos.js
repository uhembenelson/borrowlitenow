import React, { Component } from 'react';
import  jed from '../../../images/JED.png';
import aedc from '../../../images/AEDC.png';
import ekedc from '../../../images/EKEDC.png';
import ikedc from '../../../images/IKEDC.png';
import kedco from '../../../images/KEDCO.png';
import phed from '../../../images/PHED.png';
import kaedco from '../../../images/KAEDCO.png';
import eedc from '../../../images/EEDC.png';
import ibedc from '../../../images/IBEDC.png';


const Discos = () => {

    return(
        <>
         <div className="row uk-margin-top uk-margin-bottom" style={{fontSize:42, fontFamily:'Dongle', textAlign:'center'}}><span style={{color:"#339900"}}>Discos</span> <span style={{color:"#22292E"}}>we Support</span></div>

<div className="row uk-margin" uk-grid uk-height-match="target: > div > .uk-card">
  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={jed}/>
    </div>
  </div>

  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={aedc} className="uk-margin-top"/>
    </div>
  </div>

  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={ikedc}/>
    </div>
  </div>

  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={ekedc}/>
    </div>
  </div>

  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={kedco}/>
    </div>
  </div>
  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={phed}  className="uk-margin-top"/>
    </div>
  </div>

  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={kaedco}  className="uk-margin-top"/>
    </div>
  </div>

  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={eedc}  className="uk-margin-top"/>
    </div>
  </div>

  <div className="col-lg-3 col-xs-4 uk-margin-top">
    <div style={{borderRadius:5}} className=" uk-text-center uk-card uk-card-body uk-card-small uk-card-default">
      <img src={ibedc}  />
    </div>
  </div>
</div>

        </>
        
    )
}
export default Discos;