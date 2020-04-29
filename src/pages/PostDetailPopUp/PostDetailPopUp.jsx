import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { Link } from 'react-router-dom';

function PostDetailPopUp({ props }) {
  return (
    <>
      <h1>Item Details</h1>
      <PostCard
        key={props.post._id}
        post={props.post}
        user={props.user}
        handleDeletePost={props.handleDeletePost}
      />
    </>
  );
}

export default PostDetailPopUp;