import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? '#fff' : '#000',
    padding: '2rem',
    margin: '2rem'
  };

  return (
    <div style={themeStyle}>
      <h1>React.memo Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setDark(prev => !prev)}>Toggle Theme</button>

      <Child count={count} />
    </div>
  );
};

export default Parent;
