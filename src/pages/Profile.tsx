import React from "react";
import {
  FaUser,
  FaVenusMars,
  FaBirthdayCake,
  FaCalendarAlt,
  FaClock,
  FaLevelUpAlt,
  FaInfoCircle,
  FaGraduationCap,
  FaUserClock,
  FaUsers,
  FaProjectDiagram,
  FaUserShield,
} from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";

const Profile = () => {
  const dummyProfile =  {
    nama: "John Doe",
    jenis_kelamin: "Laki-laki",
    tanggal_lahir: "1990-05-15",
    tanggal_mulai_bekerja: "2015-01-01",
    lama_bekerja: 9,
    level: "Senior Developer",
    status: "Aktif",
    tingkat_pendidikan: "S2 Teknik Informatika",
    usia: 34,
    kelompok_usia: "30-40",
    project: { name: "Proyek A" },
    users: { name: "Admin Sistem" },
    foto: null,
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-white">Profil Pengguna</h2>

      <div className="flex flex-col items-center mb-10">
        {dummyProfile.foto ? (
          <img
            src={dummyProfile.foto}
            alt="Foto Profil"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        ) : (
          <div className="w-32 h-32 flex items-center justify-center bg-indigo-600 rounded-full text-white text-5xl shadow-lg">
            <MdOutlinePerson />
          </div>
        )}
        <h3 className="mt-4 text-xl font-semibold text-white">{dummyProfile.nama}</h3>
        <p className="text-gray-400">{dummyProfile.level}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileItem icon={<FaUser />} label="Nama" value={dummyProfile.nama} />
        <ProfileItem icon={<FaVenusMars />} label="Jenis Kelamin" value={dummyProfile.jenis_kelamin} />
        <ProfileItem icon={<FaBirthdayCake />} label="Tanggal Lahir" value={formatDate(dummyProfile.tanggal_lahir)} />
        <ProfileItem icon={<FaCalendarAlt />} label="Tanggal Mulai Bekerja" value={formatDate(dummyProfile.tanggal_mulai_bekerja)} />
        <ProfileItem icon={<FaClock />} label="Lama Bekerja" value={`${dummyProfile.lama_bekerja} tahun`} />
        <ProfileItem icon={<FaLevelUpAlt />} label="Level" value={dummyProfile.level} />
        <ProfileItem icon={<FaInfoCircle />} label="Status" value={dummyProfile.status} />
        <ProfileItem icon={<FaGraduationCap />} label="Tingkat Pendidikan" value={dummyProfile.tingkat_pendidikan} />
        <ProfileItem icon={<FaUserClock />} label="Usia" value={`${dummyProfile.usia} tahun`} />
        <ProfileItem icon={<FaUsers />} label="Kelompok Usia" value={dummyProfile.kelompok_usia} />
        <ProfileItem icon={<FaProjectDiagram />} label="Proyek" value={dummyProfile.project?.name} />
        <ProfileItem icon={<FaUserShield />} label="Dibuat Oleh" value={dummyProfile.users?.name} />
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number | undefined }) => {
  return (
<div className="bg-gray-800 text-white p-4 rounded-xl shadow-md flex items-center justify-between gap-4">
  <div>
    <div className="text-sm text-gray-400 font-semibold mb-1">{label}</div>
    <div className="text-lg font-medium text-white">{value || '-'}</div>
  </div>
  <div className="text-indigo-400 text-xl">{icon}</div>
</div>


  );
};

const formatDate = (date?: string | Date) => {
  if (!date) return '-';
  const d = new Date(date);
  return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
};

export default Profile;