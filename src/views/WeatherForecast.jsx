import React, { Fragment } from "react";
import ForecastToday from "../components/ForecastToday";
import ForecastsDaily from "../components/ForecastsDaily";
import { useSelector } from "react-redux";
import { selectForecast, selectForecasts } from "../features/forecastsSlice";

const WeatherForecast = () => {
  const city = useSelector(state => state.city.value),
  todayForecast = useSelector(selectForecast),
  dailyForecasts = useSelector(selectForecasts),
  toCelsius = (fahrenheit) => parseInt((fahrenheit - 32)*5 / 9),
  toKilometre = (mile) => parseInt(mile * 1.609344),
  forecastDate = (dateTime) => {
    const indexOfT = dateTime.indexOf("T");
    return dateTime.slice(0, indexOfT);
  },
  date = (date) => new Date(date).toLocaleDateString(),
  dayInNumber = (date) => new Date(date).getDay(),
  day = (date) => {
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return weeks[dayInNumber(date)];
  };

  console.log(dailyForecasts);
  console.log(todayForecast);
  console.log(city);

  return (
    <Fragment>
      <ForecastToday
        city={city}
        todayForecast={todayForecast}
        toCelsius={toCelsius}
        toKilometre={toKilometre}
        forecastDate={forecastDate}
        date={date}
        day={day}
      />
      <ForecastsDaily
        dailyForecasts={dailyForecasts}
        todayForecast={todayForecast}
        toCelsius={toCelsius}
        forecastDate={forecastDate}
        day={day}
      />
    </Fragment>
  )
}

export default WeatherForecast;