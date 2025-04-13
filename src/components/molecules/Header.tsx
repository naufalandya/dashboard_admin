import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const profilePictureUrl = ""; // Ganti dengan URL gambar profil kalau ada

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="../../public/m-logo-pln.png" alt="PLN Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        </div>

        {/* Area profil + username */}
        <div 
          onClick={handleProfileClick}
          className="flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Username
          </span>
          <img 
            src={profilePictureUrl || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} 
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
