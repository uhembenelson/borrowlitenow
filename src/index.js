import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import {HelmetProvider}  from 'react-helmet-async';
import { UserContext} from './components/context/UserContext'
import UIkit from 'uikit'



ReactDOM.render(
  <BrowserRouter>
  <HelmetProvider>
  <App />
  </HelmetProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
