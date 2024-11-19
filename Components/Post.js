const Post = ({ post }) => (
  <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-2xl font-bold mb-2 text-primary">{post.title}</h3>
    <p className="text-gray-700">{post.content}</p>
  </div>
);

export default Post;
