import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/contact", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong 😢");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--color-background)] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO / EMOTIVE CONTENT */}
          <div>
            <h1 className="text-5xl font-extrabold text-[var(--color-primary)]">
              Say Hello! 👋
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text)] opacity-80">
              Have questions, feedback, or just want to share your love for
              food? 🍕🍔  
              We’re all ears and ready to make your KHAAOPIYO experience amazing!
            </p>

            <div className="mt-10 space-y-5 text-[var(--color-text)] text-lg">
              <p>📍 Location: India</p>
              <p>📧 Email: support@khaaopiyo.com</p>
              <p>📞 Phone: +91 98765 43210</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 relative">
            <div className="absolute -top-6 -right-6 bg-[var(--color-secondary)] text-white px-4 py-2 rounded-xl shadow-lg">
              💌 Send us a message
            </div>

            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Let’s Connect 🤝
            </h2>

            <form onSubmit={handleSubmit} onReset={handleClearForm} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name ✨"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl
                focus:outline-none focus:border-[var(--color-secondary)] transition shadow-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email 📧"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl
                focus:outline-none focus:border-[var(--color-secondary)] transition shadow-sm"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message 📝"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl
                focus:outline-none focus:border-[var(--color-secondary)] transition shadow-sm resize-none"
              />

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[var(--color-secondary)] text-white font-bold py-4 rounded-xl
                  hover:bg-[var(--color-secondary-hover)] transition transform hover:scale-105 shadow-lg"
                >
                  {isLoading ? "Sending... ⏳" : "Send Message 💌"}
                </button>

                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 rounded-xl
                  hover:bg-gray-400 transition transform hover:scale-105 shadow-sm"
                >
                  Clear ❌
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* FUN CTA AT BOTTOM */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-primary)] text-lg font-bold mb-2">
            Hungry for more? 🍕🍔
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-[var(--color-secondary)] text-white px-10 py-4 rounded-xl
            font-bold hover:bg-[var(--color-secondary-hover)] transition transform hover:scale-110 shadow-lg"
          >
            Go Back Home 🏡
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
