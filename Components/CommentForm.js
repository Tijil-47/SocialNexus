import { useState } from 'react';

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
  };

  return (
    <form onSubmit={handleCommentSubmit} className="mt-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Write your comment here"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
