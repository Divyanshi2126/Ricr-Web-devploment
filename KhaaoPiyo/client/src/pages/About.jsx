import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO / STORY SECTION */}
      <div className="min-h-screen bg-[var(--color-background)] px-6 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <h1 className="text-5xl font-extrabold text-[var(--color-primary)] leading-tight">
              Our Story 🍔
            </h1>
            <p className="mt-6 text-lg text-[var(--color-text)] opacity-80">
              KHAAOPIYO started with one simple idea: <br />
              <span className="font-semibold text-[var(--color-secondary)]">Good food should make people happy!</span> 😋
            </p>
            <p className="mt-4 text-lg text-[var(--color-text)] opacity-80">
              From our humble kitchen to your table, we focus on fresh ingredients, tasty meals, and a dining experience you’ll never forget. Every dish is made with love ❤️ and a dash of creativity ✨.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="mt-8 bg-[var(--color-secondary)] text-white px-8 py-4 rounded-xl font-bold
              hover:bg-[var(--color-secondary-hover)] transition transform hover:scale-105 shadow-lg"
            >
              🍽️ Explore Our Menu
            </button>
          </div>

          {/* Right Image / Illustration */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
              alt="Delicious food"
              className="rounded-2xl object-cover w-full h-96 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* MISSION / VALUES SECTION */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">
            Our Values ❤️
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text)] opacity-80">
            We believe in quality, speed, and creating a happy experience for every customer.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[var(--color-background)] rounded-2xl p-6 shadow hover:scale-105 transition transform">
              <div className="text-4xl mb-4">🥗</div>
              <h4 className="font-bold text-lg text-[var(--color-primary)]">Fresh Ingredients</h4>
              <p className="text-sm mt-2 text-[var(--color-text)] opacity-80">
                Only the best veggies, spices & proteins for every dish.
              </p>
            </div>

            <div className="bg-[var(--color-background)] rounded-2xl p-6 shadow hover:scale-105 transition transform">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-lg text-[var(--color-primary)]">Fast & Reliable</h4>
              <p className="text-sm mt-2 text-[var(--color-text)] opacity-80">
                Your food delivered hot & on time, every time.
              </p>
            </div>

            <div className="bg-[var(--color-background)] rounded-2xl p-6 shadow hover:scale-105 transition transform">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="font-bold text-lg text-[var(--color-primary)]">Love & Care</h4>
              <p className="text-sm mt-2 text-[var(--color-text)] opacity-80">
                Every meal made with attention, love & creativity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-[var(--color-primary)] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Craving Delicious Food? 😍
          </h2>
          <p className="text-white opacity-80 mt-4 text-lg">
            Explore our menu and taste happiness at KHAAOPIYO 🍕🍔
          </p>
          <button
            onClick={() => navigate("/home")}
            className="mt-10 bg-[var(--color-secondary)] text-white px-12 py-4 rounded-xl
            font-bold hover:bg-[var(--color-secondary-hover)] transition transform hover:scale-110 shadow-2xl"
          >
            🍽️ Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
