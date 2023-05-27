import React, { useEffect, useState } from 'react';

function Travellers(props) {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = ()=>{
        return fetch("http://localhost:3004/user").then(res=>res.json()).then((data)=>{
            setData(data.data);
        })
    }
    return (
        <div style={{width : "40%",margin:"auto"}}>
            {
                data.length > 0 ? <><h1>List of Travellers</h1><table border="1" cellPadding="8">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Place</th>
                            <th>No of Travellers</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((el,i)=>{
                                return <tr key={i+1}>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.place}</td>
                                    <td>{el.travellers}</td>
                                    <td>{el.price}$</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table></> : <h1>Loading...</h1>
            }
        </div>
    );
}

export default Travellers;