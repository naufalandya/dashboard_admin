import { FaCodeBranch, FaBook, FaFileAlt, FaBug, FaClipboardList, FaRoad, FaDownload } from 'react-icons/fa';

const Developer = () => {
  const modules = [
    {
      title: 'Changelog',
      description: 'Melacak pembaruan kode, perbaikan, dan fitur baru.',
      icon: <FaCodeBranch className="text-4xl text-teal-500" />,
    },
    {
      title: 'Dokumentasi API',
      description: 'Referensi API untuk pengembang dengan contoh request-response.',
      icon: <FaBook className="text-4xl text-blue-500" />,
    },

    {
      title: 'Unit Testing',
      description: 'Lihat status test coverage dan hasil pengujian.',
      icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    },
    {
        title: 'Bug Report',
        description: 'Laporan bug yang ditemukan oleh pengguna.',
        icon: <FaBug className="text-4xl text-blue-400" />,
    },
    {
      title: 'Dokumen UAT',
      description: 'Laporan hasil UAT dan checklist pengujian pengguna.',
      icon: <FaFileAlt className="text-4xl text-orange-500" />,
    },
    {
      title: 'Log Error & Monitoring',
      description: 'Pantau log error dan status sistem produksi.',
      icon: <FaBug className="text-4xl text-red-500" />,
    },
    {
      title: 'Roadmap Pengembangan',
      description: 'Lihat roadmap dan rencana pengembangan fitur.',
      icon: <FaRoad className="text-4xl text-green-500" />,
    },
    {
      title: 'Release Notes',
      description: 'Catatan rilis dan fitur terbaru.',
      icon: <FaDownload className="text-4xl text-purple-500" />,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        ⚡ Developer Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {module.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {module.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{module.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
