import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./modules/css/global.css";
import Myloginpage from './modules/auth/Myloginpage';
import Registorpage from './modules/auth/Registorpage';
import Mainpage from './modules/dashbord/Mainpage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Myloginpage/>}></Route>
          <Route path='registor' element={<Registorpage/>}></Route>
          <Route path='dashboard' element={<Mainpage/>}></Route>
          

      </Routes>
      
    </BrowserRouter>
    
    
  </React.StrictMode>
);

