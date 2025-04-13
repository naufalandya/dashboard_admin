import { useState } from "react";
import { login } from "../api/auth";
import { validateLogin } from "../libs/common";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function for routing

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateLogin(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const response = await login(values.email, values.password);

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error: any) {
      setErrors({ form: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-600 dark:bg-blue-800">
      <Link to="/dashboard" className="absolute top-4 left-4">
        <img
          src="../../public/m-logo-pln.png"
          alt="PLN Logo"
          className="w-12 h-auto" // Adjust the size here
        />
      </Link>
        <div className="text-center px-6 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Empowering Indonesia’s Future
          </h1>
          <p className="text-lg text-blue-100">Through Sustainable & Renewable Energy ⚡</p>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md mx-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Email</label>
                    <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="youremail@gmail.com"
                    className={`w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 ${
                        errors.email ? "border-red-500" : ""
                    }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="mb-4 relative">
                    <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 ${
                        errors.password ? "border-red-500" : ""
                    }`}
                    />
                    {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                {/* Submit Error */}
                {errors.form && (
                    <p className="text-red-500 text-sm text-center mb-4">{errors.form}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-all duration-200"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
        </form>

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Don’t have access?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Contact Administrator
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
