import { useEffect, useState, React } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Sidebar =()=>{
    const [show, setShow] = useState(false);
    return(
        <>
        <div class="col-lg-12 uk-card uk-card-body uk-card-default">
          side bar
        </div>
        </>

    )
}

export default Sidebar
