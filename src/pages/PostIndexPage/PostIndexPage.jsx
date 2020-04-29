import React from 'react';
import IndexPageItem from '../../components/IndexPageItem/IndexPageItem';

import './PostIndexPage.css'

function PostIndexPage(props) {
    return (
        <>
            <h1 className="marketplace-title">Class Fridge</h1>
            <br />
            <br />
            <br />
            <div className='GearListPage-grid'>
                {props.posts || props.posts.map(post =>
                    <IndexPageItem post={post} key={post._id} />
                )}
            </div>
        </>
    );
}

export default PostIndexPage;