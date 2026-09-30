const WeatherCard=({data})=> {
     const date = new Date(data.dt * 1000);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
    return (
        <div className="current-weather card">

            <div className="location">
                <span className="location-icon">
                    📍
                </span>

                <div>
                    <h2>{data.name}</h2>
                    <p>{data.sys.country}</p>
                </div>
            </div>

            <div className="date">
                {formattedDate}
            </div>

            <div className="main-weather">

                <div className="weather-icon">
                    ☀️
                </div>

                <div className="temperature">
                    <span>{data.main.temp}</span>
                    <sup>°C</sup>
                </div>

                <div className="condition">
                    <h3>{data.weather[0].description}</h3>
                    <p>Feels like {data.main.feels_like}°</p>
                </div>

            </div>

            <div className="weather-description">
                Perfect weather for outdoor activities.
            </div>

        </div>
    );
}

export default WeatherCard;