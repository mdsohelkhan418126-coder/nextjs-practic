'use client';

import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);
  console.log('server side rendering');

  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handleCounter} className=" bg-blue-700 p-5">
        count
      </button>
    </div>
  );
}
