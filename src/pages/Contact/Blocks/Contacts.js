import React, {useState} from 'react';
import axios from '../../../lib/Config';

const Contacts = () => {
  const[inquiry, setInquiry]= useState("")
  const[message, setMessage] = useState("")

  const sendMessage = async()=>{
     //payload declaration
    const payload = {
      message:message,
      inquiry:inquiry
    }
    console.log("this is my payload", payload)
    //post request
    await axios.post("/api/contact/",payload).then(()=>{
       const data = Response.data
       console.log(data)
    })
     
  



  }
    return (
      <div className="uk-container uk-text-center">  
        <div className="uk-margin-large-top  " style={{textAlign:'center', fontSize:42, fontFamily:'Dongle', fontWeight:'200'}}> <span style={{color:'#450ACC'}}>Contact</span> Us </div>
        <div className="  " style={{textAlign:'center', fontSize:28, fontFamily:'Dongle', fontWeight:'200'}}> Choose from Categories </div>

      
        {/* <select   value={inquiry}   name="inquiry" onChange={e => setInquiry(e.target.value)}  class="uk-select" id="form-stacked-select" style={{borderRadius:5, fontSize:22, color:'#22292E',fontFamily: "Dongle", fontWeight:'300', lineHeight:2}}>
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
                 </select> */}
        <select value={inquiry} name="inquiry" onChange={e => setInquiry(e.target.value)} class="uk-select uk-form-width-large uk-form-large" style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}}>
          <option value="" style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} disabled>Select why you want to contact us</option>
          <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="Token">Token</option>
          <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="Inquiry">Inquiry</option>
          <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="Failed Transaction">Failed Transaction</option>
          <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="Billing">Billing</option>
          <option style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} value="Prepaid Meter">Prepaid Meter</option>
        </select>

        <div class="uk-margin ">
          <textarea value={message} name="message" onChange={e => setMessage(e.target.value)} class="uk-textarea uk-form-width-large uk-form-large" style={{fontWeight:'200', borderRadius:5, fontSize:25,fontFamily:'Dongle'}} rows="5" placeholder="Enter your message"></textarea>
        </div>

        <div class="uk-margin">
          <button onClick={()=>{sendMessage()}} style={{ backgroundColor:'#450acc', color:'white',fontFamily:'Dongle', fontSize:25, borderRadius:5 }} class="uk-button uk-button-default uk-button-large uk-width-1-3">
            SEND MESSAGE
          </button>
        </div>

        
      </div>
    );
  
}






export default Contacts;
