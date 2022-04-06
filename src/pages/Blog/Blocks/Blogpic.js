import React, { Component, useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import one from '../../../images/one.png';
import two from '../../../images/two.png';
import three from '../../../images/three.png';
import axios from 'axios';
import { map } from 'async';
import logo from '../../../images/logoblack.png'

const Blogpic = () => {
    const navigate = useNavigate();
    const [postdata, setPostdata] = useState([])

    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40borrowlite";
     const getdata = ()=>{
           axios.get(mediumURL).then((res)=>{
            setPostdata(res.data.items)
            console.log(postdata)
            
          })
     }

     const posts = postdata.filter(item => item.categories.length > 0);
     console.log("this is post here", posts)

     function cleanTitle(checkTitle) {
        checkTitle = checkTitle.replace("amp;", "");
        return checkTitle
    }

    function truncateText(text, start, len) {
        return text.length > len ? text.slice(start, len) : text;
    }

    function toText(block) {
        let tag = document.createElement('div');
        tag.innerHTML = block;
        block = tag.innerText;
        return block
    }

    function convertDate(date) {
        let dateArray = date.slice(0, 10).split("-")
        let year = dateArray.shift();
        dateArray.push(year)
        console.log(date)
        return `Published: ${dateArray.join("/")}`;
    }
    

    
 


 useEffect(()=>{
    getdata()
  
 },[])

        return(
    
            <>
                <div className='container '>
                    {
                        postdata.map((items)=>(
                            <div className='row ' style={{marginTop:60}} >
                        
                            <div className=' uk-margin-top  col-lg-4 col-md-4 col-xs-12 col-sm-12'>
                                <div >
                                    <img src={items.thumbnail} style={{borderRadius:5}} alt=""/>

                                    
                                    <a onClick={()=>{
                                        navigate('/Blogpost',{state:{title:items.title, content:items.content,description:items.description, thumbnail:items.thumbnail, pubDate:items.pubDate}});
                                    }}>
                                    <div style={{fontSize:32, fontWeight:400, fontFamily:'Dongle' }}>
                                    {truncateText(cleanTitle(items.title), 0, 60)}
                                    </div>
                                    </a>
                                    <div style={{fontFamily:'Dongle', fontWeight:300,fontSize:28, lineHeight:0.9}}>
                                    { truncateText(toText(items.description), 26, 100) + "..."}
                                    </div>
                                    <div className="uk-flex uk-margin-small-top">
                                        <img src={logo} style={{height:50, width:50}}></img>
                                        
                                        <div style={{marginTop:10}} className="uk-margin-left">
                                            <div style={{fontFamily:'Dongle', fontSize:24, lineHeight:0.5, fontWeight:'300'}}>Borrowlite Admin</div>
                                            <div>
                                            <span style={{fontFamily:'Dongle', fontSize:24,fontWeight:'300'}}>{convertDate(items.pubDate)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                           
                        ))
                    }


                   
                    
                </div>
                
                


                <div className='container'>
                    <div className=" uk-margin-large " >
                        <div className=' uk-text-center '>
                            <button style={{marginTop:80, width:364,height:52,borderRadius:5,justifyContent:'space-between',gap:10, color:'#450ACC',backgroundColor:'white', border: '1px solid #450ACC'}}>
                                <span style={{width:123, height:36, fontSize:25,fontFamily:'Dongle',fontWeight:400}}>SEE MORE POSTS</span>
                            </button>
                        </div>
                    </div>
                </div>
                  
</>
    )

  
}






export default Blogpic;


