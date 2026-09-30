const WeatherDetails = ({data})=> {
    return (
        <div className="details-grid">

            <div className="detail-card card">

                <div className="detail-icon">
                    💧
                </div>

                <div>
                    <span>Humidity</span>
                    <strong>{data.main.humidity}%</strong>
                </div>

            </div>


            <div className="detail-card card">

                <div className="detail-icon">
                    💨
                </div>

                <div>
                    <span>Wind Speed</span>
                    <strong>{data.wind.speed} km/h</strong>
                </div>

            </div>


            <div className="detail-card card">

                <div className="detail-icon">
                    ◉
                </div>

                <div>
                    <span>Pressure</span>
                    <strong>{data.main.pressure} hPa</strong>
                </div>

            </div>


            <div className="detail-card card">

                <div className="detail-icon">
                    👁
                </div>

                <div>
                    <span>Visibility</span>
                    <strong>{data.visibility / 1000} km</strong>
                </div>

            </div>

        </div>
    );
}

export default WeatherDetails;