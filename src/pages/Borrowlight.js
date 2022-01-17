import { useEffect, useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import bg from '../images/bg.jpg';
import axios from 'axios';
// import { BallClipRotate } from 'react-pure-loaders';
// import { BallBeat } from 'react-pure-loaders';
import Loader from "react-js-loader";
import swal from 'sweetalert';

const Borrowlight = () => {
    
    const [api_key, setApi_key] = useState("251be472")
    const [product_code, setProduct_code] = useState("")
    const [amount, setAmount] = useState("")
    const [meter_number, setMeter_number] = useState("")
    const [number, setNumber] = useState("")
    const [task, setTask] = useState("verify")
    const [isloading, setIsloading] = useState(false)
    const [metername, setMeterame] = useState("")
    const [show, setShow] = useState(false)
    const [showcode, setShowcode] = useState(false)
    const [code, setCode]= useState()
    const [email, setEmail] = useState()


    const verifymeter = () =>{
            swal({
                text: "verifing meter please wait...",
                button: false,
                timer:6000
              });
        
        const postdata = {
            task,
            api_key,
            product_code,
            amount,
            meter_number,
            number,
        }

        // Make a request for a user with a given ID

        if(amount > 1000 ){
            swal({
                text:"you can not borrow more than N1000 Naira worth of light for now"
            })

        }else{
            if(amount < 1000){
            swal({
                text:"you cannot borrow less 1000",
                button: false,
            })
        }else{
            axios.post('https://sheltered-taiga-10720.herokuapp.com/checkmeter',postdata)
.then(function (response) {
    console.log(response)
if(response.data.data.data.text_status == 'VERIFICATION FAILED'){
       console.log(response.data.data.data.server_message)
    swal({
        text: "we could not verify your meter number please check your meter number and  try again",
        button: false,
        timer:6000
      });
}
   else{
    //console.log(response.data.data.data.server_message)
    if(response.data.data.data.text_status =='VERIFICATION SUCCESSFUL'){
        console.log(response.data.data.data.server_message)
        const rdata = response.data.data.data.name;
        setMeterame(rdata)
        setShow(true)
        console.log(response.data.data.data.name)
    }
   }

})
;
        }
        }
        
        

    }

    const getlight = () =>{
        swal({
            text: "proceesing.....",
            button: false,
            timer:6000
          });
    
    const postdata = {
        task,
        api_key,
        product_code,
        amount,
        meter_number,
        number,
        email
    }

    // Make a request for a user with a given ID

    if(amount > 1000 ){
        swal({
            text:"you can not borrow more than N1000 Naira worth of light for now"
        })

    }else{
        if(amount < 1000){
        swal({
            text:"you cannot borrow less than N1000 Naira worth of light",
            button: false,
        })
    }else{
        axios.post('https://sheltered-taiga-10720.herokuapp.com/getpower',postdata)
.then(function (response) {
console.log(response)
if(response.data == null){

swal({
    text: "We are experincing a network error at the moment. Please try again later",
    button: false,
    timer:6000
  });
}else{
if(response.data !== null){
    if(response.data == "PENDING"){
        swal({
            text:`${response.data.data.data.server_message}`
        })
    }
    else{
        swal({
            title: "Good job!",
            text: "Thank you for using borrowlite, your maturity date is in 14 days, your payback amount is N1250 Naira only !",
            icon: "success",
            button: "Get code",
          });
        setShowcode(true)
        setCode(response.data)
        console.log(response.data)
        const postdata = {
            number:number,
            token:response.data
        }

        const emaildata = {
            number:number,
            token:response.data,
            email:email,
            amount:amount,
            meter_number
        }
        axios.post('https://sheltered-taiga-10720.herokuapp.com/savetoken',emaildata).then(function (response) {
            console.log(response)

    })

    axios.post('https://sheltered-taiga-10720.herokuapp.com/sendsms',postdata).then(function (response) {
            console.log(response)

    })
    }


}
}
})
;
    }
    }
    
   
}
  
 return(
   <div class="row uk-container uk-height-viewport">
       <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 uk-margin-top">


    {
        showcode == true?(
            <div class="uk-card uk-card-body uk-card-default">
                <span>Thank you for using borrowlite, <br></br>you will receive an sms with your token shortly</span><br></br>
                <span> meter name: {metername}</span><br></br>
                <span> meter number: {meter_number}</span><br></br>
                <span> phone number: {number}</span><br></br>
                <span> amount: {amount}</span><br></br>
                <span> meter unit: {code}</span><br></br>
            </div>
        ):(

          <div  style={{borderRadius:'5px'}}class="uk-card uk-card-body uk-card-default">
          {
              show == true ? (
                  <div>
                      Please verify if this is your meter name<br></br>
                      <h5>{metername}</h5>
                  </div>
              ):(null)
          }
          
 
           
     
          
     <div class="uk-margin">
             <select  value={product_code}   name="product_code" onChange={e => setProduct_code(e.target.value)}  style={{borderRadius:'5px'}}class="uk-select">
                 <option disabled selected>Select your Disco</option>
                 <option value="phed_prepaid_custom" >PHED</option>
                 <option value="ibedc_prepaid_custom" >IBEDC</option>
                 <option value="ikedc_prepaid_custom" >IKEDC</option>
                 <option value="ekedc_prepaid_custom" >EKEDC</option>
                 <option value="aedc_prepaid_custom" >AEDC</option>
                 <option value="kedco_prepaid_custom" >KEDCO</option>
                 <option value="kedc_prepaid_custom" >KEDC</option>
                 <option value="yedc_prepaid_custom" >YEDC</option>
                 <option value="jecd_prepaid_custom" >JEDC</option>
                 <option value="bedc_prepaid_custom" >BEDC</option>
                 <option value="eedc_prepaid_custom" >EEDC</option>
             </select>
         </div>
 
         <div class="uk-margin">
             <input value={meter_number}   name="meter_number" onChange={e => setMeter_number(e.target.value)}  style={{borderRadius:"5px"}} class="uk-input" type="text" placeholder="Meter number"></input>
         </div>
         <div class="uk-margin">
             <input value={amount}   name="amount" onChange={e => setAmount(e.target.value)} style={{borderRadius:"5px"}} class="uk-input" type="text" placeholder="Amount"></input>
         </div>
 
         <div class="uk-margin">
             <input value={number}   name="number" onChange={e => setNumber(e.target.value)} style={{borderRadius:"5px"}} class="uk-input" type="text" placeholder="Phone number"></input>
         </div>
         <div class="uk-margin">
             <input value={email}   name="number" onChange={e => setEmail(e.target.value)} style={{borderRadius:"5px"}} class="uk-input" type="text" placeholder="Email address"></input>
         </div>
       {
           show == true?(
             
             <div class="uk-margin">
             <button  onClick={getlight}  style={{  fontFamily:'Rubik', fontWeight: '400', borderRadius:'5px', backgroundColor:'#fdd697', color:'#213948'}}class="uk-button uk-button-default uk-button-large uk-margin-small-right uk-width-1-1 ">
                 Borrow light
                 </button>
                 </div>
           ):(  <div class="uk-margin">
           <button onClick={verifymeter}  style={{  fontFamily:'Rubik', fontWeight: '400', borderRadius:'5px', backgroundColor:'#fdd697', color:'#213948'}}class="uk-button uk-button-default uk-button-large uk-margin-small-right uk-width-1-1 ">
               verify meter number
               </button>
               </div>)
       }
 
         
 
           </div>
 
 
 
        )
    }

       </div>

       <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={bg}/>
       </div>
   </div>
 )
};

export default Borrowlight;
