import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <div className="min-h-screen bg-(--color-background) px-6 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-white px-4 py-2 rounded-full shadow text-sm font-semibold text-(--color-secondary)">
              🍽️ Fresh • Fast • Delicious
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-(--color-primary)leading-tight">
              Good Food,<br />
              <span className="text-(--color-secondary)">
                Good Mood 😋
              </span>
            </h1>

            <p className="mt-6 text-lg text-(--color-text) opacity-80">
              Welcome to <span className="font-semibold">KHAAOPIYO</span> —  
              where every bite feels like home 🏡💛  
              Order your favorite meals and enjoy restaurant-quality food,
              made with love ❤️
            </p>

            <div className="flex gap-4 mt-10">
              <button
                onClick={() => navigate("/login")}
                className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-xl font-bold
                hover:bg-[var(--color-secondary-hover)] transition transform hover:scale-110 shadow-xl"
              >
                🍔 Order Now
              </button>

              <button
                onClick={() => navigate("/about")}
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary)]
                px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-primary)]
                hover:text-white transition transform hover:scale-110"
              >
                ✨ Our Story
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 relative">
            <div className="absolute -top-6 -right-6 bg-[var(--color-secondary)] text-white px-4 py-2 rounded-xl shadow-lg">
              ⭐ 4.8 Rated
            </div>

            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
              Why People Love Us 💖
            </h3>

            <ul className="space-y-5 text-[var(--color-text)] text-lg">
              <li className="flex items-start gap-4">
                <span className="text-2xl">🍳</span>
                Freshly cooked meals — no compromise on quality
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">⚡</span>
                Fast ordering & smooth experience
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🧼</span>
                Clean, hygienic & trusted kitchens
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🔥</span>
                Hot & tasty food delivered on time
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* EMOTION SECTION */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">
            Because Food is an Emotion ❤️
          </h2>

          <p className="mt-6 text-lg text-[var(--color-text)] opacity-80">
            From quick bites 🍟 to full meals 🍛 —  
            KHAAOPIYO brings happiness to your plate.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[var(--color-background)] rounded-2xl p-6 shadow">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h4 className="font-bold text-lg text-[var(--color-primary)]">
                Expert Chefs
              </h4>
              <p className="text-sm mt-2 text-[var(--color-text)] opacity-80">
                Cooked by people who love food as much as you do
              </p>
            </div>

            <div className="bg-[var(--color-background)] rounded-2xl p-6 shadow">
              <div className="text-4xl mb-4">🥗</div>
              <h4 className="font-bold text-lg text-[var(--color-primary)]">
                Quality Ingredients
              </h4>
              <p className="text-sm mt-2 text-[var(--color-text)] opacity-80">
                Fresh veggies, premium spices & real taste
              </p>
            </div>

            <div className="bg-[var(--color-background)] rounded-2xl p-6 shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-bold text-lg text-[var(--color-primary)]">
                Fast Service
              </h4>
              <p className="text-sm mt-2 text-[var(--color-text)] opacity-80">
                Your hunger won’t wait — and neither do we
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-[var(--color-primary)] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Ready to Taste Happiness? 😍
          </h2>

          <p className="text-white opacity-80 mt-4 text-lg">
            Join KHAAOPIYO today & make every meal special ✨
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-10 bg-[var(--color-secondary)] text-white px-12 py-4 rounded-xl
            font-bold hover:bg-[var(--color-secondary-hover)] transition transform hover:scale-110 shadow-2xl"
          >
            🍽️ Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
