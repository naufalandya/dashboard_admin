import React from "react";

interface PowerPlant {
  id: number;
  type?: string;
  capacity?: string;
  capacity_actual?: number;
  capacity_actual_unit?: string;
  max_output?: number;
  max_output_unit?: string;
  energy_generated_per_year?: number;
  equivalent_co2_reduction_per_year?: number;
  interconnection?: string;
  area?: number;
  lat?: number;
  lng?: number;
}

interface Attachment {
  attachment_link?: string;
}

interface ProjectDetailProps {
  data: {
    id: number;
    name: string;
    developer?: string;
    scheme?: string;
    project_cost?: number;
    rates?: number;
    required_cod?: string;
    commercial_operation_date?: string;
    financing?: string;
    epc_contractor?: string;
    phase?: string;
    owner?: string;
    location?: string;
    der?: number;
    irr?: number;
    tkdn?: number;
    coordinate?: string;
    daily?: number;
    monthly?: number;
    link_video?: string;
    executive_summary?: string;
    shareholder?: number;
    slug?: string;
    is_ebt: boolean;
    tugas_karya?: number;
    internal_jvc?: number;
    jvc?: number;
    video?: string;
    jsd_one?: number;
    jwd_two?: number;
    shareholder_structure?: string;
    annual_estimation?: number;
    annual_estimation_unit?: string;
    bulanan?: number;
    saldo?: number;
    saldo_actual?: number;

    // Nested
    power_plants?: PowerPlant[];
    project_attachment_info?: Attachment[];
    project_attachment_development?: Attachment[];
    project_attachment_operation?: Attachment[];
    project_attachment_construction?: Attachment[];
  };
  isLoading: boolean;
}

const skeletonItem = (
  <div className="animate-pulse h-4 bg-gray-300 rounded w-full" />
);

const SkeletonDetail = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
    {Array.from({ length: 40 }).map((_, idx) => (
      <div key={idx} className="flex gap-2 items-center">
        <div className="font-semibold text-gray-600 w-1/3">•••</div>
        <div className="w-2/3">{skeletonItem}</div>
      </div>
    ))}
  </div>
);

const ProjectDetailView: React.FC<ProjectDetailProps> = ({ data, isLoading }) => {
    const mainPowerPlant = data.power_plants?.[0]; // Take the first power plant
    
    return (
      <div className="p-6 bg-black-950 text-white rounded-xl shadow-lg max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">
          {isLoading ? (
            <div className="h-6 w-64 animate-pulse bg-gray-700 rounded" />
          ) : (
            `Detail Pembangkit: ${data?.name || "-"}`
          )}
        </h2>
  
        {isLoading || !data ? (
          <SkeletonDetail />
        ) : (
          <div className="grid grid-cols-1 gap-4 text-[1.2rem] text-gray-300">
 <div className="overflow-x-auto mt-6">
  <table className="min-w-full border-separate border-spacing-y-2 text-base text-gray-200">
    <thead>
      <tr>
        <th className="text-left px-4 py-3 font-bold text-white bg-slate-700 rounded-tl-lg">Label</th>
        <th className="text-left px-4 py-3 font-bold text-white bg-slate-700 rounded-tr-lg">Value</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["Developer", data.developer],
        ["Skema", data.scheme],
        ["Biaya Proyek", data.project_cost?.toLocaleString()],
        ["Tarif", data.rates],
        ["Required COD", data.required_cod ? new Date(data.required_cod).toLocaleDateString("id-ID") : "-"],
        ["COD Komersial", data.commercial_operation_date ? new Date(data.commercial_operation_date).toLocaleDateString("id-ID") : "-"],
        ["Financing", data.financing],
        ["EPC Contractor", data.epc_contractor],
        ["Phase", data.phase],
        ["Owner", data.owner || "-"],
        ["Lokasi", data.location],
        ["Koordinat", <a href={data.coordinate} target="_blank" className="text-blue-400 underline">Lihat Peta</a>],
        ["DER", data.der || "-"],
        ["IRR", data.irr],
        ["TKDN", data.tkdn],
        ["Produksi Harian", data.daily || "-"],
        ["Produksi Bulanan", data.monthly || "-"],
        ["Link Video", data.link_video ? <a href={data.link_video} target="_blank" className="text-blue-400 underline">Lihat</a> : "-"],
        ["Executive Summary", data.executive_summary || "-"],
        ["Shareholder", data.shareholder],
        ["Slug", data.slug],
        ["EBT", data.is_ebt ? "Ya" : "Tidak"],
        ["Tugas Karya", data.tugas_karya],
        ["Internal JVC", data.internal_jvc],
        ["JVC", data.jvc || "-"],
        ["Video", data.video],
        ["JSD One", data.jsd_one || "-"],
        ["JWD Two", data.jwd_two || "-"],
        ["Struktur Pemegang Saham", data.shareholder_structure || "-"],
        ["Estimasi Tahunan", `${data.annual_estimation ?? "-"} ${data.annual_estimation_unit ?? ""}`],
        ["Bulanan", data.bulanan],
        ["Saldo", data.saldo],
        ["Saldo Aktual", data.saldo_actual],
        ["Tipe", mainPowerPlant?.type],
        ["Kapasitas", mainPowerPlant?.capacity],
        ["Kapasitas Aktual", `${mainPowerPlant?.capacity_actual ?? "-"} ${mainPowerPlant?.capacity_actual_unit ?? ""}`],
        ["Output Maks", `${mainPowerPlant?.max_output ?? "-"} ${mainPowerPlant?.max_output_unit ?? ""}`],
        ["Energi per Tahun", mainPowerPlant?.energy_generated_per_year],
        ["Reduksi CO₂ per Tahun", mainPowerPlant?.equivalent_co2_reduction_per_year || "-"],
        ["Interkoneksi", mainPowerPlant?.interconnection],
        ["Luas Area", mainPowerPlant?.area],
        ["Latitude", mainPowerPlant?.lat],
        ["Longitude", mainPowerPlant?.lng],
      ].map(([label, value], idx) => (
        <tr
          key={idx}
          className="bg-slate-800 hover:bg-slate-700 rounded-lg transition duration-200"
        >
          <td className="px-4 py-4 font-semibold text-white align-top w-1/3">{label}</td>
          <td className="px-4 py-4">{value || "-"}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    
            {/* Menampilkan data Lampiran dengan gambar thumbnail */}
            {data.project_attachment_info && data.project_attachment_info.length > 0 && (
            <div>
                <h3 className="font-bold text-xl mt-6 text-gray-100">Lampiran Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
                {data.project_attachment_info?.map((attachment, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-2">
                    <img
                        src={attachment.attachment_link}
                        alt={`Lampiran Info ${idx + 1}`}
                        className="w-56 h-56 object-cover rounded-md shadow-md transform transition duration-300 hover:scale-105"
                    />
                    <a
                        href={attachment.attachment_link}
                        target="_blank"
                        className="text-gray-400 underline text-sm mt-2"
                    >
                        Lihat Gambar {idx + 1}
                    </a>
                    </div>
                ))}
                </div>
            </div>
            )}

            {/* Repeat for other attachment sections */}
            {data.project_attachment_development && data.project_attachment_development.length > 0 && (
            <div>
                <h3 className="font-bold text-xl mt-6 text-gray-100">Lampiran Development</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
                {data.project_attachment_development?.map((attachment, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-2">
                    <img
                        src={attachment.attachment_link}
                        alt={`Lampiran Development ${idx + 1}`}
                        className="w-56 h-56 object-cover rounded-md shadow-md transform transition duration-300 hover:scale-105"
                    />
                    <a
                        href={attachment.attachment_link}
                        target="_blank"
                        className="text-gray-400 underline text-sm mt-2"
                    >
                        Lihat Gambar {idx + 1}
                    </a>
                    </div>
                ))}
                </div>
            </div>
            )}

            {data.project_attachment_construction && data.project_attachment_construction.length > 0 && (
            <div>
                <h3 className="font-bold text-xl mt-6 text-gray-100">Lampiran Konstruksi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
                {data.project_attachment_construction?.map((attachment, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-2">
                    <img
                        src={attachment.attachment_link}
                        alt={`Lampiran Konstruksi ${idx + 1}`}
                        className="w-56 h-56 object-cover rounded-md shadow-md transform transition duration-300 hover:scale-105"
                    />
                    <a
                        href={attachment.attachment_link}
                        target="_blank"
                        className="text-gray-400 underline text-sm mt-2"
                    >
                        Lihat Gambar {idx + 1}
                    </a>
                    </div>
                ))}
                </div>
            </div>
            )}

        {data.project_attachment_operation && data.project_attachment_operation.length > 0 && (
            <div>
                <h3 className="font-bold text-xl mt-6 text-gray-100">Lampiran Operasi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
                {data.project_attachment_operation?.map((attachment, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-2">
                    <img
                        src={attachment.attachment_link}
                        alt={`Lampiran Konstruksi ${idx + 1}`}
                        className="w-56 h-56 object-cover rounded-md shadow-md transform transition duration-300 hover:scale-105"
                    />
                    <a
                        href={attachment.attachment_link}
                        target="_blank"
                        className="text-gray-400 underline text-sm mt-2"
                    >
                        Lihat Gambar {idx + 1}
                    </a>
                    </div>
                ))}
                </div>
            </div>
            )}
        </div>
        )}
      </div>
    );
  };
  

export default ProjectDetailView;
