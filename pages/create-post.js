import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const CreatePost = () => {
  const [title, setTitle] = useState('');
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Post</h2>
        <form onSubmit={handleCreatePost}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the post title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="content">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Content
            </label>
            <textarea
              id="content"
              className="w-full p-2 border border-gray-300 rounded"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the post content"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="image">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Image
            </label>
            <input
              type="file"
              id="image"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="video">
              <FontAwesomeIcon icon={faVideo} className="mr-2" />
              Video
            </label>
            <input
              type="file"
              id="video"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleVideoChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
