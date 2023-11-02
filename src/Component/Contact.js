import React from 'react'

function Contact() {
    return (
        <section id='contact' className='px-12 lg:px-44 sm:px-23 py-9 pb-24'>
            <div className='my-5 mb-14'>
                <h1 className='text-xl font-bold my-2 text-blue-600'>CONTACT</h1>
                <h1 className='text-2xl font-semibold'>Let's work together! <span className='text-3xl'>🤝</span></h1>
            </div>
            <div className='flex-col lg:flex-row sm:flex-row flex justify-start items-cente'>
            <div className='flex justify-center items-center lg:mr-10 sm:mr-10 mr-20'>
                <span class="material-symbols-outlined border-2 p-1 px-2 text-3xl rounded-full text-blue-600 shadow-md mr-3">
                    public
                </span>
                <div>
                    <h1 className='font-semibold text-lg'>location</h1>
                    <h1>Aurangabad, MH</h1>
                </div>
            </div>
            <div className='flex justify-start items-center mt-5 ml-2 lg:mt-o sm:mt-0'>
                <a  href='mailto:devsuhas621@gmail.com'><span class="material-symbols-outlined border-2 p-1 px-2 text-3xl rounded-full text-blue-600 shadow-md mr-3">
                 mail
                </span></a>
                <div>
                    <h1 className='font-semibold text-lg'>Mail</h1>
                    <h1><a className='text-zinc-500 font-medium hover:text-blue-600' href="mailto:devsuhas621@gmail.com">devsuhas621@gmail.com</a></h1>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact
