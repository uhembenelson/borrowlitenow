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
import CopyClipboard from 'react-copy-clipboard';






const Backdoor = () => {
    
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
    const [wksc, setWksc] = useState()
    const [walletaddress, setWalletaddress] = useState()
    const [wkscdata , setWkscdata] = useState([])
    const [copied, setCopied] = useState(false)

    const config = {
        public_key: 'FLWPUBK_TEST-db3ec9ccf7dc1e0e311e3242e8c56594-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: `${email}`,
        },
        customizations: {
          title: 'WKSC TOKEN',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    }

    const handleFlutterPayment = useFlutterwave(config);

    useEffect(() => {
        axios.get('https://sheltered-taiga-10720.herokuapp.com/getpresells')
         .then(function (response){
            console.log("this is response", response.data)
            setWkscdata(response.data)

         })
        
      },[]);
   




    const verify = () =>{
         swal({
             text:"payment successfully your token will be send to your wallet address shortly",
             icon:'success',
             button:false,
             timer:4000
         })

         const postdata = {
             email,
             wksc,
             amount,
             walletaddress
         }

         console.log("this is my post data", postdata)
         axios.post('https://sheltered-taiga-10720.herokuapp.com/presells',postdata)
         .then(function (response){
         console.log(response)
         setEmail('')
         setWalletaddress('')
         setAmount('')
         setWksc('')
         })
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
      
      

       <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 uk-margin-top">
       {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
       <table class="uk-table uk-table-small uk-table-divider">
    <thead>
        <tr>
            <th>Amount in USD</th>
            <th>Amount in WKSC</th>
            <th>Email</th>
            <th>Checkout ID</th>
            <th>wallet address</th>
        </tr>
    </thead>
    <tbody>
        {
            wkscdata.map(item => (
                <tr>
                <td> USD {item.amount}</td>
                <td> WKSC {item.wksc}</td>
                <td>{item.email}</td>
                <td>{item.checkoutId}</td>
                <td>
                <CopyClipboard  text={item.walletaddress} suffix='(copy)'>
    <span>{item.walletaddress}</span>
  </CopyClipboard>
                 {/* <CopyToClipboard text={item.walletaddress}
          onCopy={() => setCopied({copied: true})}> 
          <span>{item.walletaddress} </span>
         
        </CopyToClipboard> */}
       
                
                </td>
            </tr>

            )
               

            )
        }
       
       
        
    </tbody>
</table>
           </div>





       
   </div>
 )
};

export default Backdoor;
