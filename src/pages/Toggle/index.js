import React, { Component, useState } from 'react';

const Toggle = () => {

    const[show, setShow] = useState(false)
    const[me, setMe] = useState("")    
    const[faqData, setFaqData ] = useState([
        {
            id:'1',
            question:'how do i borrow light',
            answer:'head to borrowlite.com to get sta'
        },
        {
            id:'2',
            question:'how do i borrow light',
            answer:'head to borrowlite.com to get starte'
        },
        {
            id:'3',
            question:'how do i borrow light',
            answer:'head to borrowlite.com to get st'
        },
        {
            id:'4',
            question:'how do i borrow light',
            answer:'head to borrowlite.com to get std'
        }
    ])
    const handleChange =(item)=> {
        console.log("this is working", item)
        if(me == ""){
            setMe(item.id)
        }else{
          setMe("")
        }
     

    }

    return(
        <>




        
        {
            faqData.map((item)=> 
            <div className="">
            <div  onClick={()=>{handleChange(item)}}>{item.question} {item.id}</div>

           {
             me === item.id? (<div>{item.answer}</div>):(null)
           }
        </div>)
        }
        </>
    )
}
export default Toggle;