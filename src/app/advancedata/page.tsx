import Data from '../components/Data';

type User = {
  id: number;
  name: string;
};

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'force-cache',
  });
  const posts: User[] = await res.json();
  return (
    <div className="grid grid-cols-3">
      <h1>{posts.length}</h1>
      {posts.map(post => (
        <Data key={post.id} post={Promise.resolve(post)}></Data>
      ))}
    </div>
  );
};

export default page;
