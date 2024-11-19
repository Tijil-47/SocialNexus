import Image from 'next/image';
const UserProfile = ({ user }) => (
    <div className="flex flex-col md:flex-row items-center p-4">
      <Image src="/images/pic1.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 rounded-full" />
      <div className="md:ml-4">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.bio}</p>
      </div>
    </div>
  );
  
  export default UserProfile;
  
  