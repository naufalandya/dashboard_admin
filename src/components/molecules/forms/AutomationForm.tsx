// components/AutomationForm.tsx

import React, { useEffect, useState } from "react";
import { fetchProjects, fetchGeneratorsByProject } from "../../../api/automation";

type Project = { id: string; name: string };
type Generator = { id: string; name: string };

const AutomationForm: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [generators, setGenerators] = useState<Generator[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>("");

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      fetchGeneratorsByProject(selectedProject).then(setGenerators);
    } else {
      setGenerators([]);
    }
  }, [selectedProject]);

  return (
<div className="relative bg-gray-900 p-6 rounded-xl border border-white/10 shadow-lg text-white w-full max-w-2xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-indigo-400">Tambah Automation Script</h2>

  <form className="space-y-4">
    {/* Project */}
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-300">Pilih Proyek</label>
      <div className="relative">
        <select
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none pl-3 pr-10"
          onChange={(e) => setSelectedProject(e.target.value)}
          value={selectedProject}
        >
          <option value="">-- Pilih Proyek --</option>
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Pembangkit */}
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-300">Pilih Pembangkit</label>
      <div className="relative">
        <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none pl-3 pr-10">
          <option value="">-- Pilih Pembangkit --</option>
          {generators.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Nama Task */}
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-300">Nama Task</label>
      <input
        type="text"
        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Misal: Ambil data produksi harian"
      />
    </div>

    {/* Script */}
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-300">Script</label>
      <textarea
        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        rows={4}
        placeholder="Contoh: curl http://ip-pembangkit/api/data/produksi"
      ></textarea>
    </div>

    {/* Cron Schedule */}
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-300">Cron Schedule</label>
      <input
        type="text"
        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="0 6 * * *"
      />
      <small className="text-gray-400 text-xs mt-1 block">
        Format cron: menit jam hari-bulan bulan hari-minggu (contoh: 0 6 * * * untuk setiap jam 6 pagi)
      </small>
    </div>

    {/* Deskripsi */}
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-300">Deskripsi (Opsional)</label>
      <textarea
        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        rows={3}
        placeholder="Catatan atau parameter tambahan"
      ></textarea>
    </div>

    {/* Aktif */}
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="active"
        className="form-checkbox bg-gray-800 text-indigo-500 border-gray-600"
      />
      <label htmlFor="active" className="font-medium text-sm text-gray-300">
        Aktifkan Automation Ini
      </label>
    </div>

    {/* Submit */}
    <div className="pt-4">
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Simpan Automation
      </button>
    </div>
  </form>
</div>


  );
};

export default AutomationForm;
