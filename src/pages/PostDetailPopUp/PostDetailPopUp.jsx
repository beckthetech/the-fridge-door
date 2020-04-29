import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { Link } from 'react-router-dom';

function PostDetailPopUp(props) {
  const post = props.location.state.post;
  return (
    <>
      <h1>Item Details</h1>
      <PostCard
        key={post._id}
        post={post}
        user={props.user}
        handleDeletePost={props.handleDeletePost}
      />
      <Link to='/index'>Close</Link>
    </>
  );
}

export default PostDetailPopUp;