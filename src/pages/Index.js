import {React, useState} from 'react';
import MainNavigation from '../components/layout/MainNavigation';
import bg from '../images/bg.png';
import { Outlet, Link } from 'react-router-dom';
import Popup from 'react-animated-popup';
import axios from 'axios';
import swal from 'sweetalert';
import { Dots, Spinner } from "react-activity";





const  Index = () => {
  const [wait, setWait] = useState("")
  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const [userType, setUserType] = useState()
  const [password, setPassword] = useState()
  const [meter_number, setMeter_number] = useState()
  const [error, setError] = useState()
const [showerror, setShowerror] = useState(false)
const [loadingme, setLoadingme] = useState(false)
const [showsuccess, setShowsuccess] = useState(false)
const [success, setSuccess] = useState()
const [visible, setVisible] = useState(false)




const Showpop =()=>{

  return(
    <>
    <Popup visible={visible} onClose={() => setVisible(false)}>
    
     <div class="uk-inline">
     <div style={{ color:'red' }} class="  uk-form-icon" uk-icon="icon: warning; ratio: 2"></div>
     <h1 style={{fontFamily:'Dongle', color:'red',}} class="uk-margin-large-left uk-align-center">there was an error</h1>
     </div>
      <p style={{marginTop:-20, fontFamily:'Dongle', fontSize:25, lineHeight:1, fontWeight:100}}>
        {error}
      </p>
    
  </Popup>

  <Popup class="uk-margin-top" visible={showsuccess} onClose={() => setShowsuccess(false)}>
    
    <div class="uk-inline">
    <div style={{ color:'green' }} class="  uk-form-icon" uk-icon="icon: check; ratio: 2"></div>
    <h1 style={{fontFamily:'Dongle', color:'green',}} class="uk-margin-large-left uk-align-center">Welcome</h1>
    </div>
     <p style={{marginTop:-20, fontFamily:'Dongle', fontSize:25, lineHeight:1, fontWeight:100}}>
       {success}
     </p>
   
 </Popup>
  </>

  
  )
  }



  const register = () => {
  
    const payload = {
        fullname,
        email,
        number,
        userType,
        password,
        meter_number,
        balance:'0'
    }
    console.log(payload)
    if(fullname == undefined){
        setError("Hello dear your full name  is required")
     setVisible(true);
    }else{
      if(email == undefined){
        setError("Hello dear your email  is required")
             setVisible(true);
      }else{
        if(number == undefined){
          setError("Hello dear your phone number  is required")
          setVisible(true);
        }else{
          if(meter_number == undefined){
            setError("Hello dear your meter number is required")
               setVisible(true)
          }else{
            if(userType == undefined){
              setError("Hello dear your user type  is required")
                          setVisible(true);
            }else{
              if(password == undefined){
                setError("Hello dear your password  is required")
                  setVisible(true);
              }else{
                setLoadingme(true)
                axios.post('/register/',payload).then(function (response) {
                  console.log(response.data)
                                if(response.data.data == "account created"){
                                  setLoadingme(false)
                                  setSuccess(<Welcome/>)
                                  setShowsuccess(true);
                                }else{
                                  setLoadingme(false)
                                  setError(`${response.data.msg}`)
                                  setVisible(true);
                                    console.log("this is me", response.data.msg)
                                    
                                }

                }).catch((Error)=> {
                  setLoadingme(false)
                 if(Error == 'Network Error'){
                   setLoadingme(false)
                   setError('there seem to be a network error, please check your connection')
                   setVisible(true);

                 }

                })

              }
            }
          }

        }
      }
    }

    // if(fullname == undefined){
    //   setError("Hello dear your full name  is required")
    //  setVisible(true);
    // }else{
    //   if(email == undefined){
    //     setError("Hello dear your email  is required")
    //     setVisible(true);
    //   }else{
    //     if(number == undefined){
    //       setError("Hello dear your phone number  is required")
    //       setVisible(true);
    //     }else{
    //       if(userType == undefined){
    //         setError("Hello dear your user type  is required")
    //            setVisible(true);
    //       }else{

    //         if(password == undefined){
    //           setError("Hello dear your password  is required")
    //           setVisible(true);
    //         }else{

    //           if(meter_number == undefined){
    //             setError("Hello dear your meter number is required")
    //             setVisible(true)
    //           }else{
    //             setLoadingme(true)
    //             axios.post('/register/',payload).then(function (response) {
    //               console.log(response.data)
    //               if(response.data.data == "account created"){
    //                 setLoadingme(false)
    //                 setSuccess(<Welcome/>)
    //                 setShowsuccess(true);
    //               }else{
    //                 setLoadingme(false)
    //                 setError(`${response.data.msg}`)
    //                 setVisible(true);
    //                   console.log("this is me", response.data.msg)
                      
    //               }
          
    //       }).catch((Error)=> {
    //         setLoadingme(false)
    //             if(Error == 'Network Error'){
    //               setLoadingme(false)
    //               swal({
    //                 text:'there seem to be a network error, please check your connection'
    //               })
  
    //             }
    //       })
    //           }


             




    //         }



    //       }
    //     }
    //   }
    // }
}


const Welcome =()=>{
  return(
    <div>
    <p>
    We’re thrilled to have you join us at borrowlite, navigate to your login page to start exploring 
    our services
    </p>

    
    <p>
    <h4>For normal user</h4>
    As a normal user you can start buying or borrowing light in seconds, <Link to="/signin">login to get started</Link></p>
     
    <h4>For vendors </h4>
    <p>As a vendor you can start earning by extending borrowlite services to users around your communities or even your 
    family and friends. <Link to="/signin">Login to get started</Link></p>

    <h4>For developers</h4>
    <p>
    Developers can access our Apis to integrate and build upon, check our documentation to get start 
    </p>
    </div>
  )
    

  }









  
  return (
      <body class="container">

      {
        wait == "over"?(
          <div class="row">
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
              <button style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s">Buylight</button>
              </div>
            </div>


           <div class="visible-lg-block uk-margin-top">
           <div class="" style={{color:'#339900', fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>Borrow light now</div>
            <div class="" style={{color:'#450acc' , marginTop:-70, fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>pay back later</div>
            <div class="" style={{fontFamily:'Dongle', fontSize:30, color:'gray', fontWeight:'200', lineHeight:1}}>
            Currently out of power? without money? let us help you meet that target..
               With borrowlite you can borrow electricity token now and pay later, <Link to="">learn more 
               about borrowlite and the services we offer </Link>
              </div>
              <div class="uk-margin">
              <Link to="/borrowlight">
              <button style={{ backgroundColor:'#339900', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s ">Borrow light</button>
              </Link>
              <button style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s">Buy light</button>
              </div>
           </div>
            
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img src={bg}/>
          </div>
        </div>
        ):(<>
          <Showpop/>
          <div class="row">
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
              <button style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s">Buylight</button>
              </div>
            </div>


           <div class="visible-lg-block uk-margin-top">
           <div class="" style={{color:'#339900', fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>Borrow light now</div>
            <div class="" style={{color:'#450acc' , marginTop:-70, fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>pay back later</div>
            <div class="" style={{fontFamily:'Dongle', fontSize:30, color:'gray', fontWeight:'200', lineHeight:1}}>
               With borrowlite you can borrow electricity token now and pay later,
               Join our wait list to get 500 Naira worth of electricity for your meter
           
              </div>
              
             
           </div>
            
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          
         
     
          <div class="uk-card uk-card-body uk-card-default" style={{borderRadius:10}}>
          <h1 style={{fontFamily:'Dongle', color:'#450acc'}}>
                Join our wait list 
                  </h1>
                  <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: user"></span>
                      <input  value={fullname}   onChange={e => setFullname(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="text" placeholder='Enter your full name'/>
                  </div>
              </div>
              <div class="uk-margin">
              <div class="uk-inline">
                  <span class="uk-form-icon" uk-icon="icon: phone"></span>
                  <input value={number}   onChange={e => setNumber(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="Number" placeholder='Enter your phone number'/>
              </div>
          </div>

          <div class="uk-margin">
          <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: bolt"></span>
              <input value={meter_number}   onChange={e => setMeter_number(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="Number" placeholder='Enter your meter number'/>
          </div>
      </div>


          <div class="uk-margin">
          <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: mail"></span>
              <input value={email}   onChange={e => setEmail(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="email" placeholder='Enter your email address'/>
          </div>
      </div>
  
      <div class="uk-margin">
      <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: users"></span>
                      <select value={userType}   name="userType" onChange={e => setUserType(e.target.value)}  style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class= " uk-input uk-select uk-form-width-large uk-form-large" id="form-stacked-select">
                      <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} disabled>User type</option>
                      <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="personal">Personal</option>
                      <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="merchant">vendor</option>
                      <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="merchant">developer</option>
              </select>
      </div>
  </div>
  
   <div class="uk-margin">
          <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: lock"></span>
              <span class="uk-form-icon" uk-icon="icon: lock"></span>
              <input value={password}   onChange={e => setPassword(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="password" placeholder='Enter your password'/>
          </div>
      </div>
  
      <div class="uk-margin">
      <button onClick={register} disabled={loadingme}  style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:25, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-width-1-1">
       
         {
           loadingme == true? (<span>Creating your account please wait... <Dots /></span>):
            (<span>Join our wait list</span>)  
       }
        </button>
      </div>
  
      
          </div>
        

          </div>
        </div>
          </>)
      }
       
      </body>


    
  );
}

export default Index;