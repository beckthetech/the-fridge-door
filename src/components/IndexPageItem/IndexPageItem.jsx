import React from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';

import './IndexPageItem.css'

function IndexPageItem(props) {
    const post = props.post;
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
            <Popup props={props}/>
        </div>
    );
}

export default IndexPageItem;