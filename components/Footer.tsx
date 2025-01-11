import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'


const Footer = ( ) => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        <div className='w-full absolute left-0 -bottom-5 min-h-2'>
            <img
            src="https://rajasreesingamshetty5geetha.github.io/Assests-web/footer-grid.svg"
            alt="grid"
            className='w-full h-full opacity-50 md:opacity-80 '/>
        </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
           Contact  
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Thank you for visiting My <span className='text-purple'>Portfolio</span></p>
        <a href="mailto:rajasreesingamshetty5@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
            />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <h2 className='md:text-base text-sm md:font-normal font-light'>Made with <span className='text-red-500 text-xl'>❤︎</span> by <span className='text-purple relative inline-block'>
            Rajasree Singamsetty
            <div className='absolute -bottom-3 left-3 w-[100%] -ml-[10%]'>
              <div className='h-2 bg-gradient-to-r from-[#fe019a] to-[#3e51c9] transform [clip-path:polygon(0_0,100%_0,80%_50%,10%_50%)]'></div>
            </div>
          </span>
        </h2>
        <div className='flex items-center md:gap-3 gap-6 mt-6'>
            {socialMedia.map((profile) =>(
                <div key = {profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border border-black-300'>
                   <a href={profile.link}>
                        <img
                            src={profile.img} 
                            
                            alt = "icons"
                            width = {20} height={20}
                        />
                   </a>

                </div>
            ))}
        </div>
      </div>
      <meta name="google-site-verification" content="eAGH2tkywnOKd5VNfrNANipC5RpxORlCxtOdZhfwS2A" />
    </footer>
  )
}

export default Footer
