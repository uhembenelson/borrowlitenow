import {React, useEffect, useState} from 'react';
import axios from '../../../lib/Config';
import Popup from "react-animated-popup";
import VerifyOrder from './VerifyOrder';

const  OrderElectricity = (props) => {

  const [api_key, setApi_key] = useState(props.userdata.api_key)
  const [product_code, setProduct_code] = useState("")
  const [amount, setAmount] = useState("")
  const [meter_number, setMeter_number] = useState("")
  const [number, setNumber] = useState(props.userdata.number)
  const [email, setEmail] = useState(props.userdata.email)
  const [savedAmount, setSavedAmount] = useState("")
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [validated, setValidated] = useState(false)
  const [paymentmode, setPaymentmode] = useState("")
  const [balance, setBalance] = useState()
  const [disabled, setDisabled] = useState(false)
  const [meterdata, setMeterdata] = useState()
  const [servicecharge, setServicecharge] = useState(100)
  const [showVerifyOrder, setShowVerifyOrder] = useState(false)
  const [total, setTotal] = useState("")

  useEffect(()=>{
    const payload = {
     api_key:api_key
    }
    const getbalance = async() => {
      await axios.post("/api/v2/getbalance", payload).then(res => {
        setBalance(res.data.balance)
      })
    } 
    getbalance()
  },[])

  console.log("this is meter data", meterdata)
  const Validation = async () => {
  if(meter_number === ""){
    setVisible(true)
    setError("meter number can not be emty")
    setLoading(false)
  }

  if(product_code === ""){
    setVisible(true)
    setError("product code can not be emty")
    setLoading(false)
  }

   if(amount === ""){
    setVisible(true)
    setError("amount can not be emty")
    setLoading(false)
  }

  if(amount < 500){
    setVisible(true)
    setError("amount can not be less than 500")
    setLoading(false)
  }

  if(amount && meter_number && product_code && amount < 500  !== ""){
    setValidated(true)
   // alert("all is fine", validated)
   console.log(validated)
  } else{
    setValidated(false)
  }

  

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
      {error}
    </p>
  </Popup>
   )
  }

  const verifyMeter = async () =>{
    const payload = {
      api_key,
      product_code,
      meter_number,
    }
   await Validation()
  if(validated == true){
    setLoading(true)
    await axios.post("/api/v2/verify_meter", payload).then(res => {
      console.log(res.data.data.status)
      setLoading(false)
      if(res.data.data.status === false ){
        Showerror()
        setVisible(true)
       setError(res.data.data.server_message)
       setLoading(false)
      }else{
      
        const verifieddata = res.data.data.data
         const newdata = {
        meter_name: verifieddata.name,
        address: verifieddata.address,
        meter_number:meter_number,
        product_code: product_code,
        api_key:api_key,
        email:props.userdata.email,
        meter_type:"Prepaid",
        servicecharge: servicecharge,
        amount:amount,
        number: props.userdata.number,
        total: parseInt(amount) + parseInt(servicecharge),
        paymentmode:paymentmode,
        savedAmount:savedAmount
      }
      setMeterdata(newdata)
      setShowVerifyOrder(true)
 
      
        
 
      }
    })

  }else{
    return null
  }

   

    


  }

    return (
      <>
      {
        showVerifyOrder === false? (
          <div className="uk-container uk-text-left uk-margin-top">
          <Showerror class="uk-animation-toggle uk-animation-scale-up uk-animation-reverse" tabindex="0"/>
            <div className="row">
                <div className="col-lg-4 col-xs-12"></div>
                <div className="col-lg-4 col-xs-12">
                    <div className="" style={{fontSize:30, fontFamily: "Dongle", fontWeight:'300'}}> Meter Number</div>
                    <div class="uk-margin">
                      <input  disabled ={loading} value={meter_number}   name="meter_number" onChange={e => setMeter_number(e.target.value)} style={{borderRadius:5, fontSize:22, color:'#22292E',fontFamily: "Dongle", fontWeight:'300', lineHeight:2}} class="uk-input uk-form-width-large "  type="number" placeholder="Enter your meter number"/>
                   </div>
{validated}
                      
                   <div className="" style={{fontSize:30, fontFamily: "Dongle", fontWeight:'300'}}> Meter location</div>
                   <div  class="uk-margin">
                  <div class="uk-form-controls" >
                     <select disabled ={loading}  value={product_code}   name="product_code" onChange={e => setProduct_code(e.target.value)}  class="uk-select" id="form-stacked-select" style={{borderRadius:5, fontSize:22, color:'#22292E',fontFamily: "Dongle", fontWeight:'300', lineHeight:2}}>
                     <option disabled selected>Select your Disco</option>
                      <option value="phed_prepaid_custom" >PHED</option>
                      <option value="ibedc_prepaid_custom" >IBEDC</option>
                      <option value="ikedc_prepaid_custom" >IKEDC</option>
                      <option value="ekedc_prepaid_custom" >EKEDC</option>
                      <option value="aedc_prepaid_custom" >AEDC</option>
                      <option value="kedco_prepaid_custom" >KEDCO</option>
                      <option value="kedc_prepaid_custom" >KEDC</option>
                      <option value="yedc_prepaid_custom" >YEDC</option>
                      <option value="jedc_prepaid_custom" >JEDC</option>
                      <option value="bedc_prepaid_custom" >BEDC</option>
                      <option value="eedc_prepaid_custom" >EEDC</option>
                 </select>
               </div>
               </div>

              

                   <div  className="" style={{fontSize:30, fontFamily: "Dongle", fontWeight:'300'}}> How much electricity do you want to borrow?</div>
                    <div class="uk-margin">
                      <input disabled ={loading}  value={amount}   name="meter_number" onChange={e => setAmount(e.target.value)} style={{borderRadius:5, fontSize:22, color:'#22292E',fontFamily: "Dongle", fontWeight:'300', lineHeight:2}} class="uk-input uk-form-width-large "  type="number" placeholder="Enter amount"/>
                   </div>


                  

                   {
                     paymentmode == "card"? (
                       <>
                       <div className="" style={{fontSize:30, fontFamily: "Dongle", fontWeight:'300', lineHeight:1}}> Enter the amount you want to save for rainy days</div>
                    <div class="uk-margin">
                      <input disabled ={loading}  value={savedAmount}   name="meter_number" onChange={e => setSavedAmount(e.target.value)} style={{borderRadius:5, fontSize:22, color:'#22292E',fontFamily: "Dongle", fontWeight:'300', lineHeight:2}} class="uk-input uk-form-width-large"  type="number" placeholder="Amount is optional "/>
                   </div>
                       </>
                     ):(null)
                   }


                   <div className="uk-margin">
                   <button
                   disabled ={loading}
                   onClick = {()=>{verifyMeter()}}
                  style={{
                    backgroundColor: "#339900",
                    color: "white",
                    fontFamily: "Dongle",
                    fontSize: 20,
                    borderRadius: 5,
                  }}
                  class=" uk-button uk-button-default uk-button-large uk-margin-right uk-width-1-1@l uk-width-1-1@s "
                >
                  {
                    loading === true? (<> Please wait, i'm verifying your meter</>): (<> Verify meter</>)
                  }
                 
                </button>
                   </div>

                    </div>
                <div className="col-lg-4 col-xs-12"></div>
            </div>
        </div>

          ):(  <VerifyOrder meterdata = {meterdata}/>)
      }
        
      

        </>
    );
}

export default OrderElectricity;