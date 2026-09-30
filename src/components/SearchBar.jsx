import { useState } from "react";

const SearchBar=({setCity})=> {
    const [search , SetSearch]=useState("")

    const hedller =(e)=>{
        e.preventDefault();
        if(!search)return
        setCity(search)
        SetSearch("")
        

    }
    return (


        <section className="search-section">
            <form className="search-box" onSubmit={hedller}>

                <span className="search-icon">
                    ⌕
                </span>

                <input
                    value={search}
                    type="text"
                    placeholder="Search city..."
                    onChange={(e)=>SetSearch(e.target.value)}
                />

                <button
                    type="submit"
                    className="search-btn"
                >
                    Search
                </button>

            </form>

            <p className="search-hint">
                Try: Karachi, London, Tokyo, New York
            </p>
        </section>
    );
}

export default SearchBar;