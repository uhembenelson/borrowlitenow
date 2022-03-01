import {React, useState} from 'react';
import MainNavigation from '../components/layout/MainNavigation';
import bg from '../images/mainimage.png';
import { Outlet, Link } from 'react-router-dom';
import Popup from 'react-animated-popup';
import axios from 'axios';
import swal from 'sweetalert';
import { Dots, Spinner } from "react-activity";
import {Helmet } from 'react-helmet-async'





const  Index = () => {
  const [wait, setWait] = useState("over")
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
                axios.post('https://borrowlight.herokuapp.com/api/v2/register/',payload).then(function (response) {
                  console.log(response.data)
                                if(response.data.data == "account created"){
                                  setLoadingme(false)
                                  setSuccess(<Welcome/>)
                                  setShowsuccess(true);
                                  setEmail(""); setFullname(""); setMeter_number(""); setNumber(""); setUserType("")
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

 
}


const Welcome =()=>{
  return(
    <div>
    <p>
    We’re thrilled to have you join us at borrowlite, we will send you a text message or an email with your token when it's generated
    </p>
    follow us on our social media platforms while you wait..
    <p>
<a href="https://www.twitter.com/borrowlite" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
<a href="https://www.facebook.com/borrowlite" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
<a href="https://www.instagram.com/borrowlite" class="uk-icon-button" uk-icon="instagram"></a>
    
    </p>
    

    
    
    </div>
  )
    

  }









  
  return (
      <body class="container">
      {
        wait == "over"?(
          <>
          <div class="row">
            
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">

            {/* mobile */}
            <div class="uk-hidden@s">
            <div class="" style={{color:'#339900', fontFamily:'Dongle', fontSize:60, fontWeight:'800', lineHeight:1}}>Borrow light now</div>
            <div class="" style={{color:'#450acc' , marginTop:-20, fontFamily:'Dongle', fontSize:60, fontWeight:'800'}}>pay back later</div>

            <div class="" style={{color:'#22292E' , lineHeight:'1', fontFamily:'Dongle', fontSize:25, fontWeight:'800'}}>
            Currently out of power? without money? let us help you meet that target..
               With borrowlite you can borrow electricity token now and pay later
              </div>
              <img className="hidden-lg hidden-md" src={bg} style={{marginTop:-50, justifyContent:"center", alignContent:"center" }} />
              <div class="uk-margin">
              <button style={{ backgroundColor:'#339900', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s ">Borrow light</button>
              <button style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s">Buylight</button>
              </div>
            </div>


           <div class="visible-lg-block uk-margin-top">
           <div class="" style={{color:'#339900', fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>Borrow light now</div>
            <div class="" style={{color:'#450acc' , marginTop:-70, fontFamily:'Dongle', fontSize:100, fontWeight:'800'}}>pay back later</div>
            <div class="" style={{fontFamily:'Dongle', fontSize:22, color:'#22292E', fontWeight:'200', lineHeight:1.2}}>
            Currently out of power? without money? let us help you meet that target..
               With borrowlite you can borrow electricity token now and pay later, <Link to="">learn more 
               about borrowlite and the services we offer </Link>
              </div>
              <div class="uk-margin uk-margin-large-top">
              <Link to="/borrowlight">
              <button style={{ backgroundColor:'#339900', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s ">Borrow light</button>
              </Link>
              <button style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:20, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-3@l uk-width-1-1@s">Buy light</button>
              </div>
           </div>
            
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
            <img className="hidden-sm hidden-xs" src={bg} style={{marginTop:-100, justifyContent:"center", alignContent:"center", marginLeft:80 }} />
          </div>

         




        </div>
        {/* <div className="row " >
            <div  className="uk-text-center" style={{ marginTop:70, fontSize:42}}> Why Choose <span style={{color:"#339900"}}>Borrowlite</span></div>
              

              <div className="uk-margin-large-top uk-flex" style={{justifyContent:'space-around', alignContent:'center', alignItem:'center' }}>
              <div className="col-lg-4 col-md-4 col-ms-12 col-xs-12 uk-margin-left uk-margin-right">
              <div className=" uk-text-center uk-card-body uk-card-default uk-card-small">
                one
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-ms-12 col-xs-12 uk-margin-left uk-margin-right">
            <div className="uk-card-body uk-card-default uk-card-small">
                one
              </div>
            </div>
          

            <div className="col-lg-4 col-md-4 col-ms-12 col-xs-12 uk-margin-left uk-margin-right">
            <div className="uk-card-body uk-card-default uk-card-small">
                one
              </div>
            </div>
              </div>
          </div> */}

        </>
        ):(<>
          <Showpop/>

          <div class="row">
         
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">

           


           <div class=" uk-margin-top">
           <div class="" style={{color:'#339900', fontFamily:'Dongle', fontSize:50, fontWeight:'800'}}>Borrow light now</div>
            <div class="" style={{color:'#450acc' , marginTop:-35, fontFamily:'Dongle', fontSize:50, fontWeight:'800'}}>pay back later</div>
            <div class="col-lg-9 col-sm-12 col-md-12 col-xs-12 ">
            <div class="" style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1}}>
               With borrowlite you can borrow electricity token now and pay later,
               Join our wait list to get 500 Naira worth of electricity for your meter
              </div>
              <h2 class="uk-margin-top" style={{fontFamily:'Dongle', color:'#450acc'}}>
              Buy electricity
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1, marginTop:-20}}>
                  Buy electricity with borrowlite with just a few clicks and get token sent to you
                  email and phone number.
                </p>
                <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', marginTop:-20}}>
              Borrow electricity
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1, marginTop:-20}}>
                  Are you out of electricity and out cash or can't access your regular power vendor? with
                  borrowlite you can borrow light to help you through the night or help you finish that project and pay 
                  back later
                  </p>
                  <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', marginTop:-20}}>
              Rebust Api Integration
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1, marginTop:-20}}>
                We have also extended the 
                  borrow functionalities to vendors who want to start earning on borrow.
                  With our <Link to="">robust Apis</Link> developers can integrate and extend borrowlite services to  user
                  </p>

                  <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', marginTop:-20}}>
                  Strong coverage across Nigeria
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1, marginTop:-20}}>
               With over 9 Discos integrated you can access  light and borrow light from any where in Nigeria 
                  </p>
                  <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', marginTop:-20}}>
                  24/7 reliable customer support
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1, marginTop:-20}}>
                Our technical product specialists are always available to help via email, zoom, or call. <br/>
                Thank you for choosing us. We look forward to being your reliable electricity partner.
                  </p>
                  <p>Uhembe Nelson</p>
                  <p style={{marginTop:-20}}>CEO/founder Borrowlite</p>
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