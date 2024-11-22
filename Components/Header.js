import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-primary text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="SocialNexus Logo" width={40} height={40} />
          <h1 className="text-3xl font-bold">SocialNexus</h1>
        </div>
        <form onSubmit={handleSearchSubmit} className="flex mx-4">
          <input
            type="text"
            className="w-50 p-2 border border-gray-300 rounded-l-md focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md">
            Search
          </button>
        </form>
        <nav className="w-full flex justify-between md:w-auto md:flex space-x-4 mt-2 md:mt-0">
          <Link href="/">
            <span className="text-white hover:underline cursor-pointer">Home</span>
          </Link>
          <Link href="/profile">
            <span className="text-white hover:underline cursor-pointer">Profile</span>
          </Link>
          <Link href="/login">
            <span className="text-white hover:underline cursor-pointer">Login</span>
          </Link>
          <Link href="/signup">
            <span className="text-white hover:underline cursor-pointer">Sign Up</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
