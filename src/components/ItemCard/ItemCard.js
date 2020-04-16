import React from 'react';

function ItemCard({ item }) {
    const categories = item.categories.map((category, idx) =>
    <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
    return (
        <>
            <div>name: {item.name}, description: {item.description}, categories: {categories}</div>
        </>
    );
}

export default ItemCard;