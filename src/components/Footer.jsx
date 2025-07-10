
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        // <footer className='max-w-full px-4 bg-gray-800 md:px-16' >
        <footer className=' w-[1200px] bg-red-700 border: underline'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                <div>
                    <h2 className='mb-4 text-lg font-extrabold '> About Us</h2>
                    <p className='text-gray-400'>we are providing best services </p>
                </div>
                <div>
                    <h2 className='mb-4 text-lg font-extrabold'>Quik Links</h2>
                    <ul >
                        <li> <a href='' className='hover:underline text-shadow-gray-300'>Home</a></li>
                        <li> <a href='' className='hover:underline text-shadow-gray-300'>Services</a></li>
                        <li> <a href='' className='hover:underline text-shadow-gray-300'>Contact</a></li>
                        <li> <a href='' className='hover:underline text-shadow-gray-300'>About Us</a></li>
                        <li> <a href='' className='hover:underline text-shadow-gray-300'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='mb-4 text-lg font-extrabold'>Follow Us</h2>
                    <ul className='flex space-x-4' >
                        <li> {""} <FaFacebook className='text-blue-600' /> {""} <a href='' className='hover:underline text-shadow-gray-300'>Home</a></li>
                        <li>{""}  <FaTwitter className='text-blue-600' />  {""}<a href='' className='hover:underline text-shadow-gray-300'>Twitter</a></li>
                        <li>{""} <FaLinkedin className='text-blue-600' /> {""}<a href='' className='hover:underline text-shadow-gray-300'>Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className='pt-4 mt-8 border-t border-gray-700'>
                <div className="text-sm text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Youngs. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
