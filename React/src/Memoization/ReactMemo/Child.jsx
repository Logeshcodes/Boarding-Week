import React, { memo } from 'react';

const Child = memo(({ count }) => {
  console.log("Child rendered");
  return <h2>Child Count: {count}</h2>;
});

export default Child;
