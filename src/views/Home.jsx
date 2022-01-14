import React from "react";
import SearchInput from "../components/SearchInput";
import "../assets/css/Home.scss"

const Home = () => {
  return (
    <div className="home">
      {/* {dailyForecasts.length > 0 && <Navigate to="weather-forecast" replace={false} /> } */}
      <h3 className="text-white">Weather Info</h3>
      <SearchInput cssClass="big input" container={false} />
    </div>
  );
}

export default Home;