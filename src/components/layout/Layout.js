import { Fragment, useState, useEffect, createContext, useContext } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Userdata from '../Components'
import UserContextProvider from '../context/UserContext';



const Layout = (props) => {

 


  return (
   
    <UserContextProvider>
      <Fragment>
         <MainNavigation/>
         <main className={classes.main}>{props.children}</main>
    </Fragment>
    </UserContextProvider>
 
   
  );
};

export default Layout;
