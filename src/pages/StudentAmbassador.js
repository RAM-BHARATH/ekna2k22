import React, { useEffect } from 'react'
import Header from '../components/Header'

function StudentAmbassador() {
    useEffect(()=>{
        document.title = 'Student Ambassador | Ekna2k22'
     }, []);
  return (
    <div>
        <Header bg='bg-cyan-900'/>
        <div>
            <div className='w-screen min-h-screen pattern-bg-2 p-5 text-center'>
                <div className='my-24'>
                    <h1 className='text-5xl cookie'>Student Ambassador</h1>
                    <div className='p-3 lg:mx-auto lg:w-2/3 text-justify monts'>
                    <span className='text-3xl cookie'>Hello Ambassador,</span><br />&nbsp;&nbsp;Student Ambassadors act as the pillars of Ekna'22 and work to promote the event in their respective colleges. Student ambassadors are selected to positively represent a college or university as they help prospective students by answering questions and helping students participate in the fest. Those selected to be student ambassadors will build a professional resume, strengthen their leadership skills and improve their communication abilities.
                    </div>
                    <h2 className='text-3xl w-fit mx-auto border-b-black border-2 cookie'>Roles &amp; Responsibilities</h2>
                    <div className='p-3 lg:mx-auto lg:w-2/3 text-justify monts'>
                        <ul className='list-disc text-justify'>
                            <li className='font-bold'>To promote about the Events in their college</li>
                            <li className='font-bold'>Should post stories in social media and tag the #Ekna2k22 Handle as means of promoting the event.</li>
                            <li className='font-bold'>Should update their status and stories with Ekna content in Social Media Handles everyday.</li>
                            <li className='font-bold'>Should encourage your friends to register the event by means of your referral code.</li>
                        </ul>
                    </div>
                    <h2 className='text-3xl w-fit mx-auto border-b-black border-2 cookie'>Why to become a Student Ambassador?</h2>
                    <div className='p-3 lg:mx-auto lg:w-2/3 text-justify monts'>
                        <ul className='list-disc text-justify'>
                            <li className='font-bold'>Enhance communication skills.</li>
                            <li className='font-bold'>Polish your professional skills for future career opportunities.</li>
                            <li className='font-bold'>Gain valuable volunteer experience</li>
                            <li className='font-bold'>Develop strong leadership skills.</li>
                            <li className='font-bold'>Increase self-esteem and self-confidence.</li>
                            <li className='font-bold'>Opportunity to represent your institution</li>
                            <li className='font-bold'>To build your resume</li>                            
                        </ul>
                    </div>
                    <h2 className='text-3xl w-fit mx-auto border-b-black border-2 cookie'>Benefits of becoming a Student Ambassador</h2>
                    <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto">
                        <thead className='cookie text-xl'>
                            <tr>
                                <th className='p-2 border-black border-2'>Silver</th>
                                <th className='p-2 border-black border-2'>Gold</th>
                                <th className='p-2 border-black border-2'>Diamond</th>
                            </tr>
                        </thead>
                        <tbody className='border-spacing-2 border-black border-2 monts text-sm'>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-2 border-black border-2'>Certificates</td>
                                <td className='p-2 border-black border-2'>Certificates</td>
                                <td className='p-2 border-black border-2'>Certificates</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-2 border-black border-2'>Free Food &amp; Registration</td>
                                <td className='p-2 border-black border-2'>Free Food &amp; Registration</td>
                                <td className='p-2 border-black border-2'>Free Food &amp; Registration</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-2 border-black border-2'>-</td>
                                <td className='p-2 border-black border-2'>T-Shirts</td>
                                <td className='p-2 border-black border-2'>T-Shirts</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-2 border-black border-2'>-</td>
                                <td className='p-2 border-black border-2'>Can participate in more than 2 events</td>
                                <td className='p-2 border-black border-2'>Can participate in any event</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-2 border-black border-2'>-</td>
                                <td className='p-2 border-black border-2'>-</td>
                                <td className='p-2 border-black border-2'>Gift Vouchers</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto text-base cookie text-lg">
                        <thead>
                            <tr>
                                <th className='p-2 border-black border-2'>Zones</th>
                                <th className='p-2 border-black border-2'>Silver</th>
                                <th className='p-2 border-black border-2'>Gold</th>
                                <th className='p-2 border-black border-2'>Diamond</th>
                            </tr>
                        </thead>
                        <tbody className='border-spacing-2 border-black border-2 monts'>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-2 border-black border-2'>Coimbatore</td>
                                <td className='p-2 border-black border-2'>15-25</td>
                                <td className='p-2 border-black border-2'>25-40</td>
                                <td className='p-2 border-black border-2'>40-60</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-2 border-black border-2'>Other Districts</td>
                                <td className='p-2 border-black border-2'>10-20</td>
                                <td className='p-2 border-black border-2'>20-30</td>
                                <td className='p-2 border-black border-2'>30-50</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='font-bold text-red-600 mb-3'>** The above counts in the table represents the number of referral participants</p>
                    <section className='monts'>
                        <h2 className='text-left text-3xl underline cookie'>Note:</h2>
                        <ul className='text-justify'>
                            <li className='my-3'>
                                Student Participants should enter your referral code ( Ex. ASHISH20) on the registration form and complete the registration.Then only,  Your credit count will be raised. So, Ensure till end of the registration of your referral participants.
                            </li>
                            <li className='font-bold my-5 text-red-600'>
                                ** Your referral credit count will be intimated through the mail on daily basis 
                            </li>
                        </ul>
                    </section>
                    <a href="https://forms.gle/GMVkSy3wo4SZgygg7" target='_blank' rel="noreferrer" className='px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-black'>Apply</a>
                    <div className='my-5'>
                        <h3 className='cookie text-3xl text-left'>For any queries,</h3>
                        <p className='monts text-left'>Sakthivel GR - 97897 35839</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentAmbassador