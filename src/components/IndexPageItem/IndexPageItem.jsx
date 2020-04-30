import React from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';

import './IndexPageItem.css'

function IndexPageItem(props) {
    const post = props.post;
    return (
        <div className="IndexPageItem">
            <div className="index-page-card">
                <div className='index-card-row-1'>
                    <div className="card-name">
                        <span>{post.name}</span>
                    </div>
                </div>
                <div className="card-content">
                    <span>{post.content}</span>
                    <Popup props={props} />
                </div>
            </div>
        </div>
    );
}

export default IndexPageItem;