// src/api/user.ts

export interface ProjectInfo {
    project: {
      id: number;
      name: string;
    };
  }
  
  export interface UserData {
    id: number;
    username: string;
    email: string;
    jabatan: string;
    full_name: string;
    profile_picture: string;
    email_verified_at: string | null;
    project_users: ProjectInfo[];
  }
  
  const API_URL = import.meta.env.VITE_API_URL;
  
  export const fetchUsers = async (): Promise<UserData[]> => {
    const token = localStorage.getItem("token");
  
    const res = await fetch(`${API_URL}/api/v1/admin/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    console.log(res)
  
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
  
    const json = await res.json();
    return json.data as UserData[];
  };
  