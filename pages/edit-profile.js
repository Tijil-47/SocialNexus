import ProfileForm from '../Components/ProfileForm';
import Layout from '../Components/Layout';

const EditProfilePage = () => {
  const user = {
    name: 'John Doe',
    bio: 'Just a regular person sharing my thoughts.',
  };

  return (
    <Layout>
      <ProfileForm user={user} />
    </Layout>
  );
};

export default EditProfilePage;
