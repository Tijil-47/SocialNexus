// pages/index.js
import Layout from '../Components/Layout';
import Post from '../Components/Post';
import Hero from '../Components/Hero';
import GraphicSection from '../Components/GraphicSection';
import CreatePost from '../Components/CreatePost';

const posts = [
  { id: 1, title: 'First Post', content: 'This is my first post!' },
  { id: 2, title: 'Second Post', content: 'Here is another post!' },
];

const HomePage = () => (
  <Layout>
    <Hero />
    <div className="container mx-auto mt-10">
       <GraphicSection />
    </div>
    <div className="container mx-auto mt-10">
        <CreatePost />
    </div>
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  </Layout>
);

export default HomePage;
