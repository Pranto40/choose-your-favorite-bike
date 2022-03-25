import React, { useEffect, useState } from 'react';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('BikeData.json')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <div>
            {
                bikes.map((bike) => console.log(bike.name))
            }
        </div>
    );
};

export default Bikes;