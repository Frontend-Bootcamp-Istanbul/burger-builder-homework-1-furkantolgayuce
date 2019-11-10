import React from 'react';

function TotalPrice(props) {

    let price = 0;
            props.selectedIngredients.forEach(element => {
                price+= element.price ;                
            });

    return (
        <div>
            Total Price: {price} ₺      
        </div>
    );
}

export default TotalPrice;