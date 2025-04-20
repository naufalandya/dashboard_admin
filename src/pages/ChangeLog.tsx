import React from 'react';
import { FaCodeBranch, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Changelog = () => {
  const changelogItems = [
    {
      title: 'Fitur Baru: Integrasi API',
      description: 'Menambahkan endpoint baru untuk integrasi dengan layanan eksternal.',
      date: '2025-04-01',
      type: 'feature',
      points: [
        { text: 'Endpoint untuk autentikasi eksternal', icon: <FaCheckCircle className="text-green-500" /> },
        { text: 'Penyempurnaan dokumentasi API', icon: <FaCheckCircle className="text-green-500" /> },
        { text: 'Optimasi kecepatan pengambilan data', icon: <FaExclamationCircle className="text-orange-500" /> },
      ]
    },
    {
      title: 'Fitur Baru: Dashboard Developer',
      description: 'Membuat dashboard baru untuk pengembang dengan tampilan yang lebih baik.',
      date: '2025-04-10',
      type: 'feature',
      points: [
        { text: 'Antarmuka pengguna yang lebih bersih dan responsif', icon: <FaCheckCircle className="text-green-500" /> },
        { text: 'Integrasi dengan sistem log error', icon: <FaCheckCircle className="text-green-500" /> },
        { text: 'Fitur filtering untuk log data', icon: <FaExclamationCircle className="text-orange-500" /> },
      ]
    },
  ];

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = React.useState(1);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = changelogItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-8 font-sans bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white mb-4">🚀 Changelog</h1>
      <p className="text-lg text-gray-300 mb-6">
        Lihat pembaruan terbaru dan fitur baru yang ditambahkan ke proyek.
      </p>

      <div className="bg-gray-800 p-6 rounded-b-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
          <FaCodeBranch className="text-indigo-400 mr-2" />
          Fitur Baru
        </h2>

        <div className="space-y-6">
          {currentItems.map((item, index) => (
            <div key={index} className="p-5 bg-gray-700 rounded-b-xl shadow-md transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
              <span className="text-xs text-gray-400 block mt-1">{item.date}</span>

              <div className="mt-4 space-y-2">
                {item.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center gap-2">
                    {point.icon}
                    <span className="text-sm text-gray-200">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <ul className="flex space-x-2">
            {Array.from({ length: Math.ceil(changelogItems.length / itemsPerPage) }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                    currentPage === index + 1
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-600 text-white hover:bg-indigo-400'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
