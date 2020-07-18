import React, { useState } from "react";
import { fetchWeather } from "../../services";
import { IData } from "../../interfaces";
import { Weather, Search } from "../../components";

const Home = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<IData>({
    main: { temp: 20 },
    name: "Jakarta",
    sys: { country: "Indonesia" },
    weather: [
      {
        description: "cold",
        icon: "04d",
      },
    ],
  });

  const handleSearch = async (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const data = await fetchWeather(query);

      setResponse(data);
      setQuery("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Search query={query} onChange={handleChange} onSearch={handleSearch} />
      {response.main && (
        <Weather
          name={response.name}
          country={response.sys.country}
          temp={response.main.temp}
          icon={response.weather[0].icon}
          description={response.weather[0].description}
        />
      )}
    </div>
  );
};

export default Home;
