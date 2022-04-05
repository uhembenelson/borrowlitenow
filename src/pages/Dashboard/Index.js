import React,{ useState,createContext, useContext, useEffect } from "react";
import { UserContext } from "../../components/context/UserContext";
import  Sidebar from '../Dashboard/Sidebar';
import axios from '../../lib/Config'

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Dashboard() {
   const { user } = useContext(UserContext)
   const [userdata, setUserdata] = useState("")
   const [transactions, setTransactions] = useState([])
   const [transactionLength, setTransactionLength] = useState("")
   const [transactionAmount, setTransactionAmount] = useState("")
   const [totalAmount, setTotalAmount] = useState("")
   const [totalUsers, setTotalUser] = useState("")

   const getAllTransactons =()=> {
    axios.get("/getAllTransactions").then((res =>{

    const data = res.data
    const allamount = data.map(x => parseInt(x.amount))
    const sum = allamount.reduce((a, b) => a + b, 0);
    setTransactionAmount(sum)
     setTransactionLength(res.data.length)
     setTransactions(data)  
 
    }))
}

     const getallusers =()=> {
         axios.get("/api/v2/users").then((res =>{

         const data = res.data
        setUserdata(data)
        setTotalUser(res.data.length)
          
         }))
     }
     //getallusers()
   useEffect(()=>{
       getallusers()
       getAllTransactons()
   }, [])
    return (
        <div class="row  uk-container">
          <div class="col-lg-3">
          <Sidebar/>
          </div>

          <div class="col-lg-9">
          <div class="row">
          <div style={{borderRadius:3, textAlign:"center", backgroundColor:'#450ACC', color:'white'}} class="col-lg-3 uk-card-body uk-card-default uk-card-small uk-margin-left uk-margin-right">
              <div style={{fontSize:40, fontWeight:'bold'}}>{totalUsers}</div>
              <div>Users</div>
              </div>

              <div style={{borderRadius:3, textAlign:"center", alignContent:'center', backgroundColor:'#339900', color:'white'}} class="col-lg-3 uk-card-body uk-card-default uk-card-small uk-margin-left uk-margin-right">
              <div style={{fontSize:40, fontWeight:'bold'}}>{transactionLength}</div>
              <div>Transactions</div>
              </div>
          

              <div style={{borderRadius:3, textAlign:"center", alignContent:'center', backgroundColor:'#BDBDBD', color:'white'}} class="col-lg-3 uk-card-body uk-card-default uk-card-small uk-margin-left uk-margin-right">
              <div style={{fontSize:40, fontWeight:'bold', textAlign:"center",  }}>{transactionAmount}</div>
              <div>Transactions amount</div>
              </div>
          </div>


          <div class="row">
            <div class="uk-margin-left uk-margin-top uk-margin-bottom">
              <h4 style={{color:'#22292E'}}>Recent transactions</h4>

              <div class="uk-overflow-auto">
    <table class=" uk-table-small uk-table-divider">
        <thead style={{color:'#22292E',fontSize:10, }}>
            <tr>
                <th>Meter name</th>
                <th>meter number</th>
                <th>Disco</th>
                <th>Phone number</th>
                <th>Email address</th>
                <th>Amount</th>
                <th>Token</th>
                <th>Ref no</th>
                <th>Date</th>
                
            </tr>
        </thead>

       {
         transactions.map((item)=>(
          <tbody style={{color:'#22292E',fontSize:10, }} >
          <tr >
              <td>{item.meter_name}</td>
              <td>{item.meter_number}</td>
              <td>{item.product_code}</td>
              <td>{item.number}</td>
              <td>{item.email}</td>
              <td>{item.amount}</td>
              <td>{item.token}</td>
              <td>Table Data</td>
              <td>{item.date}</td>
             
          </tr>
      </tbody>
    ))
       }


    </table>
</div>
            </div>
          </div>
          </div>
       

        </div>





























//         <div class="row uk-container">
//             <div class="col-lg-3">
//                 <Sidebar/>
//          </div>

//                 <div class="col-lg-9">
//                 <table class="uk-table uk-table-hover uk-table-divider">
//     <thead>
//         <tr>
//             <th>Full name</th>
//             <th>Email</th>
//             <th>Phone number</th>
//             <th>Meter number</th>
//             <th>User type</th>
//         </tr>
//     </thead>
//     <tbody>
//     {/* {userdata.data.map(d => (<li key={d.id}>{d.fullname}</li>))}  */}
       
       
//     </tbody>
// </table>
//                 </div>
//         </div>

    );
}

