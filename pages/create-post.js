import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faSmile, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleCreatePost = (e) => {
    e.preventDefault();
    // Handle post creation logic here, including image and video upload
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-md mx-auto">
      <form onSubmit={handleCreatePost}>
        <div className="flex items-center space-x-3 mb-4">
          <Image src="/images/pic1.jpg" alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full" />
          <input
            type="text"
            className="flex-grow bg-gray-100 p-2 rounded-full border border-gray-300 focus:outline-none"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex space-x-4">
            <label htmlFor="image" className="flex items-center space-x-2 cursor-pointer">
              <FontAwesomeIcon icon={faImage} className="text-blue-500" />
              <span className="text-sm">Photo</span>
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <label htmlFor="video" className="flex items-center space-x-2 cursor-pointer">
              <FontAwesomeIcon icon={faVideo} className="text-blue-500" />
              <span className="text-sm">Video</span>
              <input
                type="file"
                id="video"
                className="hidden"
                onChange={handleVideoChange}
              />
            </label>
            <button type="button" className="flex items-center space-x-2 cursor-pointer">
              <FontAwesomeIcon icon={faSmile} className="text-yellow-500" />
              <span className="text-sm">Feeling/Activity</span>
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
