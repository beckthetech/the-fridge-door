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
                    <h2 className="panel-title">{item.name}</h2>
                </div>
                <div className="panel-body">
                    {item.imageLink && <span className="hero-image"><img src={`${item.imageLink}`} /></span>}
                    <dl>
                        <dt>Price: </dt> <dd>${item.price}</dd>
                    </dl>
                    <dl>
                        <dt>City, State: </dt> <dd>{item.city}</dd>
                    </dl>
                    <dl>
                        <dt>Categories: </dt> <dd>{categories}</dd>
                    </dl>
                    <dl>
                        <dt>Description: </dt> <dd>{item.description}</dd>
                    </dl>
                    {user._id &&
                        <dl>
                            <dt>Contact: </dt> <dd>{item.owner} at {item.contactInfo}</dd>
                        </dl>
                    }
                </div>
                <div className="panel-footer">
                    {user._id === item.user &&
                        <Link to={{
                            pathname: '/edit',
                            state: { item },
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