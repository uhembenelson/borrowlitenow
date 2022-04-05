import React, { Component, useContext , useState, useEffect} from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import Footer from '../Home/Blocks/Footer';
import OrderElectricity from './Blocks/OrderElectricity';
import { useNavigate, Route } from 'react-router-dom';
import VerifyOrder from './Blocks/VerifyOrder';
import Wizard from './Blocks/Wizard';
import { UserContext } from '../../components/context/UserContext';
const { meterdata } = OrderElectricity



const Index = (props)=>{
    const { authenticated, user } = useContext(UserContext);
    const [userdata, setUserdata ] = useState(user)
   // const [meterdata, setMeterdata] = useState(props.meterdata)
    console.log("this is props",props.meterdata )
    const naviate = useNavigate()

     useEffect(()=>{
        if(!authenticated){
            Navigate("/signin")
        }
           

        
    })
    return(
        <>
        <Wizard  userdata = { userdata }/>
        <OrderElectricity  userdata = { userdata }/> 
        <Footer/>
        </>
    )
   


    

}
export default Index