import React from 'react';
import Button from './Button';

const ButtonCont = ({ handleDecrement, handleIncrement }) => {
  return (
    <div>
      <Button label="Decrement" onClick={handleDecrement} />
      <Button label="Increment" onClick={handleIncrement} />
    </div>
  );
};

export default ButtonCont;