import React from 'react';
import './T-Sirt.css';

const TShirt = ({tshirt}) => {
    const {picture, name, price, gender, _id}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
        </div>
    );
};

export default TShirt;