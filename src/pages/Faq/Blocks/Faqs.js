import React, { useState } from 'react'

const Faqs = ()=> {
  const [show, setShow] = useState(false);
  const [me, setMe] = useState("");
  const [faqData, setFaqData]= useState([
    {
      id:'1',
      question: 'Why did my meter reject the token?',
      answer: 'The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.'
    },
    {
      id:'2',
      question: "I can't load my token",
      answer: 'head to borrowlite.com to get starte'
    },
    {
      id:'3',
      question: 'I was debited for a failed transaction',
      answer: 'head to borrowlite.com to get st'
    },
    {
      id:'4',
      question: 'I bought for a wrong meter number',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'5',
      question: 'How Energy Saver Functionality works',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'6',
      question: 'How to create an account',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'7',
      question: 'How to reset my password',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'8',
      question: 'What payment options are available?',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'9',
      question: 'What happens if my card doesn’t work',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'10',
      question: 'How can i borrow light on Borrowlite?',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'11',
      question: 'How can i buy light on Borrowlite?',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'12',
      question: 'Why did my transaction fail?',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'13',
      question: 'How do i access my tokens?',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'14',
      question: 'What do i do if my token is not generated after payment?',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'15',
      question: 'Why do i have to pay service charge?',
      answer: 'head to borrowlite.com to get std'
    },
    {
      id:'16',
      question: 'Where can i see my bills?',
      answer: 'head to borrowlite.com to get std'
    },
  ])
  
  const handleChange = (item) => {
    console.log("this is working", item)
    if(me === ""){
      setMe(item.id)
    }else{
      setMe("")
    }
  }
  return (
    <div className="uk-container ">

      <ul uk-accordion>

        {
          faqData.map((item) => 
          <li className="" style={{listStyle: 'none', }}>
            <div className="uk-margin-top " style={{border: '1px solid #BDBDBD', borderRadius: '5px',}}>
            <h3 style={{fontWeight:'200', fontSize:28,fontFamily:'Dongle', marginLeft: '10px' }} onClick={() =>{handleChange(item)}} class="uk-accordion-title">{item.question}</h3>
            </div>
          
          
          {
            me === item.id? (<div style={{fontWeight:'200', fontSize:25,fontFamily:'Dongle'}} class="uk-accordion-content">{item.answer}</div>): null
          }
        </li>  

          )
        }
        
      </ul>
    </div>
  )
}

export default Faqs;