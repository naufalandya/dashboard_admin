// api/project.ts

export const getProjectById = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/project`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Gagal mengambil data proyek.");
    }
  
    return response.json();
  };
  