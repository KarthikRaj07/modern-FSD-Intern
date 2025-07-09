import React from 'react';
import SubChild from './Subchild'; 

const Parent = () => {
  const message = "I am a prop coming from Parent";

  return (
    <div>
      <h1>Parent Component</h1>
      <SubChild data={message} />
    </div>
  );
};

export default Parent;