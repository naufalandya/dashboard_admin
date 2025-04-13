// src/pages/Users.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, UserData } from "../api/user";

const Users = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.full_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddUser = () => {
    navigate("/dashboard/user/add");
  };

  return (
    <div className="container mx-auto p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Daftar User</h2>
        <button
          onClick={handleAddUser}
          className="bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white px-4 py-2 rounded-lg shadow transition"
        >
          + Tambah User
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Cari nama pengguna..."
          className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm bg-gray-900">
          <thead className="bg-gray-800 text-indigo-400 text-base font-semibold">
            <tr>
              <th className="py-2 px-4 border border-gray-700">ID</th>
              <th className="py-2 px-4 border border-gray-700">Nama</th>
              <th className="py-2 px-4 border border-gray-700">Email</th>
              <th className="py-2 px-4 border border-gray-700">Jabatan</th>
              <th className="py-2 px-4 border border-gray-700">Proyek</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-700 transition duration-200 font-semibold text-base"
              >
                <td className="py-2 px-4 border border-gray-700">{user.id}</td>
                <td className="py-2 px-4 border border-gray-700">{user.full_name}</td>
                <td className="py-2 px-4 border border-gray-700">{user.email}</td>
                <td className="py-2 px-4 border border-gray-700">{user.jabatan}</td>
                <td className="py-2 px-4 border border-gray-700">
                  {user.project_users.map((pu) => pu.project.name).join(", ")}
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-400 font-medium">
                  Tidak ada user ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
