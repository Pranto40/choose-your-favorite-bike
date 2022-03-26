import React, { useEffect, useState } from 'react';
import BikeInfo from '../Bike Info/BikeInfo';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('BikeData.json')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[]);

    const [bikeDetail, setInfo] = useState([]);
    const bikeInfo = (id) => {
        const newInfo = [...bikeDetail, id];
        setInfo(newInfo)
    }

    return (
        <>
        <h1 className='heading'>Choose Your Favorite Bike</h1>
        <div className='bike_shop_container'>
            <div className='bike-container'>
                {
                bikes.map((bike) => <Bike
                key = {bike.id}
                bike = {bike}
                bikeInfo = {bikeInfo}
                ></Bike>)
               }
            </div>
            <div className='bike-detail'>
                <h2>Selected Bikes</h2>
                {
                    bikeDetail.map((info) => <BikeInfo
                    key = {info.id}
                    detail = {info}
                    ></BikeInfo>)
                }
            <div className='bike-btn'>
                <button>CHOOSE 1 FOR ME</button>
                <br />
                <button>CHOOSE AGAIN</button>
            </div>
            </div>
        </div>
        </>
    );
};

export default Bikes;