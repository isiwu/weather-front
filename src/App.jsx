import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useLocation, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import loading from "./assets/image/loading-icon.gif";
import "./assets/css/App.scss";
import Home from "./views/Home";
import WeatherForecast from "./views/WeatherForecast";
import { selectLoadingStatus, selectServerError } from "./features/forecastsSlice";

const App = () => {
  const location = useLocation(),
  loadingStatus = useSelector(selectLoadingStatus),
  serverError = useSelector(selectServerError);

  // useEffect(() => {
  //   console.log("!");
  // }, [])

  console.log(location.pathname);
  return (
    <div className="App">
      <NavBar pathname={ location.pathname } />

      { serverError && <div className="alert alert-danger mb-0">
        Server busy. Try again!
      </div>}
      <main className={location.pathname === "/"?"content home py-5":"content py-5"}>
        { loadingStatus !== "loading"  ? <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/weather-forecast" element={ <WeatherForecast /> } />
          </Routes> : 
          <img src={loading}
            alt="loading"
            aria-label="loading-icon"
            className="loading-image"
          />
        }
      </main>

      <Footer pathname={ location.pathname } />
    </div>
  )
}

export default App;