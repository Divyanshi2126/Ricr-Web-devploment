import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      handleClearForm();
      navigate("/user-dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--color-background)] py-8 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-[var(--color-secondary)] mb-2">
              KHAAOPIYO Login
            </h1>
            <p className="text-lg text-[var(--color-text-muted)]">
              Welcome back! Let’s get you fed 😋
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-lg shadow-black/10 overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border-2
                    border-[var(--color-secondary)]
                    focus:outline-none focus:ring-2
                    focus:ring-[var(--color-accent)]
                    disabled:bg-gray-100"
                  />
                  {validationError.email && (
                    <span className="text-xs text-[var(--color-accent)] font-medium">
                      {validationError.email}
                    </span>
                  )}
                </div>

                {/* Password */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-xl border-2
                  border-[var(--color-secondary)]
                  focus:outline-none focus:ring-2
                  focus:ring-[var(--color-accent)]
                  disabled:bg-gray-100"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-8 mt-8 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[var(--color-secondary)]
                  hover:bg-[var(--color-secondary-hover)]
                  text-white font-bold py-4 rounded-xl
                  transition-all duration-300 transform hover:scale-105
                  shadow-md disabled:opacity-60"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>

                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-gray-200 text-[var(--color-primary)]
                  font-bold py-4 rounded-xl hover:bg-gray-300 transition"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <p className="text-center text-[var(--color-text-muted)] mt-8 text-sm">
            We respect your privacy ❤️
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
