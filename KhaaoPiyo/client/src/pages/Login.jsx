import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let Error = {};

    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co\.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Enter a valid email address";
    }

    if (formData.password.length < 6) {
      Error.password = "Password must be at least 6 characters";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors");
      return;
    }

    setIsLoading(true);
    try {
      const res = await api.post("/auth/login", formData);

      toast.success(res.data.message || "Welcome back 🍽️");
      setUser(res.data.data);
      setIsLogin(true);

      sessionStorage.setItem("GrubGoUser", JSON.stringify(res.data.data));
      navigate("/user-dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div
          className="text-center py-6"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <h1 className="text-3xl font-extrabold text-white">KHAAOPIYO 🍔</h1>
          <p className="text-sm text-white/80 mt-1">
            Login to continue your food journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={validationError.email}
            disabled={isLoading}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={validationError.password}
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition
              ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}`}
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            {isLoading ? "Logging in..." : "Login & Order 🍕"}
          </button>

          <p className="text-center text-sm text-gray-600">
            New here?{" "}
            <Link
              to="/register"
              className="font-semibold hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

/* Reusable Input Component */
const InputField = ({ label, error, ...props }) => (
  <div>
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className={`w-full mt-1 px-4 py-3 rounded-xl border outline-none transition
        ${error ? "border-red-400" : "border-gray-300 focus:border-[var(--color-secondary)]"}`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default Login;
