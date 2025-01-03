import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Myaxiospage() {
    const [a, b] = useState([]);
    const myapifunc = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            console.log(d.data.products);
            b(d.data.products);
            
        })
    }

    useEffect(()=>{
        myapifunc();
    },[]);



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <input type='button' value="api call" onClick={myapifunc} />
                </div>
                {a.map((p) => {
                    return (
                        <div className='col-md-4'>
                            <div className='card border m-2 p-3 ccard shadow'>
                                <section>
                                <img src={p.images} alt={p.id} width={100}/><br/>
                                <h1>id: {p.id}</h1>
                                <h3>{p.title}</h3>
                                <h4>{p.category}</h4>
                                <h1 className='text-danger'>{p.price}</h1>
                                </section>

                                <section>
                                <Link to={`details/`+p.id} className="btn btn-primary"> show Details</Link>
                                </section>
                               
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Myaxiospage