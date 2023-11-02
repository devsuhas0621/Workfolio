import React from 'react'

function Footer() {
  return (
    <div className='bg-zinc-800 border h-24 lg:h-40 flex justify-evenly items-center '>
      <h1 className='text-white text-sm'>copyright &copy; 2023 Suhas.dev</h1>
      <div>
        <a target='new' href="https://github.com/devsuhas0621"><i class="fa-brands fa-github text-white text-2xl mx-2 hover:scale-125"></i></a>
        <a target='new' href="https://www.linkedin.com/in/suhas-sonawane-793a31296/"><i class="fa-brands fa-linkedin text-white text-2xl mx-2 hover:scale-125"></i></a>
        <a target='new' href="https://twitter.com/devsuhas621"><i class="fa-brands fa-square-x-twitter text-white text-2xl mx-2 hover:scale-125"></i></a>
      </div>
    </div>
  )
}

export default Footer
