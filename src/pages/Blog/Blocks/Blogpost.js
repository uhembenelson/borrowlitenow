import React, { Component } from 'react';
import {useLocation} from 'react-router-dom';
import logo from '../../../images/logoblack.png'
import Footer from '../../Home/Blocks/Footer';




const Blogpost = ()=>{

    const data = useLocation();
    console.log("this is me ", data)

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
return(
    <>
    <div className="uk-container">
        <div className="uk-flex uk-flex-center uk-margin-top">
          <div className="hidden-sm hidden-xs" style={{ flexDirection:'row', justifyContent:'space-around', alignContent:'center', fontSize:60, fontFamily:'Dongle'}}>{data.state.title} </div> 
          <div className="hidden-lg hidden-md" style={{ flexDirection:'row', justifyContent:'space-around', alignContent:'center', fontSize:30, fontFamily:'Dongle'}}>{data.state.title} </div> 
        </div>

        <div className="uk-flex uk-flex-center ">
                                        <img src={logo} style={{height:50, width:50}}></img>
                                        
                                        <div style={{marginTop:10}} className="uk-margin-left">
                                            <div style={{fontFamily:'Dongle', fontSize:24, lineHeight:0.5, fontWeight:'300'}}>Borrowlite Admin</div>
                                            <div>
                                            <span style={{fontFamily:'Dongle', fontSize:24,fontWeight:'300'}}>{convertDate(data.state.pubDate)}</span>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="uk-flex uk-flex-center uk-margin-top">
                                    <img src={data.state.thumbnail} style={{borderRadius:5}} alt=""/>
                                    </div>

                                    <div className="uk-flex uk-flex-center uk-margin-top uk-margin-large-bottom">
                                    <div className="uk-margin-top" style={{fontFamily:'Dongle', fontWeight:300,fontSize:28, lineHeight:1}}>
                                    { truncateText(toText(data.state.description), 26) + "..."}
                                    </div>
                                    </div>


                                    
    </div>

    <Footer/>
    </>
)

}


export default Blogpost