import Layout from '../Components/Layout';
import UserProfile from '../Components/UserProfile';

const user = {
  name: 'John Doe',
  profilePicture: '/images/pic1.jpg',
  bio: 'Just a regular person sharing my thoughts.',
  posts: [
    { id: 1, content: 'Had a great day!', timestamp: '2 hours ago' },
    { id: 2, content: 'Loving the new features on SocialNexus!', timestamp: '1 day ago' },
  ],
};

const ProfilePage = () => (
  <Layout>
    <div className="max-w-4xl mx-auto px-4 py-10">
      <UserProfile user={user} />
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Activity Feed</h3>
        <ul>
          {user.posts.map(post => (
            <li key={post.id} className="border-b pb-4 mb-4">
              <p>{post.content}</p>
              <span className="text-gray-500 text-sm">{post.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Follow
        </button>
      </div>
    </div>
  </Layout>
);

export default ProfilePage;
