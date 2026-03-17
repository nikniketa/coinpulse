import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='border border-b-2'>
        <div className='flex justify-between mx-7 my-2.5'>
            <Link href="/">
            <Image src="logo.svg" alt='CoinPulse logo' width={132} height={40} />
            </Link>
            <nav className='flex space-x-5'>
              <Link href="/">Home</Link>
              <p>Search Modal</p>
              <Link href="/coins">All Coins</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header