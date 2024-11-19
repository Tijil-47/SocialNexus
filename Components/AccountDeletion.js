const AccountDeletion = () => {
    const handleAccountDeletion = () => {
      // Handle account deletion logic here
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold mb-6">Are you sure?</h2>
          <p className="mb-6">This action cannot be undone.</p>
          <button
            onClick={handleAccountDeletion}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete Account
          </button>
        </div>
      </div>
    );
  };
  
  export default AccountDeletion;
  