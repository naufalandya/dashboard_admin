import { Link } from 'react-router-dom';
import { FiHome, FiEdit,  FiCode } from 'react-icons/fi';
import { LuBuilding } from "react-icons/lu";
import { useState } from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
    { path: '/admin/blog', label: 'Blog', icon: <FiEdit /> },
    { path: '/projects', label: 'Project', icon: <LuBuilding />  },
    { path: '/support', label: 'Support', icon: <RiCustomerService2Fill/> },   
    { path: '/developer', label: 'Developer ', icon: <FiCode /> },
  ];

  return (
    <div
      className={`bg-blue-800 dark:bg-blue-900 text-white transition-all duration-300 flex flex-col justify-between ${
        hovered ? 'w-64' : 'w-15'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <nav className="mt-4 space-y-2 px-2">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className="group flex items-center py-4 px-3 min-h-[60px] rounded hover:bg-blue-700 transition-colors font-semibold"
            >

              <div className="text-lg">{icon}</div>
              <span
                className={`transition-all duration-300 ${
                  hovered ? 'ml-3 opacity-100' : 'ml-0 opacity-0 hidden'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
