import React from 'react';
import './Bike.css'

const Bike = ({bike}) => {
    console.log(bike);
    const {id, name, price, picture} = bike;
    return (
        <div className='product'>
            <img src={picture} alt="" />
           <div className="product-content">
           <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{price}</h1>   
            </div> 
        </div>
    );
};

export default Bike;