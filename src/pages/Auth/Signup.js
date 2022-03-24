import { useEffect, useState, React } from 'react';
import { Outlet, Link } from 'react-router-dom';

import logo from '../../images/logo.png'
import axios from '../../lib/Config'
import swal from 'sweetalert';
import { Dots, Spinner } from "react-activity";
import "react-activity/dist/Dots.css";
import Popup from 'react-animated-popup';
import { render } from 'react-dom';

const  Signup =()=> {
const [fullname, setFullname] = useState()
const [email, setEmail] = useState()
const [number, setNumber] = useState()
const [userType, setUserType] = useState()
const [password, setPassword] = useState()
const [error, setError] = useState()
const [showerror, setShowerror] = useState(false)
const [loadingme, setLoadingme] = useState(false)
const [showsuccess, setShowsuccess] = useState(false)
const [success, setSuccess] = useState()
const [visible, setVisible] = useState(false)

// useEffect(() => {  
   
//      });


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







const register = () => {
  
    const payload = {
        fullname,
        email,
        number,
        userType,
        password,
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
          if(userType == undefined){
            setError("Hello dear your user type  is required")
               setVisible(true);
          }else{
            if(password == undefined){
              setError("Hello dear your password  is required")
              setVisible(true);
            }else{
              setLoadingme(true)
              axios.post('/api/v2/register/',payload).then(function (response) {
                console.log(response.data)
               // const userdata = response.data.user
               // localStorage.setItem("userdata", JSON.stringify(userdata));
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
                swal({
                  text:'there seem to be a network error, please check your connection'
                })

              }
        })

            }
          }
        }
      }
    }

 





}



  return (
    <>
   
     <div class="row container uk-align-center">
     <Showpop/>
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
     <div class ="col-lg-9 col-md-12 col-sm-12 col-xs-12">

              <h2 class="uk-margin-top" style={{fontFamily:'Dongle', color:'#450acc'}}>
              Buy electricity
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1}}>
                  Buy electricity with borrowlite with just a few clicks and get token sent to you
                  email and phone number.
                </p>
                <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', }}>
              Borrow electricity
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1, }}>
                  Are you out of electricity and out cash or can't access your regular power vendor? with
                  borrowlite you can borrow light to help you through the night or help you finish that project and pay 
                  back later
                  </p>
                  <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', }}>
              Rebust Api Integration
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1,}}>
                We have also extended the 
                  borrow functionalities to vendors who want to start earning on borrow.
                  With our <Link to="">robust Apis</Link> developers can integrate and extend borrowlite services to  user
                  </p>

                  <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', }}>
                  Strong coverage across Nigeria
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1, }}>
               With over 9 Discos integrated you can access  light and borrow light from any where in Nigeria 
                  </p>
                  <h2 class="" style={{fontFamily:'Dongle', color:'#450acc', }}>
                  24/7 reliable customer support
                </h2>
                <p style={{fontFamily:'Dongle', fontSize:22, color:'gray', fontWeight:'100', lineHeight:1,}}>
                Our technical product specialists are always available to help via email, zoom, or call. <br/>
                Thank you for choosing us. We look forward to being your reliable electricity partner.
                  </p>
                  <p>Uhembe Nelson</p>
                  <p style={{}}>CEO/founder Borrowlite</p>
                
     </div>
     <div class="col-lg-3"></div>

      </div>


      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 uk-margin">
     
        <div class="uk-card uk-card-body uk-card-default" style={{borderRadius:10}}>
        <h1 style={{fontFamily:'Dongle', color:'#450acc'}}>
              Signup
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
          (<span>Sign up</span>)  
     }
      </button>
    </div>

    <div class="uk-margin">
    <p style={{fontFamily:'Dongle', fontSize:25,}} class="uk-text-center">Already have an account?</p>
    <p style={{fontFamily:'Dongle', fontSize:25, marginTop:-30}} class="uk-text-center">
  <Link to="/signin">Login</Link>
    </p>
  </div>
        </div>
      </div>
      
    </div>
    </>
   



//     <div>
//         {/* <ErrorAlert error/> */}
     
//       <div>
//       <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//   <div class="max-w-md w-full space-y-8">
//     <div>
//       <img class="mx-auto h-12 w-auto" src={logo} alt="borrowlite logo"/>
//       <h2 class="mt-6 text-center text-3xl font-extrabold text-indigo-600">
//          Register to start borrowing light in seconds 
//       </h2>
     
//     </div>
//     <div class="mt-8 space-y-6">

    


//       <input type="hidden" name="remember" value="true"/>
//       <div class="rounded-md shadow-sm -space-y-px">
//         <div>
//           <label for="email-address" class="sr-only">Full name</label>
//           <input disabled={loadingme} value={fullname}   name="fullname" onChange={e => setFullname(e.target.value)} id="fullname"  type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full name"/>
//         </div>
//         <div>
//           <label for="email-address" class="sr-only">Phone number</label>
//           <input disabled={loadingme} value={number}   name="number" onChange={e => setNumber(e.target.value)} id="number"  type="number" autocomplete="number" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone number"/>
//         </div>
//         <div>
//           <label for="email-address" class="sr-only">Email address</label>
//           <input disabled={loadingme} value={email}   name="email" onChange={e => setEmail(e.target.value)} id="email" type="email" autocomplete="email" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
//         </div>
//         <div>
//           <label for="email-address" class="sr-only">User type</label>
//           <select value={userType}   name="userType" onChange={e => setUserType(e.target.value)} id="email"  type="email" autocomplete="email" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User type">
//           <option disabled>User type</option>
//                   <option value="personal">Personal</option>
//                   <option value="merchant">Merchant</option>
//             </select>
//         </div>
//         <div>
//           <label for="password" class="sr-only">Password</label>
//           <input disabled={loadingme}  value={password}   onChange={e => setPassword(e.target.value)} id="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
//         </div>
//       </div>

     

//       <div>
//         <button onClick={register} disabled={loadingme}   class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//           {
//             loadingme == true? (<span>Creating your account please wait... <Dots /></span>):
//             (<span>Sign up</span>)
//           }
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//       </div>




      





//   </div> 
  
  
  );
}

export default Signup;
