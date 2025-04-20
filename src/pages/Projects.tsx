import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import ProjectInformation from "../components/molecules/ProjectInformation";
interface Project {
  id: number;
  name: string;
  developer?: string;
  capacity?: string;
  project_cost?: number;
  irr?: number;
  location?: string;
  type?: string;
  commercial_operation_date?: string;
  financing?: string;
}

const dummyProjects: Project[] = [
  {
    id: 1,
    name: "PLTS Cirebon",
    developer: "PT Energi Hijau",
    capacity: "20 MW",
    project_cost: 15000000000,
    irr: 12.5,
    location: "Cirebon",
    type: "PLTS",
    commercial_operation_date: "2025-08-01",
    financing: "Private",
  },
  {
    id: 2,
    name: "PLTA Jambi",
    developer: "PT Air Sejuk",
    capacity: "100 MW",
    project_cost: 50000000000,
    irr: 14.2,
    location: "Jambi",
    type: "PLTA",
    commercial_operation_date: "2026-01-15",
    financing: "APBN",
  },
];

const Projects = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredProjects = dummyProjects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold text-white mb-6">Halaman Projects</h2>

      <ProjectInformation/>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Cari nama proyek..."
          className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          onClick={() => navigate("/projects/create")}
        >
          Tambah Project
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm bg-gray-900">
          <thead className="bg-gray-800 text-indigo-400 text-base font-semibold">
            <tr>
              <th className="py-2 px-4 border border-gray-700">ID</th>
              <th className="py-2 px-4 border border-gray-700">Nama</th>
              <th className="py-2 px-4 border border-gray-700">Developer</th>
              <th className="py-2 px-4 border border-gray-700">Kapasitas</th>
              <th className="py-2 px-4 border border-gray-700">Biaya Proyek</th>
              <th className="py-2 px-4 border border-gray-700">IRR</th>
              <th className="py-2 px-4 border border-gray-700">Lokasi</th>
              <th className="py-2 px-4 border border-gray-700">Tipe</th>
              <th className="py-2 px-4 border border-gray-700">COD</th>
              <th className="py-2 px-4 border border-gray-700">Pendanaan</th>
              <th className="py-2 px-4 border border-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-gray-700 transition duration-200 font-semibold text-base"
              >
                <td className="py-2 px-4 border border-gray-700">{project.id}</td>
                <td className="py-2 px-4 border border-gray-700">{project.name}</td>
                <td className="py-2 px-4 border border-gray-700">{project.developer}</td>
                <td className="py-2 px-4 border border-gray-700">{project.capacity}</td>
                <td className="py-2 px-4 border border-gray-700">
                  {project.project_cost?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td className="py-2 px-4 border border-gray-700">{project.irr}%</td>
                <td className="py-2 px-4 border border-gray-700">{project.location}</td>
                <td className="py-2 px-4 border border-gray-700">{project.type}</td>
                <td className="py-2 px-4 border border-gray-700">
                  {project.commercial_operation_date &&
                    new Date(project.commercial_operation_date).toLocaleDateString("id-ID")}
                </td>
                <td className="py-2 px-4 border border-gray-700">{project.financing}</td>
                <td className="py-2 px-4 border border-gray-700">
                  <div className="flex space-x-2 justify-center">
                    <button
                      title="Lihat"
                      className="p-2 bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-lg transition duration-200 cursor-pointer"
                    >
                      <FaEye className="w-4 h-4" />
                    </button>
                    <button
                      title="Edit"
                      className="p-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 rounded-lg transition duration-200 cursor-pointer"
                    >
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button
                      title="Hapus"
                      className="p-2 bg-red-100 text-red-800 hover:bg-red-200 rounded-lg transition duration-200 cursor-pointer"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredProjects.length === 0 && (
              <tr>
                <td colSpan={11} className="text-center py-4 text-gray-400 font-medium">
                  Tidak ada proyek yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
