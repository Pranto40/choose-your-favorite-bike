import React from 'react';
import './BikeInfo.css'
import { MdDelete } from 'react-icons/md';

const BikeInfo = ({detail}) => {
    const {name, picture} = detail;
    return (
        <div className='bike-info'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <h1><MdDelete /></h1>
        </div>
    );
};

export default BikeInfo;