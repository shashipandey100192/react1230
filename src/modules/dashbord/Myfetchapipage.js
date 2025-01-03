import React, { useEffect, useState } from 'react'
import { MdOutlineStreetview, MdOutlineRateReview, MdDelete } from "react-icons/md";

function Myfetchapipage() {
    const [a, b] = useState([])
    const getdataapi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((d) => {
            console.log(d)
            return d.json();
        }).then((r) => {
            b(r)
        })
    }
    useEffect(() => {
        getdataapi();
    },[])




    return (
        <table className="table table-bordered border-primary">
            <thead>
                <tr>
                    <th scope="col">sno</th>
                    <th scope="col">userId</th>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body Text</th>
                    <th scope="col">Actions</th>

                </tr>
            </thead>
            <tbody>
                {a.map((d,sn=1) => {
                    return (
                        <tr key={d.id}>
                            <th scope="row">{++sn}</th>
                            <td>{d.userId}</td>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                            <td>{d.body}</td>
                            <td className='text-end'>
                                <span className="badge text-bg-primary p-2"><MdOutlineStreetview /></span>
                                <span className="badge text-bg-warning ms-2 p-2"><MdOutlineRateReview /></span>
                                <span className="badge text-bg-danger ms-2 p-2"><MdDelete /></span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Myfetchapipage