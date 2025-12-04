import React, { useCallback, useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";
import CurrentWeatherCard from "../components/CurrentWeatherCard";

const Home = () => {
  const { weather, loading, error, fetchCurrentWeather } = useWeather();
  const [input, setInput] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (input.trim() !== "") {
        fetchCurrentWeather(input);
        setInput("");
      }
    },
    [input, fetchCurrentWeather]
  );

  return (
    <div className="py-20 mt-18 bg-linear-to-br from-slate-800 to-slate-700 min-h-screen text-white">
      <div className="max-w-3xl mx-auto border bg-linear-to-r from-teal-400 to-yellow-200 p-10 rounded-xl shadow-xl text-black">
        <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter city..."
            className="border rounded w-full p-2 text-black"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white rounded bg-linear-to-r from-green-500 to-green-800"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-center text-xl">Loading...</p>}

        {error && <p className="text-center text-red-300">{error}</p>}

        <CurrentWeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default Home;
