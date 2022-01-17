import React,{ useState,createContext, useContext } from "react";
import { UserContext } from "../../components/context/UserContext";
import  Sidebar from '../Dashboard/Sidebar'

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Dashboard() {
   const { user } = useContext(UserContext)
   console.log('this is user',user)
    return (

        <div className="grid grid-cols-3 md:grid-cols-2">
            <div className=" ">
                <Sidebar/>
            </div>
            <div className="">
                this is two
                </div>
           
            

        </div>

        // <div class="row">
        //     <div class="col-lg-2">
        //       <Sidebar/>
        //     </div>
        //     <div class="col-lg-10  uk-text-left">
        //         <div class="uk-container ">
        //         <h2>{`Hello ${user.email} again!`}</h2>
        //         </div>
        //     </div>
        // </div>


    );
}

