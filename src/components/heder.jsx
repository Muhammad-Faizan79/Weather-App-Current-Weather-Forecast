const Header = ({setDark ,dark})=> {
    return (
        <header className="header">

            <div className="logo">
                <div className="logo-icon">☁</div>

                <div>
                    <h1>Weatherly</h1>
                    <span>Weather at a glance</span>
                </div>
            </div>

            <div className="header-actions">

                <button className="unit-btn active">
                    °C
                </button>

                {/* <button className="unit-btn">
                    °F
                </button> */}

                <button className="theme-btn" onClick={()=>{
                    console.log("dark" , )
                    setDark(!dark)}}>
                    {dark ? "🌙" : "☀️"}

                </button>

            </div>

        </header>
    );
}

export default Header;