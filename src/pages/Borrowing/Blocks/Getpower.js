import {React, useState, useEffect, useContext} from 'react';
import { useSearchParams } from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack';
import axios from '../../../lib/Config';
import Popup from "react-animated-popup";
const Getpower = (props)=> {

  
   const search = window.location.search;
   const params = new URLSearchParams(search);
   const reference = params.get('reference');
   const [reusable, setReusable] = useState()

   useEffect(()=>{
    const payload = {
        reference:reference
    }
   const getpower = async () => {
  await axios.post("/api/v2/checkref", payload).then(res => {
        //console.log(res.data.data.authorization.reusable)
          setReusable(res.data.data.authorization.reusable)
          const reuse = res.data.data.authorization.reusable
          if(reuse){
              const payload = {
                authorization_code:res.data.data.authorization.authorization_code,
                exp_month:res.data.data.authorization.exp_month,
                exp_year:res.data.data.authorization.exp_year,
                channel:res.data.data.authorization.channel,
                card_type:res.data.data.authorization.card_type, 
                bank:res.data.data.authorization.bank



              }
          }else{
              console.log("this will not work")
          }
         
        
  
         
        })
   }

   getpower()

   },[])
   


 

  // useEffect(()=>{
    
    // console.log(reference)
    // const payload = {
    //     reference:reference
    // }
    //  axios.post("/api/v2/checkref", payload).then(res => {
    //   console.log(res.data)
       
    //   })

//})
    

   


    // const config = {
    //     reference: (new Date()).getTime().toString(),
    //     email: meterdata.email,
    //     amount: meterdata.total*100,
    //     publicKey: 'pk_test_f03073e7ac32abe21bfe6b988f7820ac5d86bdc4',
    //   };

    //   const initializePayment = async()=>{
    //     const payload = {
    //       email:meterdata.email
    //      }
    //       await axios.post("/api/v2/initial", payload).then(res => {
    //         console.log(res.data.status)
    //         if(res.data.status == true){
    //            setAuth_url(res.data.data.authorization_url)
    //            window.open(auth_url)
           
    //         }
           
    //       })

    //   }


    //   const Showerror = ()=>{

    //     return(
    //      <Popup  visible={visible} onClose={() => setVisible(false)}>
    //      <div class="uk-inline">
    //        <div
    //          style={{ color: "red" }}
    //          class="  uk-form-icon"
    //          uk-icon="icon: warning; ratio: 2"
    //        ></div>
    //        <h1
    //          style={{ fontFamily: "Dongle", color: "red" }}
    //          class="uk-margin-large-left uk-align-center"
    //        >
    //          there was an error
    //        </h1>
    //      </div>
    //      <p
    //        style={{
    //          marginTop: -20,
    //          fontFamily: "Dongle",
    //          fontSize: 23,
    //          lineHeight: 1,
    //          fontWeight: 100,
    //        }}
    //      >
    //        {auth_url}
    //       {/* <iframe src={auth_url} /> */}
    //      </p>
    //    </Popup>
    //     )
    //    }



    //   const Getpower = async () => {
    //     const payload = {
    //         meterdata
    //        }
    //         await axios.post("/api/v2/getpower", payload).then(res => {
    //           console.log(res.data)
    //         })
          
    //   }


    //   const onSuccess = (reference) => {
    //     // Implementation for whatever you want to do with reference and after success call.
    //     const payload = {
    //       meterdata
    //      }
    //     const fundme = async() => {
    //       await axios.post("/api/v2/getpower", payload).then(res => {
    //         console.log(res.data)
    //       })
    //     } 
    //     fundme()
        
    //     console.log(reference);
    //     };
        
        // you can call this function anything
        // const onClose = () => {
        // // implementation for  whatever you want to do when the Paystack dialog closed.
        // console.log('closed')
        // }
        
        // const FundWalletWithPaystack  = () => {
        //   const initializePayment = usePaystackPayment(config);
        //   return (
        //     <div>
        //         <button
        //          style={{
        //           backgroundColor: "#339900",
        //           color: "white",
        //           fontFamily: "Dongle",
        //           fontSize: 20,
        //           borderRadius: 5,
        //         }}
        //         class=" uk-button uk-margin-top uk-button-default uk-button-large   uk-width-1-1@l uk-width-1-1@s"
        //         onClick={() => {
        //             initializePayment(onSuccess, onClose)
        //         }}>Pay N {meterdata.total} from card</button>
        //     </div>
        //   );
        // };
  
   

    return (
        <div className="uk-container">
            <div className="row">
                <div className="col-lg-4 col-xs-12"></div>
                <div className="col-lg-4 col-xs-12">
                 please wait generating electricity
                  
                  

                </div>
                <div className="col-lg-4 col-xs-12"></div>
            </div>
            
        </div>
    );
}

export default Getpower;