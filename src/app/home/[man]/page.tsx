import React from 'react';

const page =async ({params}:{params:Promise<{man:string}>}) => {
  
  const{man}=await params
  return (
    <div>
      <h1>{man }</h1>
    </div>
  );
};

export default page;