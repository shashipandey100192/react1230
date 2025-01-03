import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./modules/css/global.css";
import Myloginpage from './modules/auth/Myloginpage';
import Registorpage from './modules/auth/Registorpage';
import Mainpage from './modules/dashbord/Mainpage';
import Mylandingpage from './modules/dashbord/Mylandingpage';
import Reactproperty from './modules/dashbord/Reactproperty';
import Myfetchapipage from './modules/dashbord/Myfetchapipage';
import Myaxiospage from './modules/dashbord/Myaxiospage';
import Myerrorpage from './modules/sharecomponent/Myerrorpage';
import Mydetailspage from './modules/dashbord/Mydetailspage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Myloginpage/>}></Route>
          <Route path='registor' element={<Registorpage/>}></Route>
          <Route path='dashboard' element={<Mainpage/>}>
            <Route path='' element={<Mylandingpage/>}/>
            <Route path="props" element={<Reactproperty/>}/>
            <Route path='datafetch' element={<Myfetchapipage/>}/>
            <Route path='axiospage' element={<Myaxiospage/>}/>
            <Route path="axiospage/details/:id" element={<Mydetailspage/>}></Route>                                                                    
            <Route path='*' element={<Myerrorpage/>}/>
            
          </Route>
          <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

