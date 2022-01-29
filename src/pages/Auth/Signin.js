import { React, useState} from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Popup from 'react-animated-popup';
import axios from '../../lib/Config'

import logo from '../../images/logo.png'
import { applyMiddleware } from 'redux';

const  Signin = ()=> {
  const [visible, setVisible] = useState(false)
  const [number, setNumber] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const [showsuccess, setShowsuccess] = useState(false)
  const [success, setSuccess] = useState()
  const [isloading, setIsloading] = useState(false)
  const navigate = useNavigate();

  const login  = () => {
   
    const data = {
      number,
      password
    }
    if(number == "" || undefined){
     setError("Hello dear your phone number is required")
     setVisible(true);
      
    }
    if(password == "" || undefined){
      setError("Hello dear your password is required")
      setVisible(true);
       
     }
     if(password, number !== undefined){
       setIsloading(true)
       const userLogin = async()=>{
         await axios.post("/login", data).then(res => {
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
      

      
   

    //validation 


    console.log(data)
   // console.log("this is working", number, password)
    // password == ""? (<Showpop  error="Hello dear passward is required"/>):(<></>)

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
    </>


//     <div>
     
//       <div>
//       <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//   <div class="max-w-md w-full space-y-8">
//     <div>
//       <img class="mx-auto h-12 w-auto" src={logo} alt="borrowlite logo"/>
//       <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
//         Sign in to your account
//       </h2>
     
//     </div>
//     <form class="mt-8 space-y-6" action="#" method="POST">
//       <input type="hidden" name="remember" value="true"/>
//       <div class="rounded-md shadow-sm -space-y-px">
//         <div>
//           <label for="email-address" class="sr-only">Phone number</label>
//           <input id="number" name="number" type="number" autocomplete="number" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone number"/>
//         </div>
//         <div>
//           <label for="password" class="sr-only">Password</label>
//           <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
//         </div>
//       </div>

//       <div class="flex items-center justify-between">
//         <div class="flex items-center">
//           <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
//           <label for="remember-me" class="ml-2 block text-sm text-gray-900">
//             Remember me
//           </label>
//         </div>

//         <div class="text-sm">
//           <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
//             Forgot your password?
//           </a>
//         </div>
//       </div>

//       <div>
//         <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//           <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            
//             <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
//             </svg>
//           </span>
//           Sign in
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
//       </div>




      





//   </div> 
  
  
  );
}

export default Signin;
