import { React, useState} from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Popup from 'react-animated-popup';
import axios from '../../lib/Config'

import logo from '../../images/logo.png'
import Footer from '../Home/Blocks/Footer';


const  Signin = ()=> {
  const [visible, setVisible] = useState(false)
  const [number, setNumber] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [showsuccess, setShowsuccess] = useState(false)
  const [success, setSuccess] = useState()
  const [isloading, setIsloading] = useState(false)
  const navigate = useNavigate();

  const login  = () => {
   
    const data = {
      number,
      password
    }

    console.log(data)
    
    if(number === '' || undefined){
      setError("Hello dear your phone number is required")
      setVisible(true);
    }else{
      if(password === '' || undefined){
          setError("Hello dear your password is required")
      setVisible(true);
      }else{
        setIsloading(true)
        const userLogin = async()=>{
          await axios.post("/api/v2/login", data).then(res => {
            if(res.data.data == "no pass"){
             setIsloading(false)
              setError("Hello dear, wrong phone number or password")
              setVisible(true);
            }else{
              if(res.data.msg =='pass'){
               setIsloading(false)
                console.log(res.data)
               const userdata = res.data.data
              localStorage.setItem("userdata", JSON.stringify(userdata));
                setSuccess("your login was successful, you can now buy light or borrow light and pay back later")
                setShowsuccess(true)
 
                setInterval( () => {
                 navigate("/")
                 window.location.reload();
                
                 }, 2000);
               
                
              }
            }
           
          }).catch(error => {
            console.log("this is error",error)
            
             setIsloading(false)
             setVisible(true);
              setError("Network error please check your internet connection and try again")
            
            
          })
 
        }
        userLogin()

      }
      
    }
    

     
  }

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

    <Popup visible={showsuccess} onClose={() => setShowsuccess(false)}>
      
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

  return (
    <>
 <Showpop/>
    <div class="row container uk-align-center">
     
      <div class="col-lg-3 col-sm-12 col-md-12 col-xs-12"></div>
       <div class="col-lg-3 col-sm-12 col-md-12 col-xs-12"></div>
      <div class="col-lg-6 col-sm-12 col-md-12 col-xs-12 uk-margin-large-top">
            <div class="uk-card uk-card-body uk-card-default uk-card-small@s " style={{borderRadius:10}}>
              <h1 style={{fontFamily:'Dongle', color:'#450acc'}}>
              Login to your account
                </h1>
                

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: phone"></span>
            <input value={number}   onChange={e => setNumber(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="Number" placeholder='Enter your phone'/>
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon uk-form-icon" uk-icon="icon: lock"></span>
            <input value={password}   onChange={e => setPassword(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="Password" placeholder='Enter your password'/>
        </div>
    </div>

    <div class="uk-margin">
              <button disabled={isloading}  onClick={()=>login()} style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:25, borderRadius:5 }} class= " uk-button uk-button-default uk-button-large uk-width-1-1">
                {
                  isloading == true?(<span>Loggin......</span>):(<span>Login</span>)
                }
                
                </button>
              </div>

              <div class="uk-margin">
                <p style={{fontFamily:'Dongle', fontSize:25,}} class="uk-text-center">
                Dont have an account? <Link to="/signup">Signup</Link>
                </p>
                <p style={{fontFamily:'Dongle', fontSize:25, marginTop:-25}} class="uk-text-center">Reset password</p>
              </div>
              


                
              </div> 
      </div>
      <div class="col-lg-3 col-sm-12 col-md-12 col-xs-12"></div>

    </div>
    <Footer/>
    </>


 
  
  
  );
}

export default Signin;
