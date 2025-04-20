import { FaWind, FaSun, FaMountain, FaBolt } from 'react-icons/fa';

const ProjectInformation = () => {

  const cards = [
    {
      icon: <FaWind className="text-3xl text-indigo-500" />,
      title: 'PLTU (Pembangkit Listrik Tenaga Uap)',
      description: 'Total kapasitas PLTU di proyek ini',
      value: '2300 MW',
    },
    {
      icon: <FaSun className="text-3xl text-yellow-500" />,
      title: 'PLTS (Pembangkit Listrik Tenaga Surya)',
      description: 'Total kapasitas PLTS di proyek ini',
      value: '330 MW',
    },
    {
      icon: <FaMountain className="text-3xl text-green-500" />,
      title: 'PLTA (Pembangkit Listrik Tenaga Air)',
      description: 'Total kapasitas PLTA di proyek ini',
      value: '510 MW',
    },
    {
      icon: <FaBolt className="text-3xl text-red-500" />,
      title: 'Total Semua Pembangkit',
      description: 'Total kapasitas semua pembangkit di proyek ini',
      value: '3210 MW', // Kamu bisa menghitung total ini sesuai data yang ada
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            {card.icon}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {card.title}
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
          <div className="text-lg font-medium text-white mt-2">{card.value}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectInformation;