import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-3'>
        <Link href="/" className='flex items-center gap-1'>
            <Image src="/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />

            <p className='hidden md:block text-md font-medium tracking-wider '>
            Loomora
        </p>
        </Link>
         {/* right  */}
        <div className='flex gap-6 items-center'>
            <SearchBar/>
            <Link href="/" > <Home className='w-4 h-4 text-gray-600'/> </Link>
            <Bell className='w-4 h-4 text-gray-600 cursor-pointer'/> 
            <ShoppingCart className='w-4 h-4 text-gray-600 cursor-pointer'/>
            <Link href="/signin" className=''>Sigin</Link>
        </div>
        
    </nav>
  )
}

export default Navbar