import React from 'react';
import './Bike.css'
import { FiShoppingCart } from 'react-icons/fi';

const Bike = ({bike, bikeInfo}) => {
    const {name, price, picture} = bike;
    return (
        <div className='product'>
            <img src={picture} alt="" />
           <div className="product-content">
            <h3>Name: {name}</h3>
            <h2>Price: {price}</h2>
            <button onClick={() => bikeInfo(bike)} className='btn'>Add to cart <FiShoppingCart /></button> 
            </div> 
        </div>
    );
};

export default Bike;