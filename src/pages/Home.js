import React, { useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Loading from '../components/Loading'
import Footer from '../components/Footer';

function Home({ loading, sponsors, mediaPartners }) {
  // useEffect(() => {
  //   if(loading){
  //     return <Loading />
  //   }
  // }, [loading])
  useEffect(()=>{
    document.title = 'Home | Ekna2k22'
  }, []);
  return (
    <div className="w-screen bg-cyan-900 body scroll-smooth transition-all">
        <Header />
        <Main sponsors={sponsors} mediaPartners={mediaPartners}/>
        <Footer />
    </div>
  )
}

export default Home