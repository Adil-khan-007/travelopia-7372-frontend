import React, { useState } from 'react';

function AddTraveller(props) {
    const [traveller,setTraveller] = useState({
        name : "",
        email : "",
        place : "",
        travellers : 0,
        price : 0
    })
    const [price,setPrice] = useState(0);

    const fetchData = ()=>{
        return fetch("http://localhost:3004/addUser",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(traveller)
        })
    }

    const handleChange = (e)=>{
       setTraveller({...traveller,place:e.target.value});
    }

    const handleClick = ()=>{
        fetchData();
        alert("Succesfully Added");
    }

    const handlePrice = (e)=>{
          setPrice(17*e.target.value);
          setTraveller({...traveller,travellers:e.target.value,price:17*e.target.value})
    }

    const handleChanger = (e)=>{
        setTraveller({
            ...traveller,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div style={{display:"flex",flexDirection:"column",width:"25%",margin:"5% auto",padding:"2%",gap:"25px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
            <h2>Add Traveller</h2>
            <input type="text" placeholder='Enter your name here' name="name" onChange={handleChanger}/>
            <input type="text" placeholder='Enter your email here' name="email" onChange={handleChanger} />
            <select onChange={handleChange}>
                <option value="">select</option>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
            </select>
            <input type="number" placeholder='Enter no of travellers' name="travellers" onChange={handlePrice} />
            <p>Price : {price}$</p>
            <button onClick={handleClick} style={{backgroundColor:"black",color:"white",border:"none",height:"30px"}}>Submit</button>
        </div>
    );
}

export default AddTraveller;