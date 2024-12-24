import React from 'react'
import { DiAndroid,DiApple } from "react-icons/di";
import { FcCurrencyExchange } from "react-icons/fc";
import { MdNextWeek } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';



function Myreacticons() {
    const [svariable, sfunction]=useState("this is defaunt value");

    const msg =()=>
    {
        // alert("welcome to react js");
        toast.success("welcome to react tostif msg",{position: "top-left",theme: "dark",autoClose: 1000});
        sfunction("changevalue")
    }
    const a = "this";



  return (
    <div className='container'>
        <div className='row'>
            <div className="col-12">
                <h1>react icons</h1>
                <h2 className='text-danger'><DiAndroid></DiAndroid></h2>
                <DiApple/>
                <h2><FcCurrencyExchange/></h2>
                <button className='btn btn-danger' onClick={msg}>Next<MdNextWeek/></button>
                <ToastContainer></ToastContainer>
                <input value={svariable}/>
            </div>
        </div>
    </div>
  )
}

export default Myreacticons