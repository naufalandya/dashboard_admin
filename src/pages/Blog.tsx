import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

interface BlogPost {
  title: string;
  createdAt: string;
  createdBy: string;
}

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    { title: "Mengenal Teknologi Blockchain", createdAt: "2025-04-10", createdBy: "John Doe" },
    { title: "Inovasi dalam Energi Terbarukan", createdAt: "2025-04-05", createdBy: "Jane Smith" },
    { title: "Pentingnya ESG dalam Proyek Berkelanjutan", createdAt: "2025-03-29", createdBy: "Alex Brown" },
  ];

  const handlePostClick = (postTitle: string) => {
    navigate(`/blog/${encodeURIComponent(postTitle)}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Halaman Blog</h2>

      <div className="flex justify-end mb-6">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
          Tambah Postingan
        </button>
      </div>

      <div className="space-y-4">
        {blogPosts.map((post, index) => (
            <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 
                            transition duration-300 group cursor-pointer
                            hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handlePostClick(post.title)}
                >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                        Dibuat pada {new Date(post.createdAt).toLocaleDateString("id-ID")}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                        Dibuat oleh: {post.createdBy}
                    </p>

                    {/* Tombol Edit dan Hapus */}
                    <div
                        className="absolute top-4 right-4 flex space-x-2 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                        className="p-2 rounded-lg bg-indigo-100 text-indigo-700 
                                    hover:bg-indigo-200 hover:text-indigo-900 
                                    transition duration-200 cursor-pointer"
                        title="Edit"
                        >
                        <FaEdit className="w-4 h-4" />
                        </button>
                        <button
                        className="p-2 rounded-lg bg-red-100 text-red-700 
                                    hover:bg-red-200 hover:text-red-900 
                                    transition duration-200 cursor-pointer"
                        title="Hapus"
                        >
                        <FaTrash className="w-4 h-4" />
                        </button>
                    </div>
                </div>

        ))}
      </div>
    </div>
  );
};

export default Blog;
