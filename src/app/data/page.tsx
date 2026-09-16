import React from 'react';
import Post from '../components/Post';

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <div className='grid grid-cols-3'>
      <h1> post:{posts.length}</h1>
      <div>
        {posts.map((post: { id: number; userId: number; title: string; body: string }) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
