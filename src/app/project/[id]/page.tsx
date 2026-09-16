import React from 'react';

const page = ({params}) => {
  const{id}=params
  return (
    <div>
      <h1>project{id }</h1>
    </div>
  );
};

export default page;