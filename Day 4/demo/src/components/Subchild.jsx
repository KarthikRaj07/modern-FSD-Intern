import React from 'react';
import GrandChild from './Grandchild';

const SubChild = (props) => {
  return (
    <div>
      <h1>SubChild Component</h1>
      <p>Received from Parent: {props.data}</p>
      <GrandChild />
    </div>
  );
};

export default SubChild;