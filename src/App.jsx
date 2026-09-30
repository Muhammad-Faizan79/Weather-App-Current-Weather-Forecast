import Header from "./components/heder";
import SearchBar from "./components/SearchBar";
import WeatherDetailCard from "./components/weatherDtetails";
import ForecastCard from "./components/Forecast";


import "./App.css";
import WeatherCard from "./components/WeatherCard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [city ,setCity]= useState("karachi");
    const [data ,setData]= useState(null);
    const [errore , setError]=useState("")
    const [forcasrData , setForcasrData]=useState(null)
    useEffect(()=>{
    // if(!city)return
    getdata()
    },[city])

const API_KEY = import.meta.env.VITE_API_KEY;
const FORECAST_API =
    "https://api.openweathermap.org/data/2.5/forecast";
    // `${FORECAST_API}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`


const WEATHER_API =
    "https://api.openweathermap.org/data/2.5/weather";
const getdata = async()=>{
   try {
     const fechData = await axios.get(`${WEATHER_API}?q=${city}&appid=${API_KEY}&units=metric`);
    setData(fechData.data);
    const focastD= await axios.get(`${FORECAST_API}?q=${city}&appid=${API_KEY}&units=metric`);
    setForcasrData(focastD)
    
   } catch (error) {
    const fet =await axios.get(`${WEATHER_API}?q=karachi&appid=${API_KEY}&units=metric`);
    setData(fet.data);
    const focastD= await axios.get(`${FORECAST_API}?q=karachi&appid=${API_KEY}&units=metric`);
    setForcasrData(focastD)
    setError("city not found try again") 
    alert(errore)   
   }
}
    const [dark , setDark] = useState(false)
    return (
        <div className={dark ? "app dark" : "app"}>
            <div className="background">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            <div className="app">

                <Header setDark= {setDark} dark={dark} />

                <main>
                    <SearchBar setCity={setCity} />

                    {data && <WeatherCard data={data} />}
                    { data && <WeatherDetailCard data={data} />}

                    {forcasrData && <ForecastCard forcasrData={forcasrData.data} />}
                </main>

                <footer>
                    Weatherly © 2026
                </footer>

            </div>
        </div>
    );
}

export default App;