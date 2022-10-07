import React, { useEffect } from 'react'
import Header from '../components/Header'

function Sponsors() {

    useEffect(()=>{
        document.title = 'Sponsorship | Ekna2k22'
    }, []);

  const sponsors = [
    {
        sponsorName: 'Sponsor 1',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 2',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 3',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 4',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 6',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 6',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 7',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 8',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 9',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
    {
        sponsorName: 'Sponsor 10',
        sponsorLogo: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
    },
  ]
  return (
    <div className='w-screen pattern-bg-2 min-h-screen text-center'>
        <Header bg='bg-cyan-900'/>
        <div className='p-5'>
            <div className='my-24'>
                <h1 className='text-4xl'>Sponsors</h1>
                <div className='lg:w-2/3 text-justify mx-auto my-10'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tenetur aperiam fugit? Provident quas dolor sit deserunt cupiditate placeat praesentium, similique aspernatur atque numquam, rerum illum consequuntur officiis odit possimus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae officiis cupiditate voluptatibus provident veritatis minima in sed quis asperiores quidem, optio enim temporibus! Adipisci error possimus officiis nisi ullam velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium alias consequatur possimus illum ut perspiciatis tempore est similique ad, nam minima, quibusdam ipsum aspernatur rem modi cupiditate temporibus soluta?
                </div>
                <h2 className='text-3xl border-b-black border-b-2 w-fit mx-auto'>Our Sponsors</h2>
                <div className='lg:w-2/3 text-justify mx-auto my-10 relative flex justify-center overflow-scroll infinite-scroll'>
                    {
                        sponsors.map((sponsor)=> {
                            return(
                                <div className='relative w-full p-10 bg-gray-700 mx-4 my-6'>
                                    {sponsor.sponsorName}
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className='text-3xl border-b-black border-b-2 w-fit mx-auto'>How to become a Sponsor?</h2>
                <div className='lg:w-2/3 text-justify mx-auto my-10'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tenetur aperiam fugit? Provident quas dolor sit deserunt cupiditate placeat praesentium, similique aspernatur atque numquam, rerum illum consequuntur officiis odit possimus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae officiis cupiditate voluptatibus provident veritatis minima in sed quis asperiores quidem, optio enim temporibus! Adipisci error possimus officiis nisi ullam velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium alias consequatur possimus illum ut perspiciatis tempore est similique ad, nam minima, quibusdam ipsum aspernatur rem modi cupiditate temporibus soluta?
                </div>
                <button className='px-4 py-3 rounded-md bg-white text-black my-3 hover:bg-slate-100'>
                    <a 
                        href="https://drive.google.com/file/d/1X62cKUkSuhuMtoX2z9tFktrcX0xaDFvH/view?usp=sharing" 
                        target='_blank' rel='noreferrer'>
                            Sponsors Brochure
                    </a>
                </button>
                <h2 className='text-2xl w-fit mx-auto my-5'>For help, Contact:</h2>
                <div className='lg:w-2/3 text-justify mx-auto my-10'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors