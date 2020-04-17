import React from 'react';
import { Link } from 'react-router-dom';
import '../../utils/userService';

function ItemCard({ item, handleDeleteItem, user }) {
    user = user === null ? user = NaN : user;
    const categories = item.categories.map((category, idx) =>
        <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
    return (
        <>
            <div>name: {item.name}, description: {item.description}, zipcode: {item.zipcode}, categories: {categories}</div>
            {user._id === item.user &&
                <Link to={{
                    pathname: '/edit',
                    state: { item }
                }}>Edit</Link>
            } {user._id === item.user &&
                <button
                    onClick={() => handleDeleteItem(item._id)}
                >
                    DELETE
            </button>
            }
        </>
    );
}

export default ItemCard;