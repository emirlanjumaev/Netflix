import React from 'react';
import Link from 'next/link';
import { BsSearch, BsBell } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    function scrollHandler() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <header className={isScrolled ? 'bg-[#141414]' : ''}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <div>
          <img src="https://rb.gy/ulxxee" className="cursor-pointer" width="100px" height="100px" alt="logo" />
        </div>
        <ul className="hidden space-x-4 md:flex">
          <li className="header_link">Home</li>
          <li className="header_link">TV Shows</li>
          <li className="header_link">Movies</li>
          <li className="header_link">New Popular</li>
          <li className="header_link">My List</li>
        </ul>
      </div>
      <div className="flex space-x-4 items-center text-sm font-light">
        <BsSearch className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">kids</p>
        <BsBell className="w-6 h-6" />
        <Link href="/account">
          <MdAccountCircle className="w-8 h-8" />
        </Link>
      </div>
    </header>
  );
}
