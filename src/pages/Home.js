import React, { useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Loading from '../components/Loading'

function Home({ loading }) {
  useEffect(() => {
    if(loading){
      return <Loading />
    }
  }, [loading])
  return (
    <div className="w-screen bg-fuchsia-900 body">
        <Header />
        <Main />
    </div>
  )
}

export default Home