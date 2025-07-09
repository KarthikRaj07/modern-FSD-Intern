import React from 'react'

export const Demo1 = () => {
 
     const b = React.createElement(
  'div',null,
  React.createElement('h1', null, 'Component 1'),
  React.createElement('p', null, 'This is the component 1 created.'),
  React.createElement('img', {
    src: 'https://www.shutterstock.com/image-photo/component-word-made-building-blocks-260nw-1864695046.jpg',
   
  })
);

  return (
    <div className='comp'>
        <h1>hi</h1>
        {b}
     </div>
  )
}



 