import { Link } from 'react-router-dom';
import { FiHome, FiEdit, FiCode } from 'react-icons/fi';
import { LuBuilding } from 'react-icons/lu';
import { useState } from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const [mode, setMode] = useState<'alwaysOpen' | 'alwaysClosed' | 'hover'>('hover');
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
    { path: '/admin/blog', label: 'Blog', icon: <FiEdit /> },
    { path: '/projects', label: 'Project', icon: <LuBuilding /> },
    { path: '/support', label: 'Support', icon: <RiCustomerService2Fill /> },
    { path: '/developer', label: 'Developer', icon: <FiCode /> },
  ];

  const isExpanded = mode === 'alwaysOpen' || (mode === 'hover' && hovered);
  const sidebarWidth = isExpanded ? 'w-64' : 'w-16';

  return (
    <div
      className={`bg-slate-800 dark:bg-neutral-800 text-slate-100 transition-all duration-300 flex flex-col h-screen ${sidebarWidth}`}
      onMouseEnter={() => mode === 'hover' && setHovered(true)}
      onMouseLeave={() => mode === 'hover' && setHovered(false)}
    >
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-4 space-y-2 px-2">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className="group flex items-center py-4 px-3 min-h-[60px] rounded hover:bg-slate-700 transition-colors font-semibold"
            >
              <div className="text-2xl">{icon}</div> {/* Increased icon size */}
              <span
                className={`transition-all duration-300 whitespace-nowrap ${
                  isExpanded ? 'ml-3 opacity-100' : 'ml-0 opacity-0 hidden'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Fixed Bottom Control */}
      <div className="fixed bottom-4 left-0 transition-all duration-300 z-50 w-16 px-2">
        <div className="w-full">
          <button
            className="flex items-center justify-center w-12 h-12 bg-neutral-800 hover:bg-neutral-600 rounded text-white"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaBars size={20} />
          </button>
        </div>

        {showDropdown && (
          <div className="absolute bottom-12 left-2 bg-slate-700 rounded shadow-lg z-50 w-48">
            <button
              className="w-full px-4 py-2 text-left hover:bg-slate-600"
              onClick={() => {
                setMode('alwaysOpen');
                setShowDropdown(false);
              }}
            >
              Selalu Terbuka 🌛
            </button>
            <button
              className="w-full px-4 py-2 text-left hover:bg-slate-600"
              onClick={() => {
                setMode('alwaysClosed');
                setShowDropdown(false);
              }}
            >
              Selalu Tertutup 🔥
            </button>
            <button
              className="w-full px-4 py-2 text-left hover:bg-slate-600"
              onClick={() => {
                setMode('hover');
                setShowDropdown(false);
              }}
            >
              Hover ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
