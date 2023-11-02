import React from 'react'
import Shopee from '../project/shopee.png'

function Project() {
  return (
    <section id='project' className='px-4 lg:px-44 py-28'>
      <div className="mx-2">
        <h1 className='text-xl font-bold my-2 text-blue-600'>PORTFOLIO</h1>
        <h1 className='text-xl font-bold'> "My project showcases impeccable structure and maintenance 🧩"</h1>
      </div>
      <div className="project-box w-full border shadow-sm shadow-gray-700 rounded-2xl bg-white flex-col lg:flex-row flex justify-evenly items-center mt-10">
        <div className="pro-img w-80 lg:w-3/6 mx-2 sm:w-4/5  overflow-hidden m-5 rounded-2xl shadow-xl"><img src={Shopee} alt="" /></div>
        <div className='pro-para'>
          <h1 className='font-bold text-xl my-2'>Shopee <span className="text-gray-600 text-sm font-extrabold">(Oct-2023)</span></h1>
          <p className=' border-black font-semibold text-gray-500'>Shopee is a web-based fashion store application built with React.js, offering a wide range of fashion products for your shopping pleasure. This project showcases a fully functional e-commerce platform with </p>
          <div className='border p-1 px-3 rounded shadow-md my-4'>
            <h1 className='font-semibold'>React</h1>
          </div>
          <div className="button flex justify-center items-center ">
            <a target='new' href="https://github.com/devsuhas0621/React.js-E-Commerce-Shopee" className='flex justify-center items-center text-lg font-normal text  px-2 py-1 shadow-lg  mx-2'>Code <i class="fa-brands fa-github mx-1"></i></a>
            <a target='new' href="https://shopee-flax.vercel.app/" className='flex justify-center items-center text-lg font-normal text  px-2 py-1 shadow-lg  mx-2'>Demo <span className="material-symbols-outlined mx-1">
              share_windows
            </span></a>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center my-10 bg-blue-200 rounded'>
        <h1 className='text-xl text-zinc-700 font-medium'>"🚀 Stay tuned for our upcoming projects! 🛠️"</h1>
      </div>
    </section>
  )
}

export default Project
