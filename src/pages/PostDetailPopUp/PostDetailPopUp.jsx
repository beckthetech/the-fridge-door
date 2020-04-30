import React from 'react';
import PostCard from '../../components/PostCard/PostCard';

function PostDetailPopUp({ props }) {
  return (
    <>
      <h1>Magnet Details</h1>
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