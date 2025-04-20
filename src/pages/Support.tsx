import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaInbox, FaCheckCircle, FaEnvelopeOpenText, FaEye } from 'react-icons/fa';

const Support: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  // Dummy data
  const openComplaints = [
    {
      id: 1,
      user: 'Budi Santoso',
      email: 'budi@example.com',
      subject: 'Error saat login',
      status: 'Open',
      created_at: '2025-04-14T10:30:00Z',
    },
    {
      id: 2,
      user: 'Sari Purnama',
      email: 'sari@example.com',
      subject: 'Tidak bisa upload file',
      status: 'Open',
      created_at: '2025-04-13T09:45:00Z',
    },
  ];

  const resolvedComplaints = [
    {
      id: 3,
      user: 'Joko Widodo',
      email: 'joko@example.com',
      subject: 'Kesalahan data proyek',
      status: 'Resolved',
      created_at: '2025-04-10T15:00:00Z',
    },
  ];

  const filteredOpen = openComplaints.filter((item) =>
    item.user.toLowerCase().includes(search.toLowerCase()) ||
    item.subject.toLowerCase().includes(search.toLowerCase())
  );
  const filteredResolved = resolvedComplaints.filter((item) =>
    item.user.toLowerCase().includes(search.toLowerCase()) ||
    item.subject.toLowerCase().includes(search.toLowerCase())
  );

  const cards = [
    {
      icon: <FaInfoCircle className="text-3xl text-indigo-500" />,
      title: 'Informasi Pengaduan',
      description: 'Semua pengaduan pengguna terkait sistem',
      route: '/support/all',
    },
    {
      icon: <FaInbox className="text-3xl text-yellow-500" />,
      title: 'Total Pengaduan',
      description: 'Jumlah pengaduan yang masuk',
      route: '/support/total',
    },
    {
      icon: <FaCheckCircle className="text-3xl text-green-500" />,
      title: 'Resolved',
      description: 'Pengaduan yang sudah ditangani',
      route: '/support/resolved',
    },
    {
      icon: <FaEnvelopeOpenText className="text-3xl text-red-500" />,
      title: 'Open',
      description: 'Pengaduan yang belum ditanggapi',
      route: '/support/open',
    },
  ];

  const renderTable = (title: string, data: typeof openComplaints) => (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm bg-gray-900">
          <thead className="bg-gray-800 text-indigo-400 text-base font-semibold">
            <tr>
              <th className="py-2 px-4 border border-gray-700">No</th>
              <th className="py-2 px-4 border border-gray-700">User</th>
              <th className="py-2 px-4 border border-gray-700">Email</th>
              <th className="py-2 px-4 border border-gray-700">Subjek</th>
              <th className="py-2 px-4 border border-gray-700">Status</th>
              <th className="py-2 px-4 border border-gray-700">Tanggal</th>
              <th className="py-2 px-4 border border-gray-700">Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-700 transition duration-200 font-medium text-sm">
                  <td className="py-2 px-4 border border-gray-700">{index + 1}</td>
                  <td className="py-2 px-4 border border-gray-700">{item.user}</td>
                  <td className="py-2 px-4 border border-gray-700">{item.email}</td>
                  <td className="py-2 px-4 border border-gray-700">{item.subject}</td>
                  <td className="py-2 px-4 border border-gray-700">{item.status}</td>
                  <td className="py-2 px-4 border border-gray-700">
                    {new Date(item.created_at).toLocaleString('id-ID')}
                  </td>
                  <td className="py-2 px-4 border border-gray-700 text-center">
                    <button className="p-2 bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-lg transition duration-200">
                      <FaEye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-400 font-medium">
                  Tidak ada data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">Halaman Support</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Cari nama pengguna atau subjek..."
          className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {renderTable('Pengaduan Open', filteredOpen)}
      {renderTable('Pengaduan Resolved', filteredResolved)}
    </div>
  );
};

export default Support;