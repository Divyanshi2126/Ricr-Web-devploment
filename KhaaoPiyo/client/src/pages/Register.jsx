import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only Contain A-Z , a-z and space";
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
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
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
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
              KHAAOPIYO Registration
            </h1>
            <p className="text-[var(--color-text-muted)] text-lg">
              One step closer to delicious food 😋
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg shadow-black/10">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border-2
                    border-[var(--color-secondary)]
                    focus:outline-none focus:ring-2
                    focus:ring-[var(--color-accent)]
                    disabled:bg-gray-100"
                  />
                  {validationError.fullName && (
                    <span className="text-xs text-[var(--color-accent)] font-medium">
                      {validationError.fullName}
                    </span>
                  )}
                </div>

                {/* Email */}
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

                {/* Mobile */}
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  maxLength="10"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-xl border-2
                  border-[var(--color-secondary)]
                  focus:outline-none focus:ring-2
                  focus:ring-[var(--color-accent)]
                  disabled:bg-gray-100"
                />

                {/* Password */}
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-xl border-2
                  border-[var(--color-secondary)]
                  focus:outline-none focus:ring-2
                  focus:ring-[var(--color-accent)]
                  disabled:bg-gray-100"
                />

                {/* Confirm Password */}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
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
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-gray-200 text-[var(--color-primary)]
                  font-bold py-4 rounded-xl hover:bg-gray-300 transition"
                >
                  Clear Form
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[var(--color-secondary)]
                  hover:bg-[var(--color-secondary-hover)]
                  text-white font-bold py-4 rounded-xl
                  transition-all duration-300 transform hover:scale-105
                  disabled:opacity-60"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <p className="text-center text-[var(--color-text-muted)] mt-8 text-sm">
            All fields are mandatory. We respect your privacy ❤️
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
