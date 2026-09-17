import Data from '../components/Data';

type User = {
  id: number;
  name: string;
};

const page = async () => {
  const res = await fetch('http://localhost:5000/products');
  const posts: User[] = await res.json();
  return (
    <div>
      <h1>{posts.length}</h1>
      {posts.map(post => (
        <Data key={post.id} post={Promise.resolve(post)}></Data>
      ))}
    </div>
  );
};

export default page;
