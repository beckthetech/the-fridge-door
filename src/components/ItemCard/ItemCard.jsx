import React from 'react';
import { Link } from 'react-router-dom';
import '../../utils/userService';

import './ItemCard.css'

function ItemCard({ item, handleDeleteItem, user }) {
    user = user === null ? user = NaN : user;
    const categories = item.categories.map((category, idx) =>
        <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
    return (
        <>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{item.name}</h3>
                </div>
                <div className="panel-body">
                    <dl>
                        <dt>Description: </dt> <dd>{item.description}</dd>
                    </dl>
                    <dl>
                        <dt>Price: </dt> <dd>{item.price}</dd>
                    </dl>
                    <dl>
                        <dt>Zipcode: </dt> <dd>{item.zipcode}</dd>
                    </dl>
                </div>
                <div className="panel-footer">
                    {user._id === item.user &&
                        <Link to={{
                            pathname: '/edit',
                            state: { item }
                        }}>Edit</Link>
                    } {user._id === item.user &&
                        <button className="btn-delete"
                            onClick={() => handleDeleteItem(item._id)}
                        >
                            Delete
            </button>
                    }
                </div>
            </div>
        </>
    );
}

export default ItemCard;