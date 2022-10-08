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
                    <h1 className='text-4xl'>STUDENT AMBASSADOR</h1>
                    <div className='p-3 lg:mx-auto lg:w-2/3 text-justify'>
                    Hello Ambassador,<br />&nbsp;&nbsp;Student Ambassadors act as the pillars of Ekna'22 and work to promote the event in their respective colleges. Student ambassadors are selected to positively represent a college or university as they help prospective students by answering questions and helping students participate in the fest. Those selected to be student ambassadors will build a professional resume, strengthen their leadership skills and improve their communication abilities.
                    </div>
                    <h2 className='text-3xl w-fit mx-auto border-b-black border-2'>Roles &amp; Responsibilities</h2>
                    <div className='p-3 lg:mx-auto lg:w-2/3 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates modi delectus architecto pariatur eum quis quidem! Quae, assumenda dignissimos eos rem officiis a ullam doloremque voluptate molestias, dolores aliquid.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, velit. Facere, sed, sunt eveniet error dignissimos atque animi, possimus alias ad laudantium quis! Similique libero maxime earum ipsum quidem quod.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto distinctio voluptatum dolor et labore voluptatem facere, placeat odit necessitatibus veritatis quibusdam dolorem blanditiis dignissimos magni culpa cumque? Magni, dignissimos quaerat!
                    </div>
                    <h2 className='text-3xl w-fit mx-auto border-b-black border-2'>Benefits of becoming a Student Ambassador</h2>
                    <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto">
                        <thead>
                            <tr>
                                <th className='p-3 border-black border-2'>Silver</th>
                                <th className='p-3 border-black border-2'>Gold</th>
                                <th className='p-3 border-black border-2'>Diamond</th>
                            </tr>
                        </thead>
                        <tbody className='border-spacing-2 border-black border-2'>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3 border-black border-2'>Certificates</td>
                                <td className='p-3 border-black border-2'>Certificates</td>
                                <td className='p-3 border-black border-2'>Certificates</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3 border-black border-2'>Free Food &amp; Registration</td>
                                <td className='p-3 border-black border-2'>Free Food &amp; Registration</td>
                                <td className='p-3 border-black border-2'>Free Food &amp; Registration</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3 border-black border-2'>-</td>
                                <td className='p-3 border-black border-2'>T-Shirts</td>
                                <td className='p-3 border-black border-2'>T-Shirts</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3 border-black border-2'>-</td>
                                <td className='p-3 border-black border-2'>Can participate in more than 2 events</td>
                                <td className='p-3 border-black border-2'>Can participate in any event</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3 border-black border-2'>-</td>
                                <td className='p-3 border-black border-2'>-</td>
                                <td className='p-3 border-black border-2'>Gift Vouchers</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto">
                        <thead>
                            <tr>
                                <th className='p-3 border-black border-2'>Zones</th>
                                <th className='p-3 border-black border-2'>Silver</th>
                                <th className='p-3 border-black border-2'>Gold</th>
                                <th className='p-3 border-black border-2'>Diamond</th>
                            </tr>
                        </thead>
                        <tbody className='border-spacing-2 border-black border-2'>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3 border-black border-2'>Coimbatore</td>
                                <td className='p-3 border-black border-2'>15-25</td>
                                <td className='p-3 border-black border-2'>25-40</td>
                                <td className='p-3 border-black border-2'>40-60</td>
                            </tr>
                            <tr className='border-spacing-2 border-black border-2'>
                                <td className='p-3 border-black border-2'>Other Districts</td>
                                <td className='p-3 border-black border-2'>10-20</td>
                                <td className='p-3 border-black border-2'>20-30</td>
                                <td className='p-3 border-black border-2'>30-50</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="https://forms.gle/GMVkSy3wo4SZgygg7" target='_blank' rel="noreferrer" className='px-3 py-2 bg-slate-500 rounded-md text-white hover:bg-black'>Become a Student Ambassador</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentAmbassador