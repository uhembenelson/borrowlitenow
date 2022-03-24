import React, { Component, useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import bg from "../../../images/mainimage.png";
import wallet from "../../../images/wallet.png"
import axios from '../../../lib/Config'
import { usePaystackPayment } from 'react-paystack';




const Action = (props,) => {
  const [balance, setBalance] = useState("")
  const [showwallet, setShowwallet] = useState(false)
  const [amount, setAmount] =useState("")
  const [email, setEmail] = useState(props.userdata.email)
  useEffect(()=>{
    const payload = {
     api_key: props.userdata.api_key 
    }
    console.log("this is api_key",payload.api_key)
    const getbalance = async() => {
      await axios.post("/api/v2/getbalance", payload).then(res => {
        setBalance(res.data.balance)
      })
    } 
    getbalance()
  },[])

  const showenteramount =()=> {
       setShowwallet(true) 
  }

  const hideamount =()=> {
    setShowwallet(false) 
}




const config = {
  reference: (new Date()).getTime().toString(),
  email: email,
  amount: amount*100,
  publicKey: 'pk_test_f03073e7ac32abe21bfe6b988f7820ac5d86bdc4',
};

// you can call this function anything
const onSuccess = (reference) => {
// Implementation for whatever you want to do with reference and after success call.
const payload = {
  api_key: props.userdata.api_key,
  amount:amount
 }
const fundme = async() => {
  await axios.post("/api/v2/fundwallet", payload).then(res => {
    setBalance(res.data.data.balance)
    setShowwallet(false)
  })
} 
fundme()

console.log(reference);
};

// you can call this function anything
const onClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
console.log('closed')
}

const FundWalletWithPaystack  = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
        <button
         style={{
          backgroundColor: "#339900",
          color: "white",
          fontFamily: "Dongle",
          fontSize: 20,
          borderRadius: 5,
        }}
        class=" uk-button uk-margin-top uk-button-default uk-button-large uk-margin-left uk-margin-right  uk-width-1-1@l uk-width-1-1@s"
        onClick={() => {
            initializePayment(onSuccess, onClose)
        }}>Fund wallet {amount}</button>
    </div>
  );
};







    return (
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class=" uk-margin-top">
              
             
              <div
                class=""
                style={{
                  fontFamily: "Dongle",
                  fontSize: 25,
                  color: "#22292E",
                  fontWeight: "200",
                  lineHeight: 1.2,
                }}
              >
                Welcome Back,{props.userdata.fullname}
                
              </div>

              <div className="row uk-container uk-margin-large-top uk-text-center">
                  <div className="row uk-margin-left uk-margin-right" style={{fontSize:25,fontFamily: "Dongle",  fontWeight: "200", }}> 
                  {
                    showwallet === false ? (
                    <div className="col-lg-4 uk-text-left">
                    </div>  ):(
                      <botton onClick={()=>{
                        hideamount()
                        }} style={{color:'green'}} className="col-lg-4 uk-text-left" uk-icon="icon:arrow-left; ratio: 2"> 
                        </botton>
                    )
                  }

                  <div className="col-lg-4">Wallet Balance</div>
                  </div>
                  <div style={{fontSize:42,fontFamily: "Dongle",  fontWeight: "400", color:'#450ACC' }}> N {balance}</div>
                  
                {
                  showwallet === true ? (<div class="uk-margin">
                  <div class="uk-inline uk-margin-left uk-margin-right">
                   <span class="uk-form-icon" uk-icon="icon:file"></span>
                  <input value={amount}   onChange={e => setAmount(e.target.value)} style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} class="uk-input uk-form-width-large uk-form-large"  type="Number" placeholder='Enter Amount'/>
                  
                   </div>
                <FundWalletWithPaystack />
               </div>): (
                  <button
                  style={{
                    backgroundColor: "white",
                    color: "#450acc",
                    fontFamily: "Dongle",
                    fontSize: 20,
                    borderRadius: 5,
                    borderColor:'#450acc'
                  }}
                  class=" uk-button uk-button-default uk-button-large uk-margin-left uk-margin-right  uk-width-1-1@l uk-width-1-1@s"
                  onClick={()=>{
                    showenteramount()
                  }}
                >
                     <img src={wallet} style={{width:26, height:18 }}/>   
                   <span className="uk-margin-small-left" style={{fontSize:20, fontWeight:'600'}}>Fund wallet</span>
                </button>
               )
                }
                  


                 

                <div className="uk-margin-top" style={{fontFamily: "Dongle", fontSize:25, fontWeight:'200'}}>
              Learn more about <span style={{color:'#450acc'}}>energy saver functionality</span>
              </div>

              <div className="row">
              <div class="uk-margin uk-margin-large-top">
                <Link to="/borrow">
                  <button
                    style={{
                      backgroundColor: "#339900",
                      color: "white",
                      fontFamily: "Dongle",
                      fontSize: 20,
                      borderRadius: 5,
                    }}
                    class=" uk-button uk-button-default uk-button-large uk-margin-small-top uk-margin-left uk-margin-right uk-width-1-3@l uk-width-1-1@s "
                  >
                    Borrow light
                  </button>
                </Link>
                <Link to="/buy">
                  <button
                  style={{
                    backgroundColor: "#450acc",
                    color: "white",
                    fontFamily: "Dongle",
                    fontSize: 20,
                    borderRadius: 5,
                  }}
                  class=" uk-button uk-button-default uk-button-large uk-margin-small-top uk-margin-left uk-margin-right uk-width-1-3@l uk-width-1-1@s"
                >
                  Buy light
                </button>
                </Link>
                
              </div>
              </div>
                
              </div>
             


            
            </div>
          </div>

    )
}
export default Action;
