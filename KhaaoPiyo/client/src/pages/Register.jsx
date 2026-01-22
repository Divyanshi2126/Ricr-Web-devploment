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
      Error.fullName = "Name should be more than 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only alphabets and space allowed";
    }

    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use proper email format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian mobile number allowed";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the form correctly");
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div
          className="text-center py-6"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <h1 className="text-3xl font-extrabold text-white">
            Join KHAAOPIYO 🍕
          </h1>
          <p className="text-sm text-white/80 mt-1">
            Create your account & start ordering
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="p-6 space-y-4"
        >
          <Input
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            disabled={isLoading}
            error={validationError.fullName}
          />

          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            error={validationError.email}
          />

          <Input
            placeholder="Mobile Number"
            name="mobileNumber"
            maxLength="10"
            value={formData.mobileNumber}
            onChange={handleChange}
            disabled={isLoading}
            error={validationError.mobileNumber}
          />

          <Input
            type="password"
            placeholder="Create Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
          />

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="reset"
              disabled={isLoading}
              className="flex-1 py-3 rounded-xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition disabled:cursor-not-allowed"
            >
              Clear
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 py-3 rounded-xl font-semibold text-white transition
                ${isLoading ? "opacity-70" : "hover:scale-[1.02]"}`}
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              {isLoading ? "Registering..." : "Create Account 🚀"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* Reusable Input */
const Input = ({ error, ...props }) => (
  <div>
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl border outline-none transition
        ${error ? "border-red-400" : "border-gray-300 focus:border-(--color-secondary)"}
        disabled:bg-gray-100 disabled:cursor-not-allowed`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default Register;
