import {React, useState, useEffect, useContext} from 'react';
import { usePaystackPayment } from 'react-paystack';
import axios from '../../../lib/Config';
import Popup from "react-animated-popup";
const VerifyOrder = (props)=> {
   // const[meterdata, setMeterdata] = useState(props.meterdata)
    //console.log("this is from here", props.meterdata)
    // useEffect(()=>{
    //     setMeterdata(props.meterdata)
        
    // })
    const [auth_url, setAuth_url] = useState()
    const [showmodel, setShowmodel] = useState(false)
    const [visible, setVisible] = useState(false);
    const meterdata = props.meterdata

    const config = {
        reference: (new Date()).getTime().toString(),
        email: meterdata.email,
        amount: meterdata.total*100,
        publicKey: 'pk_test_f03073e7ac32abe21bfe6b988f7820ac5d86bdc4',
      };

      const initializePayment = async()=>{
        const payload = {
          email:meterdata.email
         }
          await axios.post("/api/v2/initial", payload).then(res => {
            console.log(res.data.status)
            if(res.data.status == true){
               setAuth_url(res.data.data.authorization_url)
               window.open(auth_url, "_blank")
            }
           
          })

      }


      const Showerror = ()=>{

        return(
         <Popup  visible={visible} onClose={() => setVisible(false)}>
         <div class="uk-inline">
           <div
             style={{ color: "red" }}
             class="  uk-form-icon"
             uk-icon="icon: warning; ratio: 2"
           ></div>
           <h1
             style={{ fontFamily: "Dongle", color: "red" }}
             class="uk-margin-large-left uk-align-center"
           >
             there was an error
           </h1>
         </div>
         <p
           style={{
             marginTop: -20,
             fontFamily: "Dongle",
             fontSize: 23,
             lineHeight: 1,
             fontWeight: 100,
           }}
         >
           {auth_url}
          {/* <iframe src={auth_url} /> */}
         </p>
       </Popup>
        )
       }



      const Getpower = async () => {
        const payload = {
            meterdata
           }
            await axios.post("/api/v2/getpower", payload).then(res => {
              console.log(res.data)
            })
          
      }


      const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        const payload = {
          meterdata
         }
        const fundme = async() => {
          await axios.post("/api/v2/getpower", payload).then(res => {
            console.log(res.data)
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
                class=" uk-button uk-margin-top uk-button-default uk-button-large   uk-width-1-1@l uk-width-1-1@s"
                onClick={() => {
                    initializePayment(onSuccess, onClose)
                }}>Pay N {meterdata.total} from card</button>
            </div>
          );
        };
  
   

    return (
        <div className="uk-container">
            <div className="row">
                <div className="col-lg-4 col-xs-12"></div>
                <div className="col-lg-4 col-xs-12">
                  <Showerror/>
                    <div style={{fontSize:42, fontWeight:'300', fontFamily: "Dongle",}} className="uk-text-center uk-margin-top">REVIEW ORDER</div>
                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Meter Number</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>{meterdata.meter_number} </div>
                    </div>
                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Name</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>{meterdata.meter_name} </div>
                    </div>

                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Meter Type</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>{meterdata.meter_type} </div>
                    </div>

                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Address</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>{meterdata.address} </div>
                    </div>

                    <div style={{fontSize:42, fontWeight:'300', fontFamily: "Dongle",}} className="uk-text-center uk-margin-top">PAYMENT BREAKDOWN</div>

                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Amount</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>N {meterdata.amount - meterdata.savedAmount} </div>
                    </div>

                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Service Charge</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>N {meterdata.servicecharge} </div>
                    </div>

                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Discount</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>N 0.00 </div>
                    </div>

                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Amount Saved</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>N {meterdata.savedAmount} </div>
                    </div>
                    <hr/>
                    <div className="uk-flex" style={{ justifyContent:'space-between' }}>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#BDBDBD' }}>Total</div>
                        <div style={{fontSize:32, fontWeight:'300', fontFamily:"Dongle", color:'#22292E' }}>N {meterdata.total} </div>
                    </div>
                    
                         <div className="uk-margin">
                       
                      <button
                      onClick={()=>{initializePayment()}}
                     style={{
                       backgroundColor: "#339900",
                       color: "white",
                       fontFamily: "Dongle",
                       fontSize: 20,
                       borderRadius: 5,
                     }}
                     class=" uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-1@l uk-width-1-1@s "
                   >
                     Pay {meterdata.total}.00 from wallet
                   </button>
                      </div>
                    
                  
                  

                </div>
                <div className="col-lg-4 col-xs-12"></div>
            </div>
            
        </div>
    );
}

export default VerifyOrder;