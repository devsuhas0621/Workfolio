import React from 'react'
import suhas from '../img/suhas.png'

function About() {
    return (
        <section id="about" className='w-full h-full py-28'> 
            <h1 className='text-xl font-bold my-10 text-blue-600 ml-9 lg:ml-48 sm:ml-20'>ABOUT ME</h1>
            <div className='about-sec flex-col-reverse  lg:flex-row  flex justify-evenly items-center'>
                <div className='about-para'>
                    <p className='font-medium'>I'm <span className="font-extrabold">Suhas Sonawane</span>, a 22-year-old graduate from the culturally rich city of Aurangabad, Maharashtra. My passion lies in <span className='font-bold'>Front-End Technology</span>, where I've mastered HTML, CSS, JavaScript, React, and the efficiency of Tailwind CSS. With a strong commitment to clean, high-performance code, I craft web experiences that not only look stunning but also provide exceptional user interactions.</p>
                    <p className='font-medium'>My approach to web development revolves around the fusion of design and code, creating seamless, user-centric websites. Join me on this web development journey, where innovation and creativity converge to shape the digital world. Welcome to my portfolio!</p>
                    <a href="#contact"> <button className='resume flex justify-center  border px-5 py-1 bg-blue-500 font-bold text-white rounded-md mt-8 items-center text-xl'>CONTACT</button></a>
                </div>
                <div className="img overflow-hidden shadow-lg border">
                    <img src={suhas} alt="suhas" />
                </div>
            </div>
        </section>
    )
}

export default About
