import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { title } = useParams<{ title: string }>();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Detail Blog</h1>
      <p className="text-xl">Judul: {decodeURIComponent(title || "")}</p>
    </div>
  );
};

export default BlogDetail;
