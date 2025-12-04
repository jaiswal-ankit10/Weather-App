import React from "react";

const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="bg-white/20 p-6 rounded-xl shadow text-center">
      <h2 className="text-3xl font-bold">{weather.name}</h2>
      <p className="text-6xl">{weather.main.temp}°C</p>
      <p className="capitalize text-xl">{weather.weather[0].description}</p>

      <div className="flex justify-center gap-10 mt-4">
        <p>💨 {weather.wind.speed} km/h</p>
        <p>💧 {weather.main.humidity}%</p>
      </div>
    </div>
  );
};

export default React.memo(CurrentWeatherCard);
