import React from 'react';

interface TotalPriceProps {
    price: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ price }) => {
    return (
        <div>
            <h3>Price: {price} сом</h3>
        </div>
    );
};

export default TotalPrice;
