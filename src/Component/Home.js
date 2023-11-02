import React from 'react'

function Home() {
    return (
        <div className=''>
            <section id='home' className=' pt-10 lg:pt-20 sm:pt-0'>
                <div className="hero w-full h-screen flex justify-center items-center overflow-hidden">
                    <div>
                        <div className="hidden lg:block sm:block social shadow-lg w-14 px-3 absolute lg:left-0 lg:top-64 sm:top-96 bg-white">
                            <a target='new' href="https://twitter.com/devsuhas621"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" className=' hover:saturate-100 hover:scale-90 my-4  w-' /></a>
                            <a target='new' href="https://www.linkedin.com/in/suhas-sonawane-793a31296/"><img width="50" height="50" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" className=' hover:saturate-100 hover:scale-90 my-4 w- ' /></a>
                            <a target='new' href="https://github.com/devsuhas0621"><img width="45" height="45" src="https://img.icons8.com/fluency/48/000000/github.png" alt="github" className='  hover:saturate-100 hover:scale-90 my-4 w-' /></a>
                            <a target='new' href="mailto:devsuhas621@gmail.com"><img width="50" height="50" src="https://img.icons8.com/emoji/48/e-mail.png" alt="e-mail" className='  hover:saturate-100 hover:scale-90   my-4 w-' /></a>
                        </div>

                    </div>
                    <div className='hero-text flex justify-center items-center flex-col mb-20 sm:ml-10'>
                        <h1 className='text-4xl lg:text-6xl sm:text-6xl font-bold text-neutral-800 align-middle'>Front-End React Developer</h1>
                        <p className=' lg:my-8 my-4 text-center lg:text-lg sm:text-lg text-sm lg:w-3/5 sm:w-3/4 w-80  font-medium opacity-75'>Hey! I'm Suhas Sonawane , A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                        <div className="skills flex justify-center  items-center">
                            <img width="45" height="45" src="https://skillicons.dev/icons?i=html" alt="html-5--v1" />
                            <img width="45" height="45" src="https://skillicons.dev/icons?i=css" alt="css3" />
                            <img width="45" height="45" src="https://skillicons.dev/icons?i=js" alt="javascript--v1" />
                            <img width="45" height="45" src="https://skillicons.dev/icons?i=tailwind" alt="tailwindcss" />
                            <img width="45" height="45" src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap" />
                            <img width="45" height="45" src="https://skillicons.dev/icons?i=scss" alt="external-sass-a-style-sheet-professional-grade-css-extension-language-logo-color-tal-revivo" />
                            <img width="45" height="45" src="https://skillicons.dev/icons?i=react" alt="react-native" />
                        </div>
                        <a target='new' href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:4b677eac-93fc-34a2-861e-4fca299d88db" download>
                            <button className='resume flex justify-center border px-3 py-1 bg-blue-500 font-bold text-white rounded-md mt-8 items-center text-lg hover:scale-110'>
                                RESUME
                                <span className="material-symbols-outlined ml-2 text-2xl hover:scale-125 text-white">expand_circle_down</span>
                            </button>
                        </a>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
