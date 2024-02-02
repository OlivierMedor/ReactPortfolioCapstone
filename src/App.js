import React, { useReducer, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HeroBanner from './HeroBanner';
import WeeklySpecials from './WeeklySpecials';
import About from './pages/About';
import Menu from './pages/Menu';
import BookingPage from './pages/BookingPage ';
import ConfirmedBooking from './ConfirmedBooking';

const reducer = (state, action) => {
  switch (action.type) {
    case "setBooking":
      return { ...state, ...action.payload }
    default:
      return state;
  }
};

const availableTimeListReducer = (state, action) => {
  switch (action.type) {
    case "updateTimeList":
      return { ...state, availableTimes: [ ...action.payload ] }
    case "chosenTime":
      return { ...state, chosenTime: action.payload }
    default:
      return state;
  }
}

export default function App() {
const [formData, setFormData] = useReducer(reducer, {});

const [availableTimesList, setAvailableTimesList] = useReducer(availableTimeListReducer, { availableTimes: [], chosenTIme: '' });

const [didFormSubmit, setDidFormSubmit] = useState(false);

const [successfullFormSubmit, updateFormSubmit] = useState(false);

const navigate = useNavigate();

const submitForm = (data) => {
  setFormData({type: 'setBooking', payload: data });
  setDidFormSubmit(true);
}

useEffect(() => {
  if(didFormSubmit) {
    fetch(`/api/availableTimes`)
    .then((res) => res.json())
    .then((data) => updateFormSubmit(true))
  }
}, [didFormSubmit]);

useEffect(() => {
  fetch(`/api/availableTimes`)
    .then((res) => res.json())
    .then((data) => setAvailableTimesList({type: 'updateTimeList', payload: data.availableTimes }))
}, []);

useEffect(() => {
  if(successfullFormSubmit) {
    navigate("/Confirmed-Booking");
  }
}, [successfullFormSubmit]);

const updateTime = (newTime) => {
  setAvailableTimesList({type: 'chosenTime', payload: newTime })
};

const displayAvailableTimesList = availableTimesList.availableTimes.map((times, index) => <li key={index}>{times.time}</li>);

  return (
    <>
    <Header></Header>
    <HeroBanner></HeroBanner>
    <div className="available-times">
      <ul>
        { displayAvailableTimesList }
      </ul>
      <h3>{ availableTimesList?.chosenTime && <div>{ availableTimesList.chosenTime }</div>}</h3>
    </div>
    <WeeklySpecials></WeeklySpecials>
    <Routes>
      <Route index element={<Main />} />
      <Route path="/Home" element={<Main />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Confirmed-Booking" element={<ConfirmedBooking />} />
      <Route path="/BookingPage" element={<BookingPage updateTime={ updateTime } availableTimesList={ availableTimesList } submitForm={ submitForm } />} />
    </Routes>
    <Footer></Footer>
    </>
  );
};