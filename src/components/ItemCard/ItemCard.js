import React from 'react';

function ItemCard({ item }) {
    return (
        <>
            <div>name: {item.name}, description: {item.description}, categories: {item.categories}</div>
        </>
    );
}

export default ItemCard;