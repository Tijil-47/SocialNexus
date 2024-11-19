import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>SocialNexus</title>
      <meta name="description" content="Welcome to SocialNexus - Connect, share, and explore amazing content." />
    </Head>
    <Header />
    <div>{children}</div>
    <Footer /> {/* Include the Footer component */}
  </>
);

export default Layout;
