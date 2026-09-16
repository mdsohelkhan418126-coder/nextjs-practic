import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div>
      <h1 className=' text-blue-700 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur distinctio veniam sequi, velit reiciendis dicta voluptates minus rerum ipsum, explicabo magni, odit aperiam consequatur eum corporis blanditiis ratione temporibus.</h1>
    <Image src='/next.jpg' alt='profile'width={500} height={100}></Image>
    </div>
  );
};

export default page;