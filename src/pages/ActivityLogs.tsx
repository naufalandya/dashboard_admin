import { useState } from "react";
import { FaEye } from "react-icons/fa";

interface ActivityLog {
  id: number;
  user: string;
  project_name: string;
  menu: string;
  field: string;
  old_value: string | number | null;
  new_value: string | number | null;
  timestamp: string;
}

const dummyLogs: ActivityLog[] = [
  {
    id: 1,
    user: "Budi",
    project_name: "PLTS Cirebon",
    menu: "Project Detail",
    field: "IRR",
    old_value: 12.5,
    new_value: 14.0,
    timestamp: "2025-04-15T10:30:00Z",
  },
  {
    id: 2,
    user: "Sari",
    project_name: "PLTA Jambi",
    menu: "Kapasitas",
    field: "capacity",
    old_value: "100 MW",
    new_value: "120 MW",
    timestamp: "2025-04-14T15:20:00Z",
  },
];

const ActivityLogs = () => {
  const [search, setSearch] = useState("");

  const filteredLogs = dummyLogs.filter((log) =>
    log.project_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">Log Aktivitas</h2>

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
              <th className="py-2 px-4 border border-gray-700">Menu</th>
              <th className="py-2 px-4 border border-gray-700">Field</th>
              <th className="py-2 px-4 border border-gray-700">Previous Value</th>
              <th className="py-2 px-4 border border-gray-700">Current Value</th>
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
                <td className="py-2 px-4 border border-gray-700">{log.menu}</td>
                <td className="py-2 px-4 border border-gray-700">{log.field}</td>
                <td className="py-2 px-4 border border-gray-700">{log.old_value}</td>
                <td className="py-2 px-4 border border-gray-700">{log.new_value}</td>
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
                <td colSpan={9} className="text-center py-4 text-gray-400 font-medium">
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

export default ActivityLogs;
