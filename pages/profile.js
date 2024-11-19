import Layout from '../Components/Layout';
import UserProfile from '../Components/UserProfile';

const user = {
  name: 'John Doe',
  profilePicture: '/images/pic1.jpg',
  bio: 'Just a regular person sharing my thoughts.',
};

const ProfilePage = () => (
  <Layout>
    <UserProfile user={user} />
  </Layout>
);

export default ProfilePage;
