import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { searchEntered } from "../features/citySlice";
import { getForecasts } from "../features/forecastsSlice";
import "../assets/css/SearchInput.scss";

const SearchInput = (props) => {
  const [input, setInput] = useState(''),
    navigate = useNavigate(),
    location = useLocation(),
    onInputChange = (evt) => setInput(evt.target.value),
    dispatch = useDispatch(),
    onEnterKeyPress = (evt) => {
      if (evt.key === "Enter") {
        dispatch(searchEntered(input));
        dispatch(getForecasts(input)).unwrap()
        .then((data) => {
          if (data.dailyForecasts.length > 0) navigate("/weather-forecast")
          else navigate(location.pathname);
        });
      }
    };
  
  return (
    <div className={ props.container?"container search-input":"search-input"} >
      <input
        type="text"
        placeholder="search city or location"
        name="input"
        className={props.cssClass}
        value={input}
        onChange={onInputChange}
        onKeyDown={onEnterKeyPress}
      />
    </div>
  )
};

export default SearchInput;