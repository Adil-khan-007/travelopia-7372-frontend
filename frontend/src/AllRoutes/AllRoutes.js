import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AddTraveller from '../Components/AddTraveller';
import Travellers from '../Components/Travellers';

function AllRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<AddTraveller />}/>
            <Route path="/travellers" element={<Travellers />}/>
        </Routes>
    );
}

export default AllRoutes;