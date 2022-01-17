


import { useEffect, useState, React } from 'react';

const Userdata = () =>{
    const [userdata, setUserdata] = useState()
    const uuserdata = localStorage.getItem("userdata");
   const realdata = JSON.parse(uuserdata)
   setUserdata(realdata)
   return userdata
}




export default Userdata



