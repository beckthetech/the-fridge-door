import React from 'react';
import { Link } from 'react-router-dom';

import './GearListItem.css'

function GearListItem({ item }) {
    return (
        <div className="GearListItem">
            <div>
                <h3>{item.name}</h3>
            </div>
            <div>
                <Link
                    to={{
                        pathname: '/details',
                        state: { item }
                    }}
                >
                    DETAILS
                </Link>
            </div>
        </div>
    );
}

export default GearListItem;