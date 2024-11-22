import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      <Head>
        <title>SocialNexus</title>
        <meta name="description" content="Welcome to SocialNexus - Connect, share, and explore amazing content." />
      </Head>
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={isSidebarCollapsed} onToggleSidebar={handleToggleSidebar} />
        <main className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'} w-full p-4`}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
