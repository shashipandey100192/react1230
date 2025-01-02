import React, { useState } from 'react';
import { DiGoogleDrive } from "react-icons/di";
import mydata from './myapp.json';
import { Link } from 'react-router-dom';

function Reactproperty() {
    const [namea, setname] = useState("kumarsdfhs");
    const [b, setb] = useState(25)
    // const name = "kumar";
    // const b = 30;
    const mychange = (p) => {
        setname(p.target.value);
        if (p.target.value.length >= 20) {
            setb(80);
        }
        else {
            setb(25);
        }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <input value={namea} size={b} onInput={mychange} />
                    <h2>Total App:{mydata.length}</h2>
                </div>
            </div>
            <div className='row'>
                {mydata.map((e) => {
                    return (
                        <div className='col-sm-2'>
                            <Link to={e.applink}>
                                <div className='card text-center bg-info m-2 '>
                                    <img src={e.appicon} width={50} />
                                    <h3>{e.appname}</h3>
                                    <h4>No:{e.appcode}</h4>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Reactproperty