import React from 'react';
import { Link } from 'react-router-dom';

import './IndexPageItem.css'

function IndexPageItem({ post }) {
    return (
        <div className="IndexPageItem">
            <div>
                <h5>{post.content}</h5>
                <h5>${post.tag}</h5>
            </div>
            <div className="IndexPageItem-detail-link">
                <Link
                    to={{
                        pathname: '/detail',
                        state: { post }
                    }}
                >
                    DETAILS
                </Link>
            </div>
        </div>
    );
}

export default IndexPageItem;