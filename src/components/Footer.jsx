import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer" className="flex justify-center">
      <div className="md:w-3/5 w-4/5 pt-20 pb-6 flex justify-between text-white-100 md:flex-row flex-col">
        <p className='md:text-left text-center md:mb-0 mb-4'>© copyright 2024. All Rights Reserved to <a href='https://linktr.ee/mahfoudbem' className='text-white-300 hover:text-blue-500 transition ease-in-out duration-500'>@mahfoudbem</a>.</p>
        <div class="flex gap-8 md:justify-normal justify-center">
            <a className='text-2xl hover:text-blue-500 transition ease-in-out duration-500' href="https://github.com/mahfoud-mehalli"><FaGithub /></a>
            <a className='text-2xl hover:text-blue-500 transition ease-in-out duration-500' href="https://www.linkedin.com/in/mahfoud-mehalli-955218267/"><FaLinkedin /></a>
            <a className='text-2xl hover:text-blue-500 transition ease-in-out duration-500' href="https://www.facebook.com/profile.php?id=100086681832817"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer