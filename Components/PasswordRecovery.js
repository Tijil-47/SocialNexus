import { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = (e) => {
    e.preventDefault();
    // Handle password recovery logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Password Recovery</h2>
        <form onSubmit={handlePasswordRecovery}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Recover Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
