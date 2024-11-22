import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`fixed top-0 left-0 z-50 flex flex-col ${isCollapsed ? 'w-16' : 'w-64'} h-screen bg-gray-800 text-white transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-3xl font-bold ${isCollapsed ? 'hidden' : ''}`}>SocialNexus</h1>
        <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
          ☰
        </button>
      </div>
      <nav className="mt-10 flex flex-col space-y-2 px-2">
        <Link href="/">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>home</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Home</span>
          </span>
        </Link>
        <Link href="/profile">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>person</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Profile</span>
          </span>
        </Link>
        <Link href="/friends">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>group</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Friends</span>
          </span>
        </Link>
        <Link href="/messages">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>message</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Messages</span>
          </span>
        </Link>
        <Link href="/notifications">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>notifications</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Notifications</span>
          </span>
        </Link>
        <Link href="/groups">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>group_work</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Groups</span>
          </span>
        </Link>
        <Link href="/events">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>event</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Events</span>
          </span>
        </Link>
        <Link href="/settings">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>settings</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Settings</span>
          </span>
        </Link>
        <Link href="/logout">
          <span className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <span className={`material-icons ${isCollapsed ? '' : 'mr-2'}`}>logout</span>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Logout</span>
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
