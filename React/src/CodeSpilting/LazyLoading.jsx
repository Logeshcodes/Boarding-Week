import React, { Suspense } from 'react'

const Home = React.lazy(()=>import ('./Home.jsx'))

const LazyLoading = () => {
  return (
    <>
        <Suspense fallback={ <div>Loading....</div>}>
            <Home/>
        </Suspense>
    </>
  )
}

export default LazyLoading