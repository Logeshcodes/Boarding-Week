import React, { Suspense } from 'react'

const LazyComponent = React.lazy( ()=> import('./Home.jsx'))

const LazyLoading = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <LazyComponent/>
    </Suspense>
  )
}

export default LazyLoading