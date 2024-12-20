import React from 'react';
import ReactDOM from 'react-dom/client';
import Xys, { About, About2 } from './Myabout';
import Mycontact from './Mycontact';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import UUU from './Mytspage.ts';
import Mycontactus from './Contactus.js';
import Myreactbootstrap from './Myreactbootstrap.js';
import Mymuipage from './Mymuipage.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myreactbootstrap/>
    <Mymuipage/>
    <h1>sdfhsdjkfhj</h1>
    <div>sdjfhjsdhf sdfsdfsdfds</div>
    <About></About>
    <Xys></Xys>
    <About2></About2>
    <Mycontact/>
    <UUU/>
  <Mycontactus></Mycontactus>
  </React.StrictMode>
);

