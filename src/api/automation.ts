// lib/api.ts

export const fetchProjects = async () => {
    return [
      { id: "1", name: "PLTU Jawa Barat" },
      { id: "2", name: "PLTS Riau" },
    ];
  };
  
export const fetchGeneratorsByProject = async (projectId: string) => {
    const dummy: { [key: string]: { id: string; name: string; }[] } = {
        "1": [
            { id: "1-1", name: "Unit 1" },
            { id: "1-2", name: "Unit 2" },
        ],
        "2": [
            { id: "2-1", name: "Solar Array 1" },
            { id: "2-2", name: "Solar Array 2" },
        ],
    };
    return dummy[projectId] || [];
};
  