import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Mydetailspage() {

const {id}= useParams();
    const [a, b] = useState({});

    const myapifunc = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
            console.log(d.data);
            b(d.data);
            
        })
    }

    useEffect(()=>{
        myapifunc();
    },[]);



  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-5'>
              <img src={a.images} alt="sdfsd" width={300}/>  
            </div>
            {a.id===22 || a.id===25 ? <div className='col-md-7 bg-danger'>
                <h1> id: {a.id}</h1>                   
                <h2>{a.title}</h2>
                <p>{a.description}</p>
            </div> :  
            <div className='col-md-7'>
                <h1> id: {a.id}</h1>
                <h2>{a.title}</h2>
                <p>{a.description}</p>
            </div>
            }
        </div>
    </div>
  )
}

export default Mydetailspage