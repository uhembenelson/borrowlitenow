import React from 'react';

const Wizard = (props) => {
    return (
        <div className="uk-container"  >
         <div className="" style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
         <div className="col-lg-3 col-xs-3  uk-text-center">
             <div>
             <div className="" style={{display:'flex', justifyContent:'center', flexDirection:"row", alignItems:'center'}}>
             <div style={{  fontWeight:'300', fontFamily:'Dongle',fontSize:25, width:60, height:60,display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', borderColor:'#350ACC', borderStyle:'solid', borderRadius:360}}>1</div>
             </div>
             <div className="" style={{ color:'#350ACC', width:'80%', marginLeft:'63%', marginTop:-30, marginBottom:30,  alignItems:'flex-end', borderTop:'dotted',}}/>

             </div>
             <div style={{fontSize:25, fontFamily:'Dongle', fontWeight:'300'}}>Order Elecricity</div>
                    
        </div>


        <div className="col-lg-3 col-xs-3  uk-text-center">
             <div>
             <div className="" style={{display:'flex', justifyContent:'center', flexDirection:"row", alignItems:'center'}}>
             <div style={{  fontWeight:'300', fontFamily:'Dongle',fontSize:25, width:60, height:60,display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', borderColor:'#350ACC', borderStyle:'solid', borderRadius:360}}>2</div>
             </div>
             <div className="" style={{ color:'#350ACC', width:'80%', marginLeft:'63%', marginTop:'-10%', marginBottom:30,  alignItems:'flex-end', borderTop:'dotted',}}/>

             </div>
             <div style={{fontSize:25, fontFamily:'Dongle', fontWeight:'300'}}>Review Order</div>
                    
        </div>

       

        <div className="col-lg-3 col-xs-3  uk-text-center">
             <div>
             <div className="" style={{display:'flex', justifyContent:'center', flexDirection:"row", alignItems:'center'}}>
             <div style={{  fontWeight:'300', fontFamily:'Dongle',fontSize:25, width:60, height:60,display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', borderColor:'#350ACC', borderStyle:'solid', borderRadius:360}}>3</div>
             </div>
             {/* <div className="" style={{ color:'#350ACC', width:'80%', marginLeft:'63%', marginTop:'-10%', marginBottom:30,  alignItems:'flex-end', borderTop:'dotted',}}/> */}

             </div>
             <div style={{fontSize:25, fontFamily:'Dongle', fontWeight:'300'}}>Transaction Summary</div>
                    
        </div>






            {/* <div className="col-lg-12" >
                 <div className="col-lg-3 col-xs-3 ">
                     <div className="row" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                     <div style={{ marginTop: -9, fontFamily:'Dongle',fontSize:36, color:'#350ACC', display:'flex', justifyContent:'center', alignItems:'center', width:60, height:60, borderColor:'#350ACC', borderStyle:'solid', borderRadius:360}}>1</div>
                     <div className="uk-margin-top" style={{ color:'#350ACC', width:'80%', marginLeft:5, display:'flex', justifyContent:'center', alignItems:'center', borderTop:'dotted',}}/>
                     
                     </div>
                     <div className="uk-margin-small-top" style={{fontSize:25, fontFamily:'Dongle', fontWeight:'300'}}>Order Elecricity</div>
                     </div>


                     <div className="col-lg-3 col-xs-3">
                     <div className="row" style={{display:'flex', flexDirection:'row'}}>
                     <div style={{ marginTop: -9, fontFamily:'Dongle',fontSize:36, color:'#350ACC', display:'flex', justifyContent:'center', alignItems:'center', width:60, height:60, borderColor:'#350ACC', borderStyle:'solid', borderRadius:360}}>2</div>
                     <div className="uk-margin-top" style={{ color:'#350ACC', width:'80%', marginLeft:5, display:'flex', justifyContent:'center', alignItems:'center', borderTop:'dotted',}}/>
                     
                     </div>
                     <div className="uk-margin-small-top" style={{fontSize:25, fontFamily:'Dongle', fontWeight:'300'}}>Review Order</div>
                     </div>

                     <div className="col-lg-3 col-xs-3">
                     <div className="row" style={{display:'flex', flexDirection:'row'}}>
                     <div style={{ marginTop: -9, fontFamily:'Dongle',fontSize:36, color:'#350ACC', display:'flex', justifyContent:'center', alignItems:'center', width:60, height:60, borderColor:'#350ACC', borderStyle:'solid', borderRadius:360}}>2</div>
                     <div className="uk-margin-top" style={{ color:'#350ACC', width:'80%', marginLeft:5, display:'flex', justifyContent:'center', alignItems:'center', borderTop:'dotted',}}/>
                     
                     </div>
                     <div className="uk-margin-small-top" style={{fontSize:25, fontFamily:'Dongle', fontWeight:'300'}}>Review Order</div>
                     </div>

                     <div className="col-lg-3 col-xs-3">
                     <div className="row" style={{display:'flex', flexDirection:'row'}}>
                     <div style={{ marginTop: -9, fontFamily:'Dongle',fontSize:36, color:'#350ACC', display:'flex', justifyContent:'center', alignItems:'center', width:60, height:60, borderColor:'#350ACC', borderStyle:'solid', borderRadius:360}}>2</div>
                     
                     
                     </div>
                     <div className="uk-margin-small-top" style={{fontSize:25, fontFamily:'Dongle', fontWeight:'300'}}>Review Order</div>
                     </div>
             </div>  */}
         </div>
             
        </div>
    );
}

export default Wizard;