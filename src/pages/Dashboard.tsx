import { FaChartBar, FaProjectDiagram, FaUserCog, FaHistory, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Statistik',
      description: 'Informasi energi terkini.',
      icon: <FaChartBar className="text-4xl text-blue-500" />,
      route: '/statistik', // <-- contoh
    },
    {
      title: 'Proyek',
      description: 'Data proyek berkelanjutan Anda.',
      icon: <FaProjectDiagram className="text-4xl text-green-500" />,
      route: '/dashboard/project',
    },
    {
      title: 'Akun',
      description: 'Kelola akses dan informasi pengguna.',
      icon: <FaUserCog className="text-4xl text-purple-500" />,
      route: '/dashboard/user',
    },
    {
      title: 'Aktivitas Terbaru',
      description: 'Lihat aktivitas terbaru terkait proyek Anda.',
      icon: <FaHistory className="text-4xl text-orange-500" />,
      route: '/aktivitas',
    },
    {
      title: 'Tarik Data',
      description: 'Mengatur script dan kredensial untuk menarik data pembangkit',
      icon: <FaDownload className="text-4xl text-red-500" />,
      route: '/data-fetcher',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        ⚡ Welcome to your dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => navigate(card.route)}
            className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {card.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {card.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
