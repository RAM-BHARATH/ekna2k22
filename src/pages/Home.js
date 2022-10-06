import React, { useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Loading from '../components/Loading'

function Home({ loading }) {
  // useEffect(() => {
  //   if(loading){
  //     return <Loading />
  //   }
  // }, [loading])
  useEffect(()=>{
    document.title = 'Home | Ekna2k22'
  }, []);
  return (
    <div className="w-screen bg-cyan-900 body">
        <Header />
        <Main />
    </div>
  )
}

export default Home