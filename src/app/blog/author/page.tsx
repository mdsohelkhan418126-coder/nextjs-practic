import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'My Blog',
  description: '...',
};
const page = () => {
  return (
    <div>
      <h1>blog</h1>
    </div>
  );
};

export default page;