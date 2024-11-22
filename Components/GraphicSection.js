import Image from 'next/image';

const GraphicSection = () => (
  <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg shadow-md text-center text-white">
    <h2 className="text-4xl font-bold mb-4">Join the SocialNexus Community</h2>
    <p className="text-lg text-white-700 mb-6">Where connections grow stronger, ideas thrive, and creativity blossoms.</p>
    <div className="flex justify-center space-x-4 mb-6">
      <Image src="/images/team.jpg" alt="Community" width={500} height={250} className="rounded-lg" />
      <Image src="/images/pro.jpg" alt="Share" width={500} height={250} className="rounded-lg" />
    </div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-200">
      Get Started
    </button>
  </div>
);

export default GraphicSection;
