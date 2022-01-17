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
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import copy from 'copy-to-clipboard';
import CopyClipboard from 'react-copy-clipboard';






const Buy = () => {
    
    const [api_key, setApi_key] = useState("251be472")
    const [product_code, setProduct_code] = useState("")
    const [amount, setAmount] = useState()
    const [meter_number, setMeter_number] = useState("")
    const [number, setNumber] = useState("")
    const [task, setTask] = useState("verify")
    const [isloading, setIsloading] = useState(false)
    const [metername, setMeterame] = useState("")
    const [show, setShow] = useState(false)
    const [showcode, setShowcode] = useState(false)
    const [code, setCode]= useState()
    const [email, setEmail] = useState()
    const [wksc, setWksc] = useState()
    const [walletaddress, setWalletaddress] = useState()
    const [ether, setEther] = useState()
    const [copied, setCopied] = useState(false)
    const [contract, setContract] = useState(0xabe2a1c7ecd544ebc9f8f138dd6e0967f162bb83)

   

    
   




    const verify = () =>{

        if(amount == null){
            swal({
                text:"Please enter an amount",
                icon:'error',
                button:true,
                
            })
        }else{
            if(email == null){
                swal({
                    text:"Please enter your email address",
                    icon:'error',
                    button:true,
                    
                })

            }else{
                if(walletaddress == null){
                    swal({
                        text:"Please enter your Wksc token address",
                        icon:'error',
                        button:true,
                        
                    })
                }else{
                    swal({
                        text:"please wait .....",
                        icon:'loading',
                        button:false,
                        timer:4000
                    })
                    const postdata = {
                        email,
                        wksc,
                        amount,
                        walletaddress,
                        ether
                    }
           
                    console.log("this is my post data", postdata)
                    axios.post('https://sheltered-taiga-10720.herokuapp.com/presells/',postdata)
                    .then(function (response){
                    console.log(response.data.savewksc)
                    if(response.data.status === "done"){
                       window.location.replace(`${response.data.savewksc.url}`);
                    }
           
                    setEmail('')
                    setWalletaddress('')
                    setAmount()
                    setWksc('')
                    })

                }
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
            text: "Thank you for using borrowlite!",
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
      
       <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
           <h3>Buy Wisdom Kwati Smart City token today</h3>
           <div class="uk-margin">
               <p>
                 <strong>Wksc Contract address</strong> 

               </p>
               {copied ? <span style={{color: 'green'}}>Copied.</span> : null}
               <CopyClipboard text='0xabe2a1c7ecd544ebc9f8f138dd6e0967f162bb83' suffix=''>
               <button  style={{  fontFamily:'Rubik', fontWeight: '400', borderRadius:'5px', backgroundColor:'blue', color:'white'}}class="uk-button  uk-button-large uk-margin-small-right uk-width-1-1 ">
               <div class="uk-text-truncate">0xabe2a1c7ecd544ebc9f8f138dd6e0967f162bb83</div>
               </button>
    
  </CopyClipboard>
           </div>
       </div>

       <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 uk-margin-top">


{
    showcode == true?(
        <div class="uk-card uk-card-body uk-card-default">
            <span>Thank you for using borrowlite</span>
            <span> meter name: {metername}</span><br></br>
            <span> meter number: {meter_number}</span><br></br>
            <span> phone number: {number}</span><br></br>
            <span> amount: {amount}</span><br></br>
            <span> meter unit: {code}</span><br></br>
        </div>
    ):(

      <div  style={{borderRadius:'20px'}}class="uk-card uk-card-body uk-card-default">
      {
          show == true ? (
              <div>
                  Please verify if this is your meter name<br></br>
                  <h5>{metername}</h5>
              </div>
          ):(null)
      }
      

       
 
      
 <div class="uk-margin">
 <label style={{fontSize:'12px'}}  class="uk-form-label" for="form-stacked-select">Currency</label>
         <select  value={product_code}   name="product_code" onChange={e => setProduct_code(e.target.value)}  style={{borderRadius:'5px'}}class="uk-select">
             <option disabled selected>Wksc</option>
             <option value="phed_prepaid_custom" >WKSC</option>
             
         </select>
     </div>

     <div class="uk-margin">
     <label style={{fontSize:'12px'}}  class="uk-form-label" for="form-stacked-select">Amount</label>
         <input value={amount}   name="amount" onChange={
             e => {
                 let em =  e.target.value
                 setAmount(em)
                let wk = e.target.value*2
                setWksc(wk)
                let et = e.target.value* 0.00025
                setEther(et)
                
                }
             
             } style={{borderRadius:"5px"}} class="uk-input" type="number" placeholder="USD"></input>
     </div>

     <div class="uk-margin">
     <label style={{fontSize:'12px'}}  class="uk-form-label" for="form-stacked-select">Email address</label>
         <input value={email}   name="number" onChange={e => setEmail(e.target.value)} style={{borderRadius:"5px"}} class="uk-input" type="text" placeholder="Email address"></input>
     </div>

     <div class="uk-margin">
     <label style={{fontSize:'12px'}}  class="uk-form-label" for="form-stacked-select"> Wksc token wallet address</label>
         <input value={walletaddress}   name="number" onChange={e => setWalletaddress(e.target.value)} style={{borderRadius:"5px"}} class="uk-input" type="text" placeholder="Wallet address"></input>
     </div>

     <div class="uk-margin">
      <div style={{color:'gray'}} class="col-lg-12 col-md-12 col-sm-12 col-xs-12 uk-text-left">Summary</div>
       <div style={{color:'gray', fontSize:'12px'}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-left">WKSC Price</div>
       <div style={{color:'gray', fontSize:'12px'}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-right">0.1 USD</div>
        
       <div style={{color:'gray', fontSize:'12px'}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-left">Amount in Ether</div>
       <div style={{color:'gray', fontSize:'12px'}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-right">{ether} ETH</div>

         <div style={{color:'gray', fontSize:'12px'}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-left">You get</div>
       <div style={{color:'gray', fontSize:'12px'}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-right">{wksc} WKSC</div>



  <div style={{color:'gray', fontSize:'12px'}} class=" uk-margin-small-bottom col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-left">Total</div>
       <div style={{color:'gray', fontSize:'12px'}} class=" uk-margin-small-bottom  col-lg-6 col-md-6 col-sm-6 col-xs-6 uk-text-right">{amount}</div>

       

    </div>
  
    
   {
       show == true?(
         
         <div class="uk-margin">
         <button  onClick={getlight}  style={{  fontFamily:'Rubik', fontWeight: '400', borderRadius:'5px', backgroundColor:'#fdd697', color:'#213948'}}class="uk-button uk-button-default uk-button-large uk-margin-small-right uk-width-1-1 ">
             Buy light
             </button>
             </div>
       ):(  <div class="uk-margin">
       <button 
       onClick={() => {
        verify()
      }}
       
       
       style={{  fontFamily:'Rubik', fontWeight: '400', borderRadius:'5px', backgroundColor:'blue', color:'white'}}class="uk-button  uk-button-large uk-margin-small-right uk-width-1-1 ">
       Make payment
           </button>
           </div>)
   }

     

       </div>



    )
}

   </div>


       <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
       </div>
   </div>
 )
};

export default Buy;
