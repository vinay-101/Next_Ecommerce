import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 rounded-md mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link
              href="/"
              className="flex items-center gap-2 justify-center sm:justify-start"
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={36}
                height={36}
                className="w-7 h-7 md:w-9 md:h-9"
              />
              <p className="text-base font-medium tracking-wider text-white">
                Loomora
              </p>
            </Link>

            <div className="mt-4 space-y-1">
              <p className="text-sm text-gray-400">© 2025 Trendlama.</p>
              <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 text-sm text-center items-center sm:text-left sm:items-start">
            <p className="text-amber-50 font-medium">Links</p>
            <Link href="/" className="text-gray-400 hover:text-white">Homepage</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3 text-sm text-center items-center sm:text-left sm:items-start">
            <p className="text-amber-50 font-medium">Product</p>
            <Link href="/" className="text-gray-400 hover:text-white">Homepage</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3 text-sm text-center items-center sm:text-left sm:items-start">
            <p className="text-amber-50 font-medium">Company</p>
            <Link href="/" className="text-gray-400 hover:text-white">Homepage</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="/" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
