import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ item, handleDeleteItem }) {
    const categories = item.categories.map((category, idx) =>
        <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
    return (
        <>
            <div>name: {item.name}, description: {item.description}, categories: {categories}</div>
            {this.state.user &&
                <Link to={{
                    pathname: '/edit',
                    state: { item }
                }}
                >Edit</Link>}
            <button
                onClick={() => handleDeleteItem(item._id)}
            >
                DELETE
        </button>
        </>
    );
}

export default ItemCard;