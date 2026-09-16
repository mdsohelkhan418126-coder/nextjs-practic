import React from 'react';

const Post = ({ post }: { post: { title: string } }) => {
  return (
    <div className=' border'>
      <h2>{post.title }</h2>
    </div>
  );
};

export default Post;