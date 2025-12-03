import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCurrentWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const data = await res.json();
      if (data.cod === "404") {
        setError("City not found!");
        return;
      }

      setWeather(data);
      setCity(cityName);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        weather,
        loading,
        error,
        fetchCurrentWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
