const Forecast=({forcasrData})=> {


    const forecast = [
        {
            day: "Today",
            icon: "☀️",
            high: `${forcasrData.list[0].main.temp_max}°`,
            low: `${forcasrData.list[0].main.temp_min}°`,
            condition: `${forcasrData.list[0].weather[0].description}`
        },
        {
            day: "Tue",
            icon: "🌤️",
            high: `${forcasrData.list[1].main.temp_max}°`,
            low: `${forcasrData.list[1].main.temp_min}°`,
            condition: `${forcasrData.list[1].weather[0].description}`
        },
        {
            day: "Wed",
            icon: "☁️",
            high: `${forcasrData.list[2].main.temp_max}°`,
            low: `${forcasrData.list[2].main.temp_min}°`,
            condition: `${forcasrData.list[2].weather[0].description}`
        },
        {
            day: "Thu",
            icon: "☁️",
            high: `${forcasrData.list[3].main.temp_max}°`,
            low: `${forcasrData.list[3].main.temp_min}°`,
            condition: `${forcasrData.list[3].weather[0].description}`
        },
        {
            day: "Fri",
            icon: "☀️",
            high: `${forcasrData.list[4].main.temp_max}°`,
            low: `${forcasrData.list[4].main.temp_min}°`,
            condition: `${forcasrData.list[4].weather[0].description}`
        }
    ];

    return (
        <section className="forecast-section">

            <div className="section-title">

                <div>
                    <span>FORECAST</span>
                    <h2>Next 5 Days</h2>
                </div>

            </div>


            <div className="forecast-grid">

                {forecast.map((item, index) => (

                    <div
                        className="forecast-card"
                        key={index}
                    >

                        <div className="forecast-day">
                            {item.day}
                        </div>

                        <div className="forecast-icon">
                            {item.icon}
                        </div>

                        <div className="forecast-temp">
                            {item.high}

                            <span>
                                {item.low}
                            </span>
                        </div>

                        <div className="forecast-condition">
                            {item.condition}
                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Forecast;