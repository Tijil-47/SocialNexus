import Image from 'next/image';
import { useState } from 'react';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here, you would save the updated profile data to your backend
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white rounded-lg shadow-md">
      <Image src={editedProfile.profilePicture} alt="Profile" width={96} height={96} className="w-24 h-24 rounded-full" />
      <div className="md:ml-4">
        {isEditing ? (
          <>
            <input 
              type="text" 
              name="name" 
              value={editedProfile.name} 
              onChange={handleChange} 
              className="text-2xl font-bold border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-2" 
            />
            <textarea 
              name="bio" 
              value={editedProfile.bio} 
              onChange={handleChange} 
              className="text-gray-600 border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-2" 
            />
            <button 
              onClick={handleSaveClick} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold">{editedProfile.name}</h2>
            <p className="text-gray-600">{editedProfile.bio}</p>
            <button 
              onClick={handleEditClick} 
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2">
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
