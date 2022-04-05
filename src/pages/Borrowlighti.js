import { useEffect, useState, useContext } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import bg from '../images/bg.jpg';
import axios from 'axios';
import Loader from "react-js-loader";
import swal from 'sweetalert';
import { UserContext } from '../components/context/UserContext';

const Borrowlight = () => {
    const { authenticated } = useContext(UserContext)
    const naviate = useNavigate()
    
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

    // useEffect(()=>{
    //     if(!authenticated){
    //         naviate("/signin")
    //     }
    // })


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


const RenderBorrowlite = () =>{
    return(
        <>
        </>
      )
}
  
 {
    return(
       
            <RenderBorrowlite/>
       
    )
 }
};

export default Borrowlight;
