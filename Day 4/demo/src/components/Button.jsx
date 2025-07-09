import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: '5px', padding: '8px 12px' }}>
      {label}
    </button>
  );
};

export default Button;