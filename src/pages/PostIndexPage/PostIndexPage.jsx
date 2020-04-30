import React from 'react';
import IndexPageItem from '../../components/IndexPageItem/IndexPageItem';

import './PostIndexPage.css'

function PostIndexPage(props) {
    return (
        <div className='magnet-index-page'>
            <h1 className="fridge-title">{props.pagename}</h1>
            <div className="index-copy">
                <p>
                    This is a great platform to get creative and share ideas on lesson plans. Feel free to save any posts to your board and create your personal magnets to share!
            </p>
            </div>
            <br />
            <br />
            <br />
            <div className='magnet-page-grid'>
                {props.posts.map(post =>
                    <IndexPageItem
                        handleAddSaved={props.handleAddSaved}
                        post={post}
                        key={post._id}
                        handleDeletePost={props.handleDeletePost}
                        user={props.user}
                    />
                )}
            </div>
        </div>
    );
}

export default PostIndexPage;