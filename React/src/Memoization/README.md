=> These tools — useMemo, useCallback, React.memo, and PureComponent :



[ Helpful for performance optimization and memoization in React. They aim to prevent unnecessary re-renders or recalculation ]

Memoization : 

    =>    Memoization is a technique to cache the results of expensive operations






Feature       | Prevents              | Memoizes      | Used For
useMemo       | recomputation         | values        | Expensive calculations
useCallback   | re-creating functions | functions     | Passing functions to child
React.memo    | re-render | component | Functional components
PureComponent | re-render | component | Class components