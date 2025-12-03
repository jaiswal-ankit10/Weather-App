import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-700 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          About WeatherNow
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          WeatherNow is a lightweight and fast weather forecasting application
          built using <span className="font-semibold">React</span> and
          <span className="font-semibold"> Tailwind CSS</span>. The app provides
          real-time weather information such as temperature, wind speed,
          humidity, and a weekly forecast using free public APIs.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Our goal is to deliver clean, accurate, and easy-to-understand weather
          insights with a beautiful user interface. Whether you're planning your
          day or tracking long-term conditions, WeatherNow gives you everything
          you need in one place.
        </p>

        <div className="border-t border-white/40 pt-6">
          <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>React.js - UI rendering</li>
            <li>Tailwind CSS - Styling & responsiveness</li>
            <li>OpenWeather API - Current weather</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
