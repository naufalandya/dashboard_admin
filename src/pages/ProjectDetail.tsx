// pages/ProjectDetail.tsx
import React, { useEffect, useState } from "react";
import { getProjectById } from "../api/project";
import { Project } from "../types/project";
import ProjectDetailView from "../components/template/ProjectDetailView";

const ProjectDetail: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchProject = async () => {
      try {
        const data = await getProjectById();
        console.log(data, "data woi")
        setProject(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!project) return <div className="p-4">Data tidak ditemukan.</div>;

  return <ProjectDetailView data={project} isLoading={loading} />;
};

export default ProjectDetail;
