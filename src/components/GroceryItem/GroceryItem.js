import React from 'react';

function GroceryItem(item) {
    return (
        <>
            <div>{item.item.name} - {item.item.quantity}</div>
        </>
    );
}

export default GroceryItem;