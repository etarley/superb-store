import SignIn from '@/components/auth/SignIn';
import Cart from '@/components/cart';
import LogoIcon from '@/components/icons/logo';
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';





const Navbar: React.FC = async () => {
   
  return (
  <nav className='relative  mb-4 border-b-[1px] px-4 shadow-sm sm:px-2 '>
      <div className='flex items-center justify-between sm:container'>
        <div className="">
          <Link href="/" className="flex items-center">
            <LogoIcon/>
            <div className="ml-2 text-sm font-medium uppercase max-sm:hidden lg:block">
              SUPERB-STORE
            </div>
          </Link>
        </div>
          <SearchBar/>
          <div className='flex'>
            <Cart/>
            <SignIn/>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;