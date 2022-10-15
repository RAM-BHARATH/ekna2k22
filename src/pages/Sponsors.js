import React, { useEffect } from 'react'
import Header from '../components/Header'

function Sponsors({ sponsors, mediaPartners }) {

    useEffect(()=>{
        document.title = 'Sponsorship | Ekna2k22'
    }, []);

  return (
    <div className='w-screen pattern-bg-2 min-h-screen text-center'>
        <Header bg='bg-cyan-900'/>
        <div className='p-5'>
            <div className='my-24'>
                <h1 className='text-6xl cookie text-sky-800'>Sponsors</h1>
                <div className='lg:w-2/3 text-justify mx-auto my-10 monts justify-center flex flex-col'>
                    <p>
                        Sponsors are our foremost supporters for  happening various events in this symposium.
                        To visit our sponsorship brochure,
                        Click the button below 👇...
                    </p>
                    <button className='px-4 py-3 rounded-md bg-orange-100 text-black my-3 hover:bg-slate-100 w-3/5 mx-auto gemunu'>
                    <a 
                        href="https://drive.google.com/file/d/10P9QMQ-56qK4JwknFQtk0NSdMcCjSXEu/view?usp=drivesdk" 
                        target='_blank' rel='noreferrer'>
                            Sponsors Brochure
                    </a>
                </button>
                </div>
                <h2 className='text-5xl border-b-black border-b-2 w-fit mx-auto cookie'>Our Sponsors</h2>
                {/* <div className="border border-brand-primary border-l-0 border-r-0 container lg:p-20 mt-6 overflow-hidden py-24 relative lg:mx-auto">
                    <div className="flex animate-infinite absolute left-0 lg:w-1/2 lg:mx-auto">
                        <div className="flex w-1/2 justify-between items-center logo lg:mx-auto">
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72'/></a>
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72' /></a>
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                        </div>
                        <div className="flex w-1/2 justify-between items-center logo">
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72' /></a>
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[0].sponsorLogo} alt="" className='h-24 w-72' /></a>
                            <a href="/" className='mx-2 h-48 w-72'><img src={sponsors[1].sponsorLogo} alt="" className='h-24 w-72' /></a>
                        </div>
                    </div>
                </div> */}
                <div className='flex flex-wrap py-10 w-2/3 lg:w-4/5 mx-auto justify-center'>
                    {
                        sponsors.map(sponsor => (
                            <img className="m-4 lg:w-80"  src={`${sponsor.sponsorLogo}`} alt={`${sponsor.sponsorName}`} key={sponsor.sponsor}/>
                        ))
                    }
                </div>
                <h2 className='text-5xl border-b-black border-b-2 w-fit mx-auto cookie'>Media Partners</h2>
                <div className='flex flex-wrap py-10 w-2/3 lg:w-4/5 mx-auto justify-center'>
                    {
                        mediaPartners.map(mediaPartner => (
                            <img className="m-4 lg:w-80"  src={`${mediaPartner.mediaPartnerLogo}`} alt={`${mediaPartner.mediaPartnerName}`} key={mediaPartner.mediaPartner}/>
                        ))
                    }
                </div>
                <h2 className='text-5xl border-b-black border-b-2 w-fit mx-auto cookie'>How to become a Sponsor?</h2>
                <div className='lg:w-2/3 text-justify mx-auto my-10 monts'>
                    To join as a one of sponsor to our symposium events,
                </div>
                <button className='px-4 py-3 rounded-md bg-blue-600 text-white mt-0 mb-5 hover:bg-slate-100 gemunu'>
                    <a 
                        href="https://forms.gle/Z8wgYR2LeGfy9mpf7" 
                        target='_blank' rel='noreferrer'>
                            Register as Sponsor
                    </a>
                </button>
                <h2 className='text-3xl w-fit my-5 monts text-left cookie lg:text-center lg:mx-auto'>For any queries,</h2>
                <ul className='monts text-left lg:text-center'>
                    <li>Yazhini S - 75300 74020</li>
                    <li>Sakthivel GR - 9789735839</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sponsors