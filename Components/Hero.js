import Link from 'next/link';

const Hero = () => (
  <div className="bg-primary text-white py-20 mt-1">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to SocialNexus</h1>
      <p className="text-xl mb-8">Connect, share, and explore amazing content.</p>
      <Link href="/signup" className="btn-primary font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
        Sign Up
      </Link>
    </div>
  </div>
);

export default Hero;
