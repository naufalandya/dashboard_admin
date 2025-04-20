import { useState } from "react";
import { FaEye } from "react-icons/fa";

interface Automation {
  id: number;
  user: string;
  project_name: string;
  task_name: string;
  script: string;
  cron_schedule: string;
  description: string | null;
  is_active: boolean;
  timestamp: string;
}

const dummyLogs: Automation[] = [
  {
    id: 1,
    user: "Budi",
    project_name: "PLTS Cirebon",
    task_name: "Ambil data produksi harian",
    script: "curl http://ip-pembangkit/api/data/produksi",
    cron_schedule: "0 6 * * *",
    description: "Script untuk mengambil data produksi",
    is_active: true,
    timestamp: "2025-04-15T10:30:00Z",
  },
  {
    id: 2,
    user: "Sari",
    project_name: "PLTA Jambi",
    task_name: "Cek kapasitas harian",
    script: "curl http://ip-pembangkit/api/data/kapasitas",
    cron_schedule: "0 7 * * *",
    description: "Script untuk cek kapasitas",
    is_active: false,
    timestamp: "2025-04-14T15:20:00Z",
  },
];

const Automation = () => {
  const [search, setSearch] = useState("");

  const filteredLogs = dummyLogs.filter((log) =>
    log.project_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">Daftar Automation</h2>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Cari nama proyek..."
          className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm bg-gray-900">
          <thead className="bg-gray-800 text-indigo-400 text-base font-semibold">
            <tr>
              <th className="py-2 px-4 border border-gray-700">No</th>
              <th className="py-2 px-4 border border-gray-700">User</th>
              <th className="py-2 px-4 border border-gray-700">Project</th>
              <th className="py-2 px-4 border border-gray-700">Task Name</th>
              <th className="py-2 px-4 border border-gray-700">Script</th>
              <th className="py-2 px-4 border border-gray-700">Cron Schedule</th>
              <th className="py-2 px-4 border border-gray-700">Description</th>
              <th className="py-2 px-4 border border-gray-700">Active</th>
              <th className="py-2 px-4 border border-gray-700">Timestamp</th>
              <th className="py-2 px-4 border border-gray-700">Detail</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log, index) => (
              <tr
                key={log.id}
                className="hover:bg-gray-700 transition duration-200 font-medium text-sm"
              >
                <td className="py-2 px-4 border border-gray-700">{index + 1}</td>
                <td className="py-2 px-4 border border-gray-700">{log.user}</td>
                <td className="py-2 px-4 border border-gray-700">{log.project_name}</td>
                <td className="py-2 px-4 border border-gray-700">{log.task_name}</td>
                <td className="py-2 px-4 border border-gray-700">{log.script}</td>
                <td className="py-2 px-4 border border-gray-700">{log.cron_schedule}</td>
                <td className="py-2 px-4 border border-gray-700">{log.description}</td>
                <td className="py-2 px-4 border border-gray-700 text-center">
                  {log.is_active ? "Active" : "Inactive"}
                </td>
                <td className="py-2 px-4 border border-gray-700">
                  {new Date(log.timestamp).toLocaleString("id-ID")}
                </td>
                <td className="py-2 px-4 border border-gray-700 text-center">
                  <button
                    title="Lihat detail"
                    className="p-2 bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-lg transition duration-200"
                  >
                    <FaEye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredLogs.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center py-4 text-gray-400 font-medium">
                  Tidak ada log aktivitas yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Automation;
