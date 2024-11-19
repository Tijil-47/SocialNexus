/// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header className="bg-primary text-white py-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">SocialNexus</h1>
      <nav className="flex space-x-4">
        <Link href="/">
          <span className="text-white hover:underline mx-2 cursor-pointer">Home</span>
        </Link>
        <Link href="/profile">
          <span className="text-white hover:underline mx-2 cursor-pointer">Profile</span>
        </Link>
        <Link href="/login">
          <span className="text-white hover:underline mx-2 cursor-pointer">Login</span>
        </Link>
        <Link href="/signup">
          <span className="text-white hover:underline mx-2 cursor-pointer">Sign Up</span>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;

