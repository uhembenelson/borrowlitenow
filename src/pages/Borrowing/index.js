import React, { Component, useContext , useState} from 'react';
import Footer from '../Home/Blocks/Footer';
import OrderElectricity from './Blocks/OrderElectricity';
import VerifyOrder from './Blocks/VerifyOrder';
import Wizard from './Blocks/Wizard';
import { UserContext } from '../../components/context/UserContext';
const { meterdata } = OrderElectricity


const Index = (props)=>{
    const { authenticated, user } = useContext(UserContext);
    const [userdata, setUserdata ] = useState(user)
   // const [meterdata, setMeterdata] = useState(props.meterdata)
    console.log("this is props",props.meterdata )


    return(
        <>
        <Wizard  userdata = { userdata }/>
        <OrderElectricity  userdata = { userdata }/>
        <Footer/>
        </>
    )

}
export default Index