import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"black",height:"60px",alignItems:"center"}}>
            <Link to="/">AddTraveller</Link>
            <Link to="/travellers">Travellers</Link>
        </div>
    );
}

export default Navbar;