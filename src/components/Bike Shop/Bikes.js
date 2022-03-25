import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('BikeData.json')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <>
        <h1 className='heading'>Choose Your Favorite Bike</h1>
        <div className='bike_shop_container'>
            <div className='bike-container'>
                {
                bikes.map((bike) => <Bike
                key = {bike.id}
                bike = {bike}
                ></Bike>)
               }
            </div>
            <div className='bike-info'>
                <h1>hello</h1>
            </div>
        </div>
        </>
    );
};

export default Bikes;