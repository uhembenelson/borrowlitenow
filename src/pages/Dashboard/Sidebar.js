import { useEffect, useState, React } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Sidebar =()=>{
    const [show, setShow] = useState(false);
    return(
        <>
        <div class="col-lg-12 uk-card uk-card-body uk-card-default">
        <div>
        <Link  to="/" style={{textDecoration:'none'}}>
            <span  uk-icon="icon:  home; ratio: 0.9"></span>
            <span style={{ fontFamily:'Dongle',fontSize:22, fontWeight:'300'}} className="uk-margin-small-left">Home</span>
          </Link>
        </div>

         <div>
         <Link  to="/dashboard" style={{textDecoration:'none'}}>
            <span  uk-icon="icon:  thumbnails; ratio: 0.9"></span>
            <span style={{fontFamily:'Dongle',fontSize:22, fontWeight:'300'}} className="uk-margin-small-left">Dashboad</span>
          </Link>
         </div>

         <div>
         <Link  to="/Users" style={{textDecoration:'none'}}>
            <span  uk-icon="icon:  users; ratio: 0.9"></span>
            <span style={{fontFamily:'Dongle',fontSize:22, fontWeight:'300'}} className="uk-margin-small-left">All Users</span>
          </Link>
         </div>

         <div>
         <Link  to="/Users" style={{textDecoration:'none'}}>
            <span  uk-icon="icon:  user; ratio: 0.9"></span>
            <span style={{fontFamily:'Dongle',fontSize:22, fontWeight:'300'}} className="uk-margin-small-left">Active Borrowers</span>
          </Link>
         </div>

         <div>
         <Link  to="/Users" style={{textDecoration:'none'}}>
            <span  uk-icon="icon:  album; ratio: 0.9"></span>
            <span style={{fontFamily:'Dongle',fontSize:22, fontWeight:'300'}} className="uk-margin-small-left">Our Merchant</span>
          </Link>
         </div>

         <div>
         <Link  to="/Users" style={{textDecoration:'none'}}>
            <span  uk-icon="icon:  ban; ratio: 0.9"></span>
            <span style={{fontFamily:'Dongle',fontSize:22, fontWeight:'300'}} className="uk-margin-small-left">Due Borrowers</span>
          </Link>
         </div>

         <div>
         <Link  to="" style={{textDecoration:'none'}}>
            <span  uk-icon="icon:  sign-out; ratio: 0.9"></span>
            <span style={{fontFamily:'Dongle',fontSize:22, fontWeight:'300'}} className="uk-margin-small-left">logout</span>
          </Link>
         </div>
        
        </div>
        </>

    )
}

export default Sidebar
