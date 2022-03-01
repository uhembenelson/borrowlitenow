import { Route, Routes, Navigate, Link } from 'react-router-dom';


import './index.css'
import Buy from './pages/Buy';
import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';
import Borrowlight from './pages/Borrowlight';
import Index from './pages/Index';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/Index'


function App() {
  return (
    
        <Layout>
      <Routes>
      
        <Route path='/' element={<Index />} />
        
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Borrowlight' element={<Borrowlight/>} /> 
        <Route path='/Dashboard' element={<Dashboard/>} />
       
      </Routes>
    </Layout> 
   
 
  );
}

export default App;
