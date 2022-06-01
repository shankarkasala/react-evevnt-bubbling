import React from 'react';
import './style.css';

export default function App() {
  return (
    <div onClick={() => console.log('grandparent')}>
      <div onClick={() => console.log('parent')}>
        <div onClick={() => console.log('child')}></div>
      </div>
    </div>
  );
}
