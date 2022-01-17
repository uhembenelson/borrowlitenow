import { useEffect, useState, React } from 'react';
import { Outlet, Link } from 'react-router-dom';

import logo from '../../images/logo.png'
import axios from 'axios';
import swal from 'sweetalert';
import { Dots, Spinner } from "react-activity";
import "react-activity/dist/Dots.css";

const  Signup =()=> {
const [fullname, setFullname] = useState()
const [email, setEmail] = useState()
const [number, setNumber] = useState()
const [userType, setUserType] = useState()
const [password, setPassword] = useState()
const [error, setError] = useState()
const [showerror, setShowerror] = useState(false)
const [loadingme, setLoadingme] = useState(false)

useEffect(() => {  
    ErrorAlert()
     });

const register = () => {
  
    const payload = {
        fullname,
        email,
        number,
        userType,
        password
    }
    console.log(payload)

    if(fullname == ''){
      swal({
        text:'fullname name can not be emty'
      })
    }else{
      if(email == ''){
        swal({
          text:'email can not be emty'
        })
      }else{
        if(number == ''){
          swal({
            text:'phone number cannot be emty'
          })
        }else{
          if(userType == ''){
            swal({
              text:'Please select your user type'
            })
          }else{
            if(password == ''){
              swal({
                text:'password cannot be emty'
              })
            }else{
              setLoadingme(true)
              axios.post('https://borrowlight.herokuapp.com/api/v2/register/',payload).then(function (response) {
                console.log(response.data.user)
                const userdata = response.data.user
                localStorage.setItem("userdata", JSON.stringify(userdata));
                if(response.data.data == "account created"){
                  setLoadingme(false)
                    swal({
                        text:"account created welcome to borrowlite"
                    })
                }else{
                  setLoadingme(false)
                    setShowerror(true)
                    setError(response.data.msg)
                    
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

const ErrorAlert = ()=> (
   

    showerror == true? (
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
  
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

   
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
           
            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              There was an error
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                 {
                     error
                 }
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        
        <button onClick={() =>setShowerror(false)}  type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
    ):(
        <></>
    )


)


  return (
    <div>
        <ErrorAlert error/>
     
      <div>
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src={logo} alt="borrowlite logo"/>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-indigo-600">
         Register to start borrowing light in seconds 
      </h2>
     
    </div>
    <div class="mt-8 space-y-6">

    


      <input type="hidden" name="remember" value="true"/>
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Full name</label>
          <input disabled={loadingme} value={fullname}   name="fullname" onChange={e => setFullname(e.target.value)} id="fullname"  type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full name"/>
        </div>
        <div>
          <label for="email-address" class="sr-only">Phone number</label>
          <input disabled={loadingme} value={number}   name="number" onChange={e => setNumber(e.target.value)} id="number"  type="number" autocomplete="number" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone number"/>
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input disabled={loadingme} value={email}   name="email" onChange={e => setEmail(e.target.value)} id="email" type="email" autocomplete="email" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="email-address" class="sr-only">User type</label>
          <select value={userType}   name="userType" onChange={e => setUserType(e.target.value)} id="email"  type="email" autocomplete="email" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User type">
          <option disabled>User type</option>
                  <option value="personal">Personal</option>
                  <option value="merchant">Merchant</option>
            </select>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input disabled={loadingme}  value={password}   onChange={e => setPassword(e.target.value)} id="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

     

      <div>
        <button onClick={register} disabled={loadingme}   class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {
            loadingme == true? (<span>Creating your account please wait... <Dots /></span>):
            (<span>Sign up</span>)
          }
        </button>
      </div>
    </div>
  </div>
</div>
      </div>




      





  </div>  
  );
}

export default Signup;
